import { Link, NavLink }  from 'react-router-dom'
import './footer.css'

function Footer(){
    return(
        <footer>
            <div className="top-footer">
                <div className="text_footer">
                    <h1>About <span>Me</span></h1>
                    <p>A student aspiring to be a great programmer, to be part of designing websites and work on many different projects. </p>
                </div>

                <div className='link_footer'>
                    <div className="footer-nav">
                        <nav>
                            <ul>
                                <li><NavLink to='/Home'>Home</NavLink></li>
                                <li><NavLink to='/Project'>Project</NavLink></li>
                                <li><NavLink to='/AboutMe'>About Me</NavLink></li>
                                <li><NavLink to='/Contact'>Contact</NavLink></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="socialMedia-footer">
                        <ul>
                            <li><a href="https://github.com/"><i class="fa-brands fa-square-github"></i></a></li>
                            <li><a href="https://www.linkedin.com/"><i class="fa-brands fa-linkedin"></i></a></li>
                            <li><a href="https://www.whatsapp.com/"> <i class="fa-brands fa-whatsapp"></i></a></li>
                            <li><a href="https://www.facebook.com/"><i class="fa-brands fa-facebook"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="bottom-footer">
                <ul>
                    <li>Terms of Service</li>
                    <li>&copy; {new Date().getFullYear()} Copyright</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
        </footer>
    );

};

export default Footer