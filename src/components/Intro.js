import React from 'react'
import Circle from './Circle'
import {motion} from 'framer-motion'

const headingVariants = {
    hidden:{
        opacity:0,
        x:-100
    },
    visible:{
        opacity:1,
        x:0
    }
}
 
const Intro = () => {
    return (
        <div className='intro-container'>
            <div className='intro-text'>
                <motion.h1
                    variants={headingVariants}
                    initial='hidden'
                    animate='visible'
                    transition={{delay:.4,type:'tween',duration:.5}}
                >
                    Hey there! My name is
                </motion.h1>
                <motion.h2
                    variants={headingVariants}
                    initial='hidden'
                    animate='visible'
                    transition={{delay:.6,type:'tween',duration:.5}}
                >
                    Stanley Garbo
                </motion.h2>
                <motion.h3
                    variants={headingVariants}
                    initial='hidden'
                    animate='visible'
                    transition={{delay:.8,type:'tween',duration:.5}}
                >
                    I build mesmerizing websites
                </motion.h3>
                <motion.p
                    variants={headingVariants}
                    initial='hidden'
                    animate='visible'
                    transition={{delay:1,type:'tween',duration:.5}}
                >
                    I'm still a senior highschool student from the philipines, I have been
                    coding and building websites for about 2 years now. I specialize in frontend 
                    development.
                </motion.p>
            </div>  
            <Circle size='100px' />
            <motion.a href='mailto:stanleygarbo@gmail.com'
                variants={headingVariants}
                initial='hidden'
                animate='visible'
                transition={{delay:1.2,type:'tween',duration:.5}}
            >
                Message Me
            </motion.a>
        </div>
    )
}

export default Intro
