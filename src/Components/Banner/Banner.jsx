import './banner.css'
import React from 'react'
import { Link, NavLink }  from 'react-router-dom'

export default function Banner(props) {
    return (
        <>
            <div className="banner-container">
                <div className='bannerMain'>
                    <img src= {props.image} alt="" className='bannerImg' />
                    <p className='bannerTitle'>{props.bannerTitle}</p>
                    <p className='bannerText'>{props.bannerText}</p>
                </div>

                <div className='viewButton'>
                    <NavLink to='/Project'>
                        <button type='submit'>View</button>
                    </NavLink>
                </div>
            </div>
        </>
    )
}
