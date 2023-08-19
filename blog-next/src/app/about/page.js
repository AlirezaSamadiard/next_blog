import React from 'react'
import style from './page.module.css'
import Alone from 'public/alone.jpg'
import Image from 'next/image'
import Button from '@/components/button/Button'

function About() {
  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        <Image src={Alone} fill={true} alt='alone'
        className={style.img}/>
        <div className={style.imgText}>
          <h1 className={style.imgTitle}>Digital Storytellers</h1>
          <h2 className={style.imgDesc}>Handcrafting award winning digital experiences</h2>
        </div>
      </div>
      <div className={style.textContainer}>
        <div className={style.item}>
          <h1 className={style.title}>Who are we ?</h1>
          <p className={style.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
            <br/>
            <br/>
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet?
          </p>
        </div>
        <div className={style.item}>
          <h1 className={style.title}> What we do ?</h1>
          <p className={style.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
            Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <Button url='/contact' text='contact'/>
        </div>
      </div>
    </div>
    
  )
}

export default About
