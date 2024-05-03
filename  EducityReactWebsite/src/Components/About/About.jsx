import React from 'react'
import './About.css'
import about_image from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className ='about'>
        {/* there will be two columns */}
        <div className="about-left">
            <img src= {about_image} alt = "" className='about-img'/>
            <img src= {play_icon} alt = "" className='play-icon' onClick={()=>{
              setPlayState(true)
            }}/>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Embark on a transformative educational journey with our university's comprehensive education programs.Our cutting edge curriculum is designed to empower students with knowledge, skills, and experiences needed to excel in the dynamic field of education.</p>
            <p>
                With a focus on innovation, hands-on learning,personalised mentorships, our program enables aspiring educators to make an impact in classrooms, schools, and communities.
            </p>
            <p>Whether you aspire to become a student,teacher, administrator, counsellor or an educational leader, our diverse range of programs offers a perfect pathway to acheive your goal and unlock your full potential in shaping education.</p>
        </div>
      
    </div>
  )
}

export default About
