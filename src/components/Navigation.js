import React,{useState,useEffect,useRef} from 'react'
import {motion} from 'framer-motion'

const pVariants ={
    hidden:{
        opacity:0,
        x:-100
    },
    visible:{
        opacity:1,
        x:0,
        transition:{
            delay:.1,
            type:'tween'
        }
    },
}

const Navigation = ({windowDimensions}) => {
    const [openMenu,setOpenMenu] = useState(false)
    const [lastScrollPos,setLastScrollPos] = useState(window.scrollY)
    const [scrollY,setScrollY] = useState({})
    const nav = useRef(null)

    useEffect(()=>{
        if(scrollY>lastScrollPos && scrollY >= 150){
            nav.current.style.top = '-100%'
        }
        else if(scrollY<lastScrollPos && scrollY >= 150){
            nav.current.style.top = '0px'
        }
        setLastScrollPos(scrollY)
    },[scrollY,lastScrollPos])
    
    const updateScrollPosition = () =>{
        setScrollY(window.scrollY)
    }

    useEffect(()=>{
        window.addEventListener('scroll',updateScrollPosition)
        return () => window.removeEventListener('scroll',updateScrollPosition)
    },[])

    const toggleMenu = () =>{
        setOpenMenu(!openMenu)
        document.body.style.overflowY=openMenu?'scroll':'hidden'
    }

    return (
        <nav 
        ref={nav}
        style={{
            boxShadow: scrollY >= 10 ? '0 4px 4px -1px rgba(0,0,0,0.5)':null,
        }}
        >
            <motion.p
               variants={pVariants}
               initial='hidden'
               animate='visible'
            >GARBO<span>.</span></motion.p>
            {
                windowDimensions.x >=700 ?
                <Links />
                :
                <div className='menu' style={{right:openMenu ? '0%':'-100%'}}>
                    <Links toggleMenu={toggleMenu}/>
                </div>
            }

            {windowDimensions.x <700 && openMenu && <div className='closer' onClick={toggleMenu}></div>}

            {
               windowDimensions.x >=700 ?
               null
               :
               <div className='hamburger-container' onClick={toggleMenu}>
                   <div className='hamburger-lines' 
                    style={{transform:openMenu && 'translateY(10px) rotate(492deg)',
                        width:'34px'
                    }}
                   >
                   </div>
                   <div className='hamburger-lines' 
                    style={{transform:openMenu && 'rotate(905deg)',
                    opacity: openMenu && '0',
                        width:'25px'
                    }}
                   >
                   </div>

                   <div className='hamburger-lines' 
                    style={{transform:openMenu && 'translateY(-10px) rotate(585deg)',
                        width:openMenu?'34px':'16px'
                    }}
                   >
                   </div>
               </div>
            }
        </nav>
    )
}

const liVariants={
    hidden:{
        y:-100,
        opacity:0
    },
    visible:{
        y:0,
        opacity:1
    }
}

const Links =({toggleMenu})=>
    <ul>
        <motion.li
            variants={liVariants}
            initial='hidden'
            animate='visible'
            transition={{delay:.2,type:'tween',duration:.5}}
        >
            01.
        <a onClick={toggleMenu} href='#about'>About</a></motion.li>
        <motion.li
            variants={liVariants}
            initial='hidden'
            animate='visible'
            transition={{delay:.4,type:'tween',duration:.5}}
        >
            02.
        <a onClick={toggleMenu} href='#projects'>Projects</a></motion.li>
        <motion.li
            variants={liVariants}
            initial='hidden'
            animate='visible'
            transition={{delay:.6,type:'tween',duration:.5}}
        >
            03.
        <a onClick={toggleMenu} href='#contact'>Contact</a></motion.li>
    </ul>


export default Navigation
