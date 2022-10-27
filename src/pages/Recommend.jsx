import axios from 'axios'
import React, { useState, useEffect } from 'react'
import './less/hotspot.less'
import { message } from 'antd'
import { useNavigate } from 'react-router-dom'

export default function Hotspot() {
  const navigate = useNavigate()
  const [record, setRecord] = useState([])

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://127.0.0.1:3007/my/article/achieve',
      headers: { 'Authorization': localStorage.getItem('token') },
    }).then(res => {
      if (res.data.status === 1) {
        message.error('token过期，请重新登录！')
      } else {
        setRecord(res.data.data)
      }
    })
  }, [])

  const onclick = (id) => {
    navigate('/details')
  }

  return (
    <div className='hotspot_box'>
      <ul id='father'>
        {
          record.map((item, key) => {
            return (
              <li className='list_box' key={key} onClick={() => onclick(item.Id)}>
                <div className='content_box'>
                  <p className='title_box'>{item.title}</p>
                  <p>
                    <span>{item.press}</span>
                    <span>{item.likes}评论</span>
                    <span>{item.pub_date}</span>
                  </p>
                </div>
                <div className='img_box'>
                  <img src={require(`../assets/news/${item.cover_img}`)} alt="图片" />
                </div>
              </li>
            )
          })
        }
      </ul>

    </div>
  )
}
