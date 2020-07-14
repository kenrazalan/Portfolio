import React from 'react'
import Project from './Project'
import intellimemes from '../icons/intellimemes.png'
import movieSurfer from '../icons/movie-surfer.png'
import todoApp from '../icons/google-keep-clone.png'
import firebaseIcon from '../icons/firebase.svg'
import reactIcon from '../icons/react-js.svg'
import vueIcon from '../icons/vue-js.svg'
import githubIcon from '../icons/github.svg'
import arrowIcon from '../icons/arrow.svg'


const Projects = () => {
    return (
        <section className='project-container' id='projects'>
            <div className='title'>
                <h1>Projects</h1>
                <div className='line'></div>
            </div>
            <div className='projects'>
                <Project 
                    projectTitle='Intellimemes.com' 
                    projectImage={intellimemes} 
                    projectDescription='A social media site for people to upload memes With CRUD functionalities '
                    techs={[
                        {icon:firebaseIcon,name:'Firebase'},
                        {icon:reactIcon,name:'React'}
                    ]}
                    links={[
                        {icon:arrowIcon,url:'https://intellimemes.com'}
                    ]}
                />
                <Project 
                    projectTitle='Movie Surfer' 
                    projectImage={movieSurfer} 
                    projectDescription='A Movie Information site I made with ReactJS, SwiperJS, Redux, axios and TMDB API.'
                    techs={[
                        {icon:reactIcon,name:'React'}
                    ]}
                    links={[
                        {icon:githubIcon,url:'https://github.com/stanleygarbo/Movie-surfer'},
                        {icon:arrowIcon,url:'https://movie-surfer.netlify.app'}
                    ]}
                />
                <Project 
                    projectTitle='Google Keep Clone' 
                    projectImage={todoApp} 
                    projectDescription='A Todolist App I made with Vue and Firebase.'
                    techs={[
                        {icon:firebaseIcon,name:'Firebase'},
                        {icon:vueIcon,name:'Vue'}
                    ]}
                    links={[
                        {icon:githubIcon,url:'https://github.com/stanleygarbo/Google-Keep-Clone'},
                        {icon:arrowIcon,url:'https://google-keep-clone-stanleygarbo.netlify.app/'}
                    ]}
                />
            </div>
        </section>
    )
}

export default Projects
