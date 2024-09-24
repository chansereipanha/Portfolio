import './hero.css'


function Hero(
    {   
        hero_bgColor, 
        heroImg,
        heroTitle,
        heroSubtitle,
        heroText,
        flipDisplay_direction,
        hero_marginLeft,
        hero_paddingRight,
        hero_imgWidth,
    })
    
    {

    return(
    <section className='hero-container' style={{backgroundColor : hero_bgColor, flexDirection : flipDisplay_direction}}>
        <div className='profile-pic' >
        <img src={heroImg} alt=""  style={{width : hero_imgWidth}} />
        </div>
        <div className='profile-desc' style={{marginLeft : hero_marginLeft, paddingRight : hero_paddingRight}}>
            <h2>{heroTitle}</h2>
            <h1>{heroSubtitle}</h1>
            <p>{heroText}</p>
        </div>
    </section>
    );
}

export default Hero          

