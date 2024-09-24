import React from 'react'
import myPicture from '../assets/Big Picture/pfp.jpg'
import Hero from '../Components/Hero/Hero'
import Skill from '../Components/Skill/Skill'
import Banner  from '../Components/Banner/Banner'
import './about-me.css'

export default function AboutMe() {
  return (
          <>
              <Hero
                heroImg = {myPicture}
                heroTitle = 'More about me!'
                heroText= "My name is SereiPanha Chan, I am from Cambodia and currently studying Bachelor of IT at Whitecliffe College in New Zealand. I'm in my first year and is excited to expand my knowledge to be a programmer to create and innovate more things in the tech industry"/>


              <section className='experienceSection-container'>
                              <div className='experienceSection-title'>
                                  <h1>My Experience</h1>
                              </div>
                              <div className='experienceSection-main'>
                                  <div className='exp_firstBanner'>
                                    <Banner 
                                      bannerTitle = 'UI/UX Designer'
                                      bannerText = "I currently understand languages such as HTML, CSS, and JS. Have made multiple websites using these languages and is always improving my designing skills."/>
                                  </div>
                                  <div className='exp_secondBanner'>
                                    <Banner 
                                      bannerTitle = 'Programmer'
                                      bannerText = "I have currently learned to use many programming languages such as python. Have made apps and games using these languages and is currently learning more programming languages." />   
                                  </div>
                                  <div className='exp_thirdBanner'>
                                    <Banner 
                                      bannerTitle = 'Designer'
                                      bannerText = "I know how to use many design apps and tools such as Figma and Adobe. Made many projects and edits using these tools and is always improving my designing skills." />   
                                  </div>
                              </div>
              </section>
              

              <Skill />
          </>
  )
}
