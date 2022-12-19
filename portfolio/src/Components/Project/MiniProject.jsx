import { Box, Button, Heading, Image } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import style from './Project.module.css'
import { FaArrowRight, FaGithub } from 'react-icons/fa'
import Aos from "aos"
import "aos/dist/aos.css"

export default function MiniProject({ colorMode }) {

    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <div id={style.majorMain}>
            <Heading size={['lg', 'lg', 'lg', '2xl']} color='#4C3575' textDecoration='underline'>Minor Projects</Heading>
            <div data-aos="fade-up"
                className={style.major_projectDiv}  >
                <Box className={style.major_project_imgDiv}>
                    <Image src='https://clinquant-lily-6a6bb2.netlify.app/5.png' alt='barsu' />
                </Box>
                <Box className={style.major_project_detailsDiv} color={colorMode === 'light' ? "#4C3575" : '#488A99'}>
                    <Heading className={style.major_project_detailsDiv_Heading} size={['md', 'md', 'md', 'lg']}>YOUTUBE(Cloned)</Heading>
                    <Heading className={style.major_project_detailsDiv_detail} fontWeight="500" size={['xs', 'sm', 'sm', 'md']}>YouTube is an American online video sharing and social media platform headquartered in San Bruno, California. </Heading>
                    <Heading className={style.major_project_detailsDiv_tehcs} size={['sm', 'sm', 'sm', 'md']}>Tech Stack: HTML | CSS | JavaScript</Heading>
                    <Box className={style.major_project_detailsDi_btnDiv}>
                        <Button size={['xs', 'sm', 'sm', 'md']} ><a className={style.links} rel="noreferrer" href="https://github.com/bArSu45/Youtube-cloned-" target="_blank">Source Code </a> &nbsp;< FaGithub /> </Button>
                        <Button size={['xs', 'sm', 'sm', 'md']} ><a className={style.links} rel="noreferrer" href="https://62aec458d002661172622f35--delightful-biscochitos-b2f2b6.netlify.app/" target="_blank">Live </a> &nbsp;< FaArrowRight /> </Button>
                    </Box>
                </Box>
            </div>

            <div data-aos="fade-up"
                id={style.minor_projectDivId}
                className={style.major_projectDiv}  >
                <Box className={style.major_project_detailsDiv} color={colorMode === 'light' ? "#4C3575" : '#488A99'}>
                    <Heading className={style.major_project_detailsDiv_Heading} size={['md', 'md', 'md', 'lg']}>SUPER SALE</Heading>
                    <Heading className={style.major_project_detailsDiv_detail} fontWeight="500" size={['xs', 'sm', 'sm', 'md']}>A e-commerce website that allows people to buy super sale physical goods, services, and digital products over the internet rather than at a brick-and-mortar location.</Heading>
                    <Heading className={style.major_project_detailsDiv_tehcs} size={['sm', 'sm', 'sm', 'md']}>Tech Stack: HTML | CSS | JavaScript | React</Heading>
                    <Box className={style.major_project_detailsDi_btnDiv}>
                        <Button size={['xs', 'sm', 'sm', 'md']}><a className={style.links} rel="noreferrer" href="https://www.google.com" target="_blank">Source Code </a> &nbsp;< FaGithub /> </Button>
                        <Button size={['xs', 'sm', 'sm', 'md']}><a className={style.links} rel="noreferrer" href="https://toggl-launching.vercel.app/" target="_blank">Live </a> &nbsp;< FaArrowRight /> </Button>
                    </Box>
                </Box>
                <Box className={style.major_project_imgDiv}>
                <Image src='https://clinquant-lily-6a6bb2.netlify.app/6.png' alt='barsu' />
                </Box>
            </div>

            <div data-aos="fade-up"
                className={style.major_projectDiv}  >
                <Box className={style.major_project_imgDiv}>
                    <Image src='https://musical-kulfi-8ddfaa.netlify.app/7.png' alt='barsu' />
                </Box>
                <Box className={style.major_project_detailsDiv} color={colorMode === 'light' ? "#4C3575" : '#488A99'}>
                    <Heading className={style.major_project_detailsDiv_Heading} size={['md', 'md', 'md', 'lg']}>JOB APP</Heading>
                    <Heading className={style.major_project_detailsDiv_detail} fontWeight="500" size={['xs', 'sm', 'sm', 'md']}>A online website where you can apply for new job and you can sort and filter job by job profile and salary.</Heading>
                    <Heading className={style.major_project_detailsDiv_tehcs} size={['sm', 'sm', 'sm', 'md']}>Tech Stack: HTML | CSS | JavaScript</Heading>
                    <Box className={style.major_project_detailsDi_btnDiv}>
                        <Button size={['xs', 'sm', 'sm', 'md']} ><a className={style.links} rel="noreferrer" href="https://62aec458d002661172622f35--delightful-biscochitos-b2f2b6.netlify.app/" target="_blank">Source Code </a> &nbsp;< FaGithub /> </Button>
                        <Button size={['xs', 'sm', 'sm', 'md']} ><a className={style.links} rel="noreferrer" href="https://62aec458d002661172622f35--delightful-biscochitos-b2f2b6.netlify.app/" target="_blank">Live </a> &nbsp;< FaArrowRight /> </Button>
                    </Box>
                </Box>
            </div>
        </div>
    )
}
