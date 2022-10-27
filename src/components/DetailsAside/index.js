import React from 'react'
import './index.less'
import logo from '../../assets/login/logo.png'
import default_avatar from '../../assets/user-center/default-avatar.png'

export default function DetailsAside() {
  return (
    <div id='details_sider'>
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
