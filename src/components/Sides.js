import React from 'react'
import linkedInIcon from '../icons/linkedin.svg'
import githubIcon from '../icons/github.svg'
import twitter from '../icons/twitter.svg'
import {motion} from 'framer-motion'

const sideVariants={
    hidden:{
        opacity:0,
        y:'100%'
    },
    visible:{
        opacity:1,
        y:0
    }
}

const Sides = ({windowDimensions}) =>{

    return(
        <>
            <Social windowDimensions={windowDimensions}/>
            {windowDimensions.x > 612 && 
                <Email />
            }
        </>
    )
}

const Social = ({windowDimensions}) =>
    <motion.div className='social'
        variants={sideVariants}
        initial='hidden'
        animate='visible'
        transition={{delay:1.4,type:'tween'}}
    >
        <li>
            <a href='https://github.com/stanleygarbo' target='blank'><img src={githubIcon} alt='Guthub Icon' width='20px' height='20px' ></img></a>
        </li>
        <li>
            <img src={twitter} alt='Twitter Icon' width='20px' height='20px'></img>
        </li>
        <li>
            <a href='https://www.linkedin.com/in/stanleygarbo-4b46851b2'><img src={linkedInIcon} alt='Linked In Icon' width='20px' height='20px'></img></a>
        </li>
        {windowDimensions.x > 596 && <div></div>}
    </motion.div>

const Email = () =>
    <motion.div className='email'
        variants={sideVariants}
        initial='hidden'
        animate='visible'
        transition={{delay:1.5,type:'tween'}}

    >
        <a href='mailto:stanleygarbo@gmail.com'>stanleygarbo@gmail.com</a>
        <div></div>
    </motion.div>


export default Sides