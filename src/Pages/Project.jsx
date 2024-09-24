import Hero from '../Components/Hero/Hero'
import nzTravel_big from '../assets/Big Picture/nzTravel_big.png'
import calc_big from '../assets/Big Picture/calc_big.png'
import pingPong_big from '../assets/Big Picture/PingPon_big.png'
import brickBreak_big from '../assets/Big Picture/brickGame_big.png'


function Project(){
return(
<>
        <Hero
                heroImg = {nzTravel_big}
                heroTitle = 'Travel Agency Website'
                heroText= 'This is a responsive website made for an New Zealand Traveling Agency. It was made to help tourist find the best and must go to spot in New Zealand. It was built using HTML and CSS with the intentions of having a minimalist style and easy to eye for users. It has the basic functions that a website should have.'

                hero_paddingRight = '5%'
                hero_imgWidth = '90%'
        />
        <Hero
                heroImg = {calc_big}
                heroTitle = 'Calculator'
                heroText= 'A simple calculator web app made from HTML, CSS, and JS. It can performs basic arithmetic operations like addition, subtraction, multiplication, and division. Users enter numbers and select operations using buttons, and the app displays the result instantly. It’s designed to be user-friendly and accessible through a web browser.'

                flipDisplay_direction = 'row-reverse'
                hero_bgColor= '#111827'      
                hero_marginLeft = '5%'
                hero_imgWidth = '90%'

        />
        <Hero
                heroImg = {pingPong_big}
                heroTitle = 'PingPong Game'
                heroText= 'A classic game where users can control the paddles using the given keys to move them up and down, and try to hit the ball to the other side. This is a basic game made using python where it will make the ball will in different directions and keep tracks of scores for the players'

                hero_paddingRight = '5%'
                hero_imgWidth = '90%'

        />
        <Hero
                heroImg = {brickBreak_big}
                heroTitle = 'Brick Breaking Game'
                heroText= 'Similar to the Ping Pong game, this game, Brick Breaking Game is a single player game where users move the paddle horizontally to follow the ball. Once the ball touches the paddle it will bounce of the paddle and move to the brick and break them. The goal is to destroy every brick on screen. Like the Ping Pong game, this was made using python. '

                flipDisplay_direction = 'row-reverse'
                hero_bgColor= '#111827'
                hero_marginLeft = '10%'
                hero_imgWidth = '90%'
        />
</>
);
}

export default Project
