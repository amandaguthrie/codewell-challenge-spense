import React from 'react';
import {Flex, Heading, Link, Text} from "@chakra-ui/react";
import {NavLink as RouterLink} from "react-router-dom";

NavigationFooter.propTypes = {};

function NavigationFooter() {
    // noinspection JSValidateTypes
    return (
        <Flex direction='row'
              wrap={{base: 'wrap', lg: 'nowrap'}}
              gap='1rem' alignItems='start' justifyContent='space-between' paddingY='2rem' minWidth='100%'>
            <Flex direction='column' gap='0.5rem' maxWidth={{base: '100%', lg: '33%'}}>
                <Heading as='h1' fontWeight='semibold' fontSize='xl' color='#FFFFFF'>spense.</Heading>
                <Text noOfLines={3}>
                    <Text as='span'>Spense is an open platform for individuals to share their unfiltered thoughts.
                        Discuss the topics you love, and get paid for doing </Text><Text as='em'>just</Text><Text
                    as='span'> that.</Text></Text>
                <Text fontSize='xs' color='whiteAlpha.800'>
                    Challenge by <Link href="https://www.codewell.cc/challenges/spense-landing-page--608a7a859691700015db16c5" fontWeight='bold' isExternal>Codewell</Link>. Coded by <Link href="https://github.com/amandaguthrie" fontWeight='bold' isExternal>Amanda Guthrie</Link>.
                </Text>
            </Flex>
            <Flex direction='column' gap='0.5rem'>
                <Heading as='h1' fontWeight='semibold' fontSize='xl' color='#FFFFFF'>Sitemap</Heading>
                <Link as={RouterLink} to="/">Homepage</Link>
            </Flex>
            <Flex direction='column' gap='0.5rem'>
                <Heading as='h1' fontWeight='semibold' fontSize='xl' color='#FFFFFF'>Resources</Heading>
                <Link href="#">Support</Link>
                <Link href="#">Contact</Link>
                <Link href="#">FAQ</Link>
            </Flex>
            <Flex direction='column' gap='0.5rem'>
                <Heading as='h1' fontWeight='semibold' fontSize='xl' color='#FFFFFF'>Company</Heading>
                <Link href="#">About</Link>
                <Link href="#">Customers</Link>
                <Link href="#">Blog</Link>
            </Flex>
            <Flex direction='column' gap='0.5rem'>
                <Heading as='h1' fontWeight='semibold' fontSize='xl' color='#FFFFFF'>Opportunities</Heading>
                <Link href="#">Jobs</Link>
            </Flex>

        </Flex>
    );
}

export default NavigationFooter;