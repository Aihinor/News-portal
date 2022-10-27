import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './index.less'
import { LikeFilled, StarFilled } from '@ant-design/icons';
import share from '../../assets/details/share.png'
import comment from '../../assets/details/comment.png'
import { message } from 'antd'
import { useLocation } from 'react-router-dom';

export default function Likes() {

  const location = useLocation()
  const id = location.pathname.substring(9)
  // console.log(id)
  const [userdata, setUserdata] = useState([{ likes: '', comment: '' }])

  // 封装请求接口函数
  const updateState = () => {
    axios({
      method: 'get',
      url: `http://127.0.0.1:3007/my/article/gain/${id}`,
      headers: { 'Authorization': localStorage.getItem('token') },
    }).then(res => {
      if (res.data.status === 1) {
        message.error('token过期，请重新登录！')
      } else {
        // console.log(res.data.data)
        setUserdata(res.data.data)
      }
    })
  }

  useEffect(() => {
    updateState()
  }, [])

  const onclick = () => {
    // console.log(userdata[0].is_likes)
    if (userdata[0].is_likes === 0) {
      let likeIcon = document.getElementsByClassName('likes_icon')
      likeIcon[0].style.color = '#ed3b35'
      let likeText = document.getElementsByClassName('likes_text')
      likeText[0].style.color = '#ed3b35'
      axios({
        method: 'get',
        url: `http://127.0.0.1:3007/my/article/updatelikes/${id}`,
        headers: { 'Authorization': localStorage.getItem('token') },
      }).then(res => updateState())
    } else {
      let likeIcon = document.getElementsByClassName('likes_icon')
      likeIcon[0].style.color = '#222222'
      let likeText = document.getElementsByClassName('likes_text')
      likeText[0].style.color = '#222222'
      axios({
        method: 'get',
        url: `http://127.0.0.1:3007/my/article/removelikes/${id}`,
        headers: { 'Authorization': localStorage.getItem('token') },
      }).then(res => updateState())
    }
  }

  return (
    <div className='icon_box'>
      <div className='likes_box' onClick={onclick}>
        <div className='circular_box'>
          <LikeFilled className='likes_icon' />
        </div>
        <span className='likes_text'>{userdata[0].likes}</span>
      </div>
      <div style={{ borderBottom: '1px solid #f0f2f5', width: '28px', margin: '14px 0' }}></div>
      <div className='comment_box'>
        <img src={comment} alt='' className='comment_img' />
        <span>{userdata[0].comment}</span>
      </div>
      <div className='star_box'>
        <StarFilled className='star_icon' />
        <span>收藏</span>
      </div>
      <div className='share_box'>
        <img src={share} alt='' className='share_img' />
        <span>分享</span>
      </div>
    </div>
  )
}
