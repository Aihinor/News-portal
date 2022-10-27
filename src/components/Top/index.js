import React from 'react'
import './index.less'
import { Popover, Button, Dropdown, Menu, Modal } from 'antd';
import logo_text from '../../assets/logo/logo_text.png'
import default_avator from '../../assets/user-center/default-avatar.png'
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom'

export default function Top() {

  const navigate = useNavigate()

  const content = (
    <div style={{ height:'176px',width: '240px', overflow: 'hidden' }}>
      <img className='contentImg' src={logo_text} alt='' />
      <div style={{overflow:'hidden'}}>
        <div className='span_text'>致力于打造一套用户体验好，阅读舒适的新闻阅读平台，同时帮助用户在平台中获取到最新的资讯，了解国家大事，关注疫情动态，做好个人防范。</div>
      </div>
    </div>
  );

  const { confirm } = Modal;
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

  return (
    <div className='top_navigate'>
      <Popover content={content} trigger="hover">
        <Button style={{ boxShadow: 'none' }}>关于</Button>
      </Popover>
      <Dropdown overlay={menu} placement="bottom" arrow>
        <Button style={{ boxShadow: 'none' }}>
          <img style={{ width: '32px', height: '32px' }} src={default_avator} alt='' />
        </Button>
      </Dropdown>
    </div>
  )
}
