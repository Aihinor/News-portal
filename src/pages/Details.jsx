import React,{useEffect,useState} from 'react'
import DetailsHeader from '../components/DetailsHeader'
import DetailsAside from '../components/DetailsAside'
import './less/details.less'
import Likes from '../components/Likes'
import axios from 'axios'
import { message } from 'antd'
import { useLocation } from 'react-router-dom';

export default function Details() {

  const location = useLocation()
  const id = location.pathname.substring(9)
  const [newsContent,setNewsContent] = useState()

  useEffect(()=>{
    axios({
      method: 'get',
      url: `http://127.0.0.1:3007/my/article/gain/${id}`,
      headers: { 'Authorization': localStorage.getItem('token') },
    }).then(res => {
      if (res.data.status === 1) {
        message.error('token过期，请重新登录！')
      } else {
        // console.log(res.data.data[0].content)
        setNewsContent(res.data.data[0].content)
      }
    })
  })

  return (
    <div className='details_box'>
      <DetailsHeader />
      <Likes/>
      <div dangerouslySetInnerHTML = {{__html:newsContent}} ></div>
      <DetailsAside />
    </div>
  )
}
