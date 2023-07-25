import React from 'react';
import {Flex, Heading, IconButton, Link} from "@chakra-ui/react";
import {FaBars} from "react-icons/fa";
import {NavLink, NavLink as RouterLink} from "react-router-dom"
import ButtonDark from "./common/ButtonDark";

NavigationMain.propTypes = {};

function NavigationMain() {
    const navigationLinkData = [
        {
            label: "Business",
            to: "/business",
            display: 'flex'
        },
        {
            label: "Pricing",
            to: "/pricing",
            display: 'flex'
        },
        {
            label: "Features",
            to: "/features",
            display: 'flex'
        }
    ]

    const loginLinkData = [
        {
            label: "Login",
            to: "/login",
            display: {base: 'none', sm: 'flex'}
        }
    ]

    const navigationLinks = (linkArray) => {
        // noinspection JSValidateTypes
        return linkArray.map((link) => (
            <Link as={RouterLink}
                  to={link.to}
                  display={link.display}
                  key={link.label.toLowerCase()}
                  _activeLink={{fontWeight: 'bold'}}
            >{link.label}</Link>
        ))
    }


    // noinspection JSValidateTypes
    return (
        <Flex direction={{base: 'column'}}
              bgColor='#EFEDEB'
              paddingX={{base: '2rem', lg: '10vw', xl: '15vw'}}
        >
            <Flex as='nav'
                  marginY='1rem'
                  direction={{lg: 'row'}}
                  alignItems='center'
                  justifyContent='space-between'
                  minWidth='100%'
                  color='#000000'
            >
                <Heading as='h1' fontWeight='semibold' fontSize='xl' color='#000000'><Link as={RouterLink}
                                                                                           to='/'>spense.</Link></Heading>
                <Flex direction={{lg: 'row'}}
                      alignItems='center'
                      justifyContent='space-between'
                      gap='1rem'
                      fontSize='lg'
                      display={{base: 'none', sm: 'flex'}}
                >
                    {navigationLinks(navigationLinkData)}

                </Flex>
                <Flex direction={{lg: 'row'}}
                      alignItems='center'
                      justifyContent='space-between'
                      gap='1rem'
                      fontSize='lg'
                >
                    {navigationLinks(loginLinkData)}
                    <ButtonDark as={NavLink}
                                to="/get-started"
                                size='lg'
                                display={{base: 'none', sm: 'flex'}}
                                text='Get Started'/>
                    <IconButton bgColor='inherit' color='#000000' aria-label='Open Menu' fontSize='2rem'
                                icon={<FaBars/>}
                                display={{base: 'flex', sm: 'none'}}/>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default NavigationMain;