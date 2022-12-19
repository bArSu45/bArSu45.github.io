import { Heading } from '@chakra-ui/react'
import React from 'react'
import MajorProject from './MajorProject'
import MiniProject from './MiniProject'
import style from './Project.module.css'

export default function Project({ colorMode }) {
    return (
        <div>
            <div id='Projects' style={{ height: "100px" }}></div>
            <div id={style.projects}>
                <Heading size={['2xl', '2xl', '2xl', '3xl']} textAlign='center' color={colorMode === 'light' ? "#243D25" : '#488A99'}>PROJECTS</Heading>
                <MajorProject colorMode={colorMode} />
                <MiniProject colorMode={colorMode} />
            </div>
        </div>
    )
}
