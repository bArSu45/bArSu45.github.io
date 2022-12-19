import { Box, Heading, Image } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import style from "./About.module.css"
import Aos from "aos"
import "aos/dist/aos.css"
import { FaDownload } from 'react-icons/fa'

export default function About({ colorMode }) {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <Box>
            <div id='About' style={{ height: "100px" }}></div>
            <Heading size={['2xl', '2xl', '2xl', '3xl']} textAlign='center' color={colorMode === 'light' ? "#4C3575" : '#BFACE0'}>ABOUT</Heading>
            <div data-aos="flip-left">
                <Box id={style.aboutDiv} color={colorMode === 'light' ? "#4C3575" : '#BFACE0'}>
                    <Image id={style.myImg} src='/barsu.png' alt='Barsa Ima' />
                    <Box id={style.aboutDetails}>
                        <p className={style.name}>I am Barsa Rani Ojha</p>
                        <p className={style.name}>Full Stack Web Developer</p>
                        <p className={style.name}>Master In Computer Application</p>
                        <p className={style.name}>I live in Jagatsinghpur,Odisha,India</p>
                        <p className={style.namep}>I am a dedicated, organized and methodical
                            individual. I have good interpersonal skills, am an
                            excellent team worker and am keen and very willing to
                            learn and develop new skills.</p>
                        <Box id={style.resumeDiv} backgroundColor={colorMode === 'light' ? "#4C3575" : '#BFACE0'}>
                            <a id={style.resumeButton} href="./Barsa.pdf" download="Barsu's Resume">Resume &nbsp;<FaDownload className={style.resumeDownloadLogo} /></a>
                        </Box>
                    </Box>
                </Box>
            </div>
        </Box>
    )
}
