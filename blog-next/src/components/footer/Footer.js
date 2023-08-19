import React from 'react'
import style from './footer.module.css'
import Image from 'next/image'

function Footer() {
  return (
    <div className={style.container}>
      <div>©2023 Lamamia. All rights reserved.</div>
      <div className={style.img}>
        <Image src='/1.png' width={15} height={15} className={style.icon} alt='Dish dev'/>
        <Image src='/2.png' width={15} height={15} className={style.icon} alt='Dish dev'/>
        <Image src='/3.png' width={15} height={15} className={style.icon} alt='Dish dev'/>
        <Image src='/4.png' width={15} height={15} className={style.icon} alt='Dish dev'/>
      </div>
    </div>
  )
}

export default Footer
