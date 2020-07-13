import React from 'react'

const About = () => {
    return (
        <section className='about' id='about'>
            <div className='img-container'>
                <div className='img'></div>
                <div className='lines'></div>
            </div>
            <div className='about-text'>    
                <div className='title'>    
                    <h1>About me</h1>
                    <div className='line'></div>
                </div>
                <p>
                I'm Stanley, I'm a front-end developer, I have been developing websites for over 
                2 years now. I also have been using React and Firebase in my projects.
                I'm currently a student at ACLC College, but despite me being very young 
                I can still deliver value to your business. That is by building websites for you.
                </p>
                <p>Some of the technologies that I've been currently working on:</p>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>Firebase</li>
                </ul>
            </div>
        </section>
    )
}

export default About
