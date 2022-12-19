import { Box, Button, Heading, Image } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import style from './Project.module.css'
import { FaArrowRight, FaGithub } from 'react-icons/fa'
import Aos from "aos"
import "aos/dist/aos.css"

export default function MajorProject({ colorMode }) {

    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <div id={style.majorMain}>
            <Heading size={['lg', 'lg', 'lg', '2xl']} color={colorMode === 'light' ? "#243D25" : '#488A99'} textDecoration='underline'>Major Projects</Heading>
            <div data-aos="fade-up"
                className={style.major_projectDiv}  >
                <Box className={style.major_project_imgDiv}>
                    <Image src='https://clinquant-lily-6a6bb2.netlify.app/3.png' alt='barsu' />
                </Box>
                <Box className={style.major_project_detailsDiv} color={colorMode === 'light' ? "#243D25" : '#488A99'}>
                    <Heading className={style.major_project_detailsDiv_Heading} size={['md', 'md', 'md', 'lg']}>TMETRIC(Cloned)</Heading>
                    <Heading className={style.major_project_detailsDiv_detail} fontWeight="500" size={['xs', 'sm', 'sm', 'md']}>Simple time tracking app which helps you to control your time, increase productivity, monitor your team performance.</Heading>
                    <Heading className={style.major_project_detailsDiv_tehcs} size={['sm', 'sm', 'sm', 'md']}>Tech Stack: HTML | CSS | JavaScript</Heading>
                    <Box className={style.major_project_detailsDi_btnDiv}>
                        <Button size={['xs', 'sm', 'sm', 'md']}><a className={style.links} rel="noreferrer" href="https://github.com/Shibshankar01/wooden-tongue-937" target="_blank">Source Code </a> &nbsp;< FaGithub /> </Button>
                        <Button size={['xs', 'sm', 'sm', 'md']}><a className={style.links} rel="noreferrer" href="https://amazing-daffodil-72806d.netlify.app/" target="_blank">Live </a> &nbsp;< FaArrowRight /> </Button>
                    </Box>
                </Box>
            </div>

            <div data-aos="fade-up"
                className={style.major_projectDiv}
                id={style.major_projectDivId} >
                <Box className={style.major_project_detailsDiv} color={colorMode === 'light' ? "#243D25" : '#488A99'}>
                    <Heading className={style.major_project_detailsDiv_Heading} size={['md', 'md', 'md', 'lg']}>DNA NEWS(Cloned)</Heading>
                    <Heading className={style.major_project_detailsDiv_detail} fontWeight="500" size={['xs', 'sm', 'sm', 'md']}>Launched on July 30, 2005, in Mumbai. Through news, views, analyses and interactivity, dna provides readers with a composite unbiased picture of the city.</Heading>
                    <Heading className={style.major_project_detailsDiv_tehcs} size={['sm', 'sm', 'sm', 'md']}>Tech Stack: HTML | CSS | JavaScript</Heading>
                    <Box className={style.major_project_detailsDi_btnDiv}>
                        <Button size={['xs', 'sm', 'sm', 'md']}><a className={style.links} rel="noreferrer" href="https://github.com/utkarshqw/DNA-News-clone" target="_blank">Source Code </a> &nbsp;< FaGithub /> </Button>
                        <Button size={['xs', 'sm', 'sm', 'md']}><a className={style.links} rel="noreferrer" href="https://luxury-lollipop-1d0feb.netlify.app/" target="_blank">Live </a> &nbsp;< FaArrowRight /> </Button>
                    </Box>
                </Box>
                <Box className={style.major_project_imgDiv}>
                    <Image src='https://clinquant-lily-6a6bb2.netlify.app/2.png' alt='barsu' />
                </Box>
            </div>

            <div data-aos="fade-up"
                className={style.major_projectDiv}  >
                <Box className={style.major_project_imgDiv}>
                    <Image src='/3.png' alt='barsu' />
                </Box>
                <Box className={style.major_project_detailsDiv} color={colorMode === 'light' ? "#243D25" : '#488A99'}>
                    <Heading className={style.major_project_detailsDiv_Heading} size={['md', 'md', 'md', 'lg']}>TMETRIC(Cloned)</Heading>
                    <Heading className={style.major_project_detailsDiv_detail} fontWeight="500" size={['xs', 'sm', 'sm', 'md']}>Simple time tracking app which helps you to control your time, increase productivity, monitor your team performance.</Heading>
                    <Heading className={style.major_project_detailsDiv_tehcs} size={['sm', 'sm', 'sm', 'md']}>Tech Stack: HTML | CSS | JavaScript</Heading>
                    <Box className={style.major_project_detailsDi_btnDiv}>
                        <Button size={['xs', 'sm', 'sm', 'md']}><a className={style.links} rel="noreferrer" href="https://github.com/Shibshankar01/wooden-tongue-937" target="_blank">Source Code </a> &nbsp;< FaGithub /> </Button>
                        <Button size={['xs', 'sm', 'sm', 'md']}><a className={style.links} rel="noreferrer" href="https://amazing-daffodil-72806d.netlify.app/" target="_blank">Live </a> &nbsp;< FaArrowRight /> </Button>
                    </Box>
                </Box>
            </div>
        </div>
    )
}
