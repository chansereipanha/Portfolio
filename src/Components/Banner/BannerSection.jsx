import React from 'react'
import NZTravel_banner from '../../assets/Small Picture/nzTravel_small.png'
import Calc_banner from '../../assets/Small Picture/calc_small.png'
import PingPong_banner from '../../assets/Small Picture/PingPong_small.png'
import Banner from './Banner'

export default function BannerSection() {
    return (
        <>
            <section className='bannerSection-container'>
                <div className='bannerSection-title'>
                    <h1>Project</h1>
                </div>
                <div className='bannerSection-main'>
                    <div className='firstBanner'>
                        <Banner   
                            image = {NZTravel_banner}
                            bannerText = "This is a New Zealand Traveling Agency Website made to help tourist find the best and must go to spot in New Zealand."/>
                    </div>
                    <div className='secondBanner'>
                        <Banner   
                            image = {Calc_banner}
                            bannerText = "A simple calculator web app that can be used to calculate basic math problems."/>   
                    </div>
                    <div className='thirdBanner'>
                        <Banner   
                            image = {PingPong_banner}
                            bannerText = "A classic ping pong game that allows multiplayer and keeps track of players score!."/>   
                    </div>
                </div>
            </section>
        </>
    )
}
