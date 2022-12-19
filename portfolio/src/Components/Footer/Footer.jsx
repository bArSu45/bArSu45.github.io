import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaPhone, FaTwitter, FaGofore } from 'react-icons/fa'
import style from './Footer.module.css'
export default function Footer({ colorMode }) {
    return (
        <Box id={style.footer_mainDiv}>
            <Box id={style.footer_mainDiv1} color={colorMode === 'light' ? "#243D25" : '#488A99'}>
                <Heading id={style.footer_head}>Get In Touch</Heading>
                <Heading id={style.footer_head1}>You can reach out to me at</Heading>
                <Box display='flex' justifyContent='center' alignItems='center' marginTop='20px'>
                    <FaGofore />
                    &nbsp; <p>barsaraniojha@gmail</p>
                </Box>

                <Box display='flex' justifyContent='center' alignItems='center' marginTop='20px'>
                    <FaPhone />
                    &nbsp; <p>7440147634</p>
                </Box>
            </Box>
            <Box id={style.footer_mainDiv2} backgroundColor={colorMode === 'light' ? "#5F7464" : '#488A99'}>
                <Box id={style.footer_aDiv}>
                    <a href='https://twitter.com/OjhaBarsarani' target='_blank' rel="noreferrer"><FaTwitter /></a>
                    <a href='https://www.instagram.com/secret.giggle_55/' target='_blank' rel="noreferrer"> <FaInstagram /></a>
                    <a href='https://www.facebook.com/barsu.barsu.50' target='_blank' rel="noreferrer"><FaFacebook /></a>
                    <a href='https://www.linkedin.com/in/barsa-rani-ojha-296474233/' target='_blank' rel="noreferrer"><FaLinkedin /></a>
                    <a href='https://github.com/bArSu45' target='_blank' rel="noreferrer"><FaGithub /> </a>
                </Box>
            </Box>
            <Box id={style.footer_mainDiv3} backgroundColor={colorMode === 'light' ? "#5F7464" : '#488A99'}><p>Created By Barsa Rani Ojha | © 2022. All Rights Reserved</p></Box>
        </Box>
    )
}
