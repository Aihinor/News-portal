import React, { useEffect } from 'react'
import './index.less'
import logo from '../../assets/login/logo.png'
import default_avatar from '../../assets/user-center/default-avatar.png'

export default function Sider() {

  useEffect(() => {
    window.addEventListener('scroll',function(event){
      const sider_div = this.document.getElementById('sider')
      // 获取滚动条滚动的距离
      const scrollT = document.documentElement.scrollTop
      // console.log(scrollT) // 510
      if(scrollT > 510){
        sider_div.classList.add('croll_sider')
      }else{
        sider_div.classList.remove('croll_sider')
      }
    })
  }, [])

  return (
    <div id='sider'>
      <div className='sider_box'>
        <img style={{ height: '100px', width: '100px' }} src={logo} alt='' />
        <div className='user_box'>
          <img style={{ height: '50px', width: '50px' }} src={default_avatar} alt='' />
          <span>新用户</span>
        </div>
      </div>
    </div>
  )
}
