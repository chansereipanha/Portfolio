import Hero from '../Components/Hero/Hero'
import BannerSection from '../Components/Banner/BannerSection'
import myPicture from '../assets/Big Picture/pfp.jpg'
import Skill from '../Components/Skill/Skill'

function Home(){
    return(
        <>
            <Hero
                heroImg = {myPicture}
                heroTitle = 'Hey there, Welcome!'
                heroSubtitle = 'I am SereiPanha Chan'
                heroText= 'But you can call me Pan. A student aspiring to be a great programmer, to be part of designing websites and work on many different projects.'
            />

            <BannerSection />
            <Skill />
        </>
    );
}

export default Home
                