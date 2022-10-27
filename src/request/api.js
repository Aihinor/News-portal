import request from './request'

// 注册
export const RegisterApi = (params) => request.post('/api/reguser', params)

// 登录
export const LoginApi = (params) => request.post('/api/login', params)

// 获取新闻数据
export const getNewsApi = (params) => request.get('/my/article/achieve',params)