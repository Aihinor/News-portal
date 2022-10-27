import React, { useEffect,useState } from 'react'
import './index.less'
import logo_text from '../../assets/logo/logo_text.png'
import Tab from '../Tab'
import { SearchOutlined } from '@ant-design/icons';
import { Button, Dropdown, Modal, Menu } from 'antd';
import { useNavigate,useLocation } from 'react-router-dom'
import { ExclamationCircleOutlined } from '@ant-design/icons';
import default_avator from '../../assets/user-center/default-avatar.png'

export default function Details() {

  const navigate = useNavigate()
  const { confirm } = Modal;

  useEffect(()=>{
  },)

  const showConfirm = () => {
    confirm({
      title: '你确定要退出账号吗？退出后有些服务无法享受噢~',
      icon: <ExclamationCircleOutlined />,
      onOk() {
        navigate('/login')
      },
    });
  };

  const menu = (
    <Menu className='user_menu'
      items={[
        {
          key: '1',
          label: (
            <Button >个人中心</Button>
          ),
        },
        {
          key: '2',
          label: (
            <Button>肺炎地图</Button>
          ),
        },
        {
          key: '3',
          label: (
            <Button onClick={showConfirm}>退出登录</Button>
          ),
        },
      ]}
    />
  );

  // input获得焦点
  const myFocus = () => {
    const inp = document.querySelector('.header_searchInp')
    const icon = document.querySelector('.header_searchIcon')
    const map_div = document.querySelector('.pneumonia_map')
    inp.classList.remove('narrow')
    icon.classList.remove('left_move')
    inp.classList.add('enlarge')
    icon.classList.add('right_move')
    map_div.style.display = 'none';
    // inp.style.width = '320px'
    // icon.style.left = '1228px'
  }

  // input失去焦点
  const myBlur = () => {
    const inp = document.querySelector('.header_searchInp')
    const icon = document.querySelector('.header_searchIcon')
    const map_div = document.querySelector('.pneumonia_map')
    inp.classList.remove('enlarge')
    icon.classList.remove('right_move')
    inp.classList.add('narrow')
    icon.classList.add('left_move')
    map_div.style.display = 'block';
    // inp.style.width = '200px'
    // icon.style.left = '1108px'

  }

  return (
    <div className='details_header'>
      <img className='header_img' style={{ width: '133px', height: '50px' }} src={logo_text} alt='' />
      <Tab  />
      <input onFocus={myFocus} onBlur={myBlur} placeholder='请输入搜索的内容' className='header_searchInp' />
      <SearchOutlined className='header_searchIcon' />
      <div className='pneumonia_map'>肺炎地图</div>
      <Dropdown overlay={menu} placement="bottom" arrow>
        <Button style={{ boxShadow: 'none' }}>
          <img style={{ width: '32px', height: '32px' }} src={default_avator} alt='' />
        </Button>
      </Dropdown>
    </div>
  )
}
