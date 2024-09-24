import React from 'react'
import Skill_icon from './skill_icon'
import pythonIcon from '../../assets/Icon/python.svg'
import jsIcon from '../../assets/Icon/js.svg'
import reactIcon from '../../assets/Icon/react.svg'
import mysqlIcon from '../../assets/Icon/mysql.svg'
import htmlIcon from '../../assets/Icon/html.svg'
import cssIcon from '../../assets/Icon/css.svg'
import nodeIcon from '../../assets/Icon/node.svg'
import mongodbIcon from '../../assets/Icon/mogodb.svg'



export default function Skill() {
    return (
        <>
        <section className='skillSet-container'>   
            <div className='skill-title'><h1>SKILL SET</h1></div>
            
            <div className='skillSet-main'>
                <Skill_icon
                    lang_icon ={pythonIcon}
                    />
                <Skill_icon 
                    lang_icon ={jsIcon}
                    />
                <Skill_icon 
                    lang_icon ={reactIcon}
                    />
                <Skill_icon 
                    lang_icon ={mysqlIcon}
                    />
                <Skill_icon 
                    lang_icon ={htmlIcon}
                    />
                <Skill_icon 
                    lang_icon ={cssIcon}
                    />
                <Skill_icon 
                    lang_icon ={nodeIcon}
                    />
                <Skill_icon 
                    lang_icon ={mongodbIcon}
                    />
                
            </div>
        </section>

        </>
    )
}
