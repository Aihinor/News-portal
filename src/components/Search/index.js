import React from 'react'
import './index.less'
import { SearchOutlined } from '@ant-design/icons';
import {useNavigate} from 'react-router-dom'
import logo_white from '../../assets/logo/logo_white_text.png'

export default function Search() {

  const navigate = useNavigate();

  return (
    <div className='search'>
      <img src={logo_white} alt='' />
      <input className='searchInp' />
      <SearchOutlined onClick={()=>navigate('/login')} className='search_icon' />
    </div>
  )
}
