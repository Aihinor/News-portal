import React from 'react'
import { Carousel } from 'antd';
import first from '../../assets/home/first.jpg'
import second from '../../assets/home/second.jpg'
import third from '../../assets/home/third.jpg'
import fourth from '../../assets/home/fourth.jpg'
import fifth from '../../assets/home/fifth.jpg'
import sixth from '../../assets/home/sixth.jpg'
import './index.less'


export default function WalkingLantern() {
  return (
    <div>
      <Carousel autoplay className='walking_box'>
        <div>
          <img src={first} alt='' />
        </div>
        <div>
          <img src={second} alt='' />
        </div>
        <div>
          <img src={third} alt='' />
        </div>
        <div>
          <img src={fourth} alt='' />
        </div>
        <div>
          <img src={fifth} alt='' />
        </div>
        <div>
          <img src={sixth} alt='' />
        </div>
      </Carousel>
    </div>
  )
}
