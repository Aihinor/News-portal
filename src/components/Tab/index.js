import React, { useState, useEffect } from 'react'
import { Tabs } from 'antd';
import './index.less'
import { useNavigate, useLocation } from 'react-router-dom'

export default function Tab() {

  const location = useLocation()
  const navigate = useNavigate()
  const locationKey = location.pathname.split('/')[1]
  const [urlKey, setUrlKey] = useState('')

  const { TabPane } = Tabs;

  useEffect(() => {
    // window.location.reload()
  },)

  const onChange = (key) => {
    switch (key) {
      case 'hotspot':
        navigate('/hotspot')
        break;
      case 'recommend':
        navigate('/recommend')
        break;
      case 'sociology':
        navigate('/sociology')
        break;
      case 'amusement':
        navigate('/amusement')
        break;
      case 'technology':
        navigate('/technology')
        break;
      case 'military':
        navigate('/military')
        break;
      case 'sports':
        navigate('/sports')
        break;
      case 'automobile':
        navigate('/automobile')
        break;
      default:
        break;
    }
  };
  return (
    <div className='tab_box'>
      <Tabs defaultActiveKey={locationKey} onChange={onChange} size='large'>
        <TabPane tab="热点" key='hotspot'>
        </TabPane>
        <TabPane tab="推荐" key="recommend">
        </TabPane>
        <TabPane tab="社会" key="sociology">
        </TabPane>
        <TabPane tab="娱乐" key="amusement">
        </TabPane>
        <TabPane tab="科技" key="technology">
        </TabPane>
        <TabPane tab="军事" key="military">
        </TabPane>
        <TabPane tab="体育" key="sports">
        </TabPane>
        <TabPane tab="汽车" key="automobile">
        </TabPane>
        <TabPane className='more_box' tab="更多" key="9">
        </TabPane>
      </Tabs>
    </div>
  )
}
