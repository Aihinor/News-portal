import React from 'react'
import './less/login.less'
import logoCol from '../assets/login/logo-col.png'
import slogan from '../assets/login/slogan.png'
import logo from '../assets/login/logo.png'
import { Button, Form, Input,message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate, Link } from 'react-router-dom'
import Login from './Login'
import { RegisterApi } from '../request/api'


export default function Register() {

  const navigate = useNavigate();

  const onFinish = (values) => {
    RegisterApi({
      username:values.username,
      password:values.password
    }).then(res=>{
      if(res.status === 0){
        message.success(res.message + '!正在跳转到登录页.....');
        // 跳到登录页
        setTimeout(() =>navigate('/login'), 2000);
      }else {
        message.error(res.message);
      }
    })
  };

  return (
    <div className='login'>
      <div className='top'>
        <div className='left'></div>
        <div className='right'>
          <img title='点击返回首页' onClick={() => navigate('/')} className='logo' src={logo} alt='' />
          <div className='text_word'>账号登录</div>
          <Form className='basic'
            initialValues={{
              remember: true,
            }}
            autoComplete="off"
            onFinish={onFinish}
          >
            <Form.Item name="username"
              rules={[
                {
                  required: true,
                  message: '请输入你的账号!',
                },
              ]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder='请输入账号' />
            </Form.Item>

            <Form.Item name="password"
              rules={[
                {
                  required: true,
                  message: '请输入密码!',
                },
              ]}
            >
              <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder='请输入密码' />
            </Form.Item>

            <Form.Item
              name="confirm"
              dependencies={['password']}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: '请输入确认密码!',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }

                    return Promise.reject(new Error('两次输入密码不一致!'));
                  },
                }),
              ]}
            >
              <Input.Password placeholder='请输入确认密码' prefix={<LockOutlined />} />
            </Form.Item>

            <Form.Item className='toLogin'>
              <Link to='/login' element={<Login />}>已有账号？前往登录</Link>
            </Form.Item>

            <Form.Item className='sign' >
              <Button type="primary" htmlType="submit">
                立即注册
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <div className='bottom'>
        <img className='logo_col' src={logoCol} alt='' />
        <img className='slogan' src={slogan} alt='' />
      </div>
    </div>
  )
}
