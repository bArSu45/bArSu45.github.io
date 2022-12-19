// import { Button } from "@chakra-ui/react";
import { FaDownload } from "react-icons/fa";
import styles from "./Navbar.module.css";
import { HashLink as Link } from 'react-router-hash-link';
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function Navbar({ colorMode }) {
    return (
        <div id='Home'>
            <div id={styles.nav} style={{ backgroundColor: colorMode === 'light' ? "" : '#488A99' }}>
                <Link smooth to='#Home'>
                    <img className={styles.logo} src='https://cdn.dribbble.com/users/1299339/screenshots/8066902/media/ccbb49a1f92531a2e045c5e1b723d27f.gif' alt="logo" />
                </Link>
                <div id={styles.nav1}>
                    <h3 className={styles.nav1H}>
                        <Link smooth to='#Home'>
                            Home
                        </Link>
                    </h3>

                    <h3 className={styles.nav1H}>
                        <Link smooth to='#About'>
                            About
                        </Link>
                    </h3>

                    <h3 className={styles.nav1H}>
                        <Link smooth to='#Skills'>
                            Skills
                        </Link>
                    </h3>

                    <h3 className={styles.nav1H}>
                        <Link smooth to='#Projects'>
                            Projects
                        </Link>
                    </h3>

                    <h3 className={styles.nav1H}>
                        <Link smooth to='#Contact'>
                            Contact
                        </Link>
                    </h3>

                    <h3>
                        <a style={{ display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", wordSpacing: "-.4ch" }} id={styles.anchor} href="./Barsa.pdf" download="Barsa Rani Ojha's Resume">Resume
                            &nbsp; <FaDownload />
                        </a>
                    </h3>
                </div>

                <div id={styles.nav2}>
                    <Menu>
                        <MenuButton
                            color='#243D25'
                            backgroundColor="#FEF5ED"
                            as={Button}
                            rightIcon={< HamburgerIcon />}
                        />
                        <MenuList color='#243D25'
                            backgroundColor="#FEF5ED" >
                            <Link smooth to='#Home'>
                                <MenuItem fontSize={{ base: '20px', md: '25px', lg: '25px' }} fontWeight='bold' color='#243D25'>
                                    Home
                                </MenuItem>
                            </Link>

                            <Link smooth to='#About'>
                                <MenuItem fontSize={{ base: '20px', md: '25px', lg: '25px' }} fontWeight='bold' color='#243D25'>
                                    About
                                </MenuItem>
                            </Link>
                            <Link smooth to='#Skills'>
                                <MenuItem fontSize={{ base: '20px', md: '25px', lg: '25px' }} fontWeight='bold' color='#243D25'>
                                    Skills
                                </MenuItem>
                            </Link>
                            <Link smooth to='#Projects'>
                                <MenuItem fontSize={{ base: '20px', md: '25px', lg: '25px' }} fontWeight='bold' color='#243D25'>
                                    Projects
                                </MenuItem>
                            </Link>
                            <Link smooth to='#Contact'>
                                <MenuItem fontSize={{ base: '20px', md: '25px', lg: '25px' }} fontWeight='bold' color='#243D25'>
                                    Contact
                                </MenuItem>
                            </Link>
                        </MenuList>
                    </Menu>
                </div>
            </div>
        </div>
    )
}
