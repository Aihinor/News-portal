import axios from 'axios'
import React, { useState, useEffect } from 'react'
import './less/hotspot.less'
import { useNavigate, Link } from 'react-router-dom'
import { message } from 'antd'

export default function Hotspot() {

  const ContainerHeight = 1100;
  const navigate = useNavigate()
  const [record, setRecord] = useState([])

  const onScroll = (e) => {
    console.log(e)
    if (e.currentTarget.scrollHeight - e.currentTarget.scrollTop === ContainerHeight) {
      appendData();
    }
  };

  window.onscroll = function () {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    console.log("滚动距离" + scrollTop);
    if(scrollTop >= 1296) {
      appendData()
    }
  }

  const appendData = () => {
    axios({
      method: 'get',
      url: 'http://127.0.0.1:3007/my/article/achieve',
      headers: { 'Authorization': localStorage.getItem('token') },
    })
      .then((res) => {
        console.log(res.data.data)
        setRecord(record.concat(res.data.data))
        message.success(`${res.data.data.length} more items loaded!`);
      })
  }

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
    console.log(id)
    const w = window.open('about:blank')
    w.location.href = `http://localhost:3000/details/${id}`
  }

  return (
    <div className='hotspot_box' onScroll={onScroll}>
      <ul id='father' >
        {
          record.map((item, key) => {
            return (
              <li className='list_box' key={key} onClick={() => onclick(item.Id)}>
                <div className='content_box'>
                  <p className='title_box'>{item.title}</p>
                  <p>
                    <span>{item.press}</span>
                    <span>{item.comment}评论</span>
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
