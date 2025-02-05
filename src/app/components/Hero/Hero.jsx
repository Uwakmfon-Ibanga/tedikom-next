import React from 'react'
import styles from './Hero.module.css';

const Hero = ({h2a, desc, head, span, h2b, button}) => {
  return (
    <section className= {`${styles.scraperBackground} flex flex-col bg-hero justify-between items-center xl:h-[ gap-5 lg:gap[51px] xl:gap-[55px] py-7`}>
        <div className='flex flex-col items-center justify-center gap-[45px] xl:gap-[90px]'>
                <h2 className="text-[#04369A] text-center font-medium lg:font-extrabold text-3xl lg:text-[50px] xl:text-[80px] rotate-[-8deg] leading-[40px] lg:leading-[60px] xl:leading-[110px] lg:pt-[40px]">
                    {h2a}
                    <span>
                            <span className='pl-[10px]'>
                        {span}
                        <img className='w-[150px] lg:w-[250px] rotate-[7deg] absolute top-[30px] lg:top-[90px] xl:top-[140px] left-[85px] lg:left-[175px] xl:left-[400px]' src="/underline.svg" alt="underline for above text" />
                        </span>
                    </span>
                    <br /> {h2b}
                </h2>
                

                <p className="lg:max-w-[600px] text-center text-[18px] lg:text-[25px]">
                    {desc}
                </p>
                </div>

                {button}
            </section>
  )
}

export default Hero
