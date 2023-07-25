// noinspection JSValidateTypes

import React from 'react';
import {Flex, Heading, Icon, Image, Input, Text} from "@chakra-ui/react";
import {FaCheckCircle} from "react-icons/fa";
import ButtonDark from "./common/ButtonDark";

CallToAction1.propTypes = {};

function CallToAction1() {
    const heroImageDesktop = '/assets/Hero Image (Desktop).png'
    const heroImageTablet = '/assets/Hero Image (Tablet).png'
    const heroImageMobile = '/assets/Hero Image (Mobile).png'
    return (
        <Flex
            padding={0}
            marginY='4rem'
            direction={{base: 'column-reverse', lg: 'row'}}
            alignItems='center'
            justifyContent='space-between'
            minWidth='100%'
            gap={{base: '2rem', lg: '8rem'}}
        >
            <Flex direction={{base: 'column'}}
                  maxWidth={{xl: '38%'}}
                  gap='1rem'
            >
                <Heading as='h1' color='#000000' fontWeight='semibold' fontSize={{base: '3xl', lg: '5xl'}}>Share your
                    unfiltered thoughts.
                    Get
                    paid.</Heading>
                <Text> <Text as='span'>Spense is an open platform for individuals to share their unfiltered thoughts.
                    Discuss
                    the topics you love, and get paid for doing </Text><Text as='em'>just </Text><Text
                    as='span'>that.</Text></Text>
                <Flex direction={{base: 'column'}}
                >
                    <Flex direction={{base: 'row'}}
                          alignItems='center'
                          gap='0.5rem'
                          fontWeight='semibold'
                    >
                        <Icon as={FaCheckCircle} color='#000000'></Icon>
                        <Text>Receive 99% of the earnings.</Text>
                    </Flex>
                    <Flex direction={{base: 'row'}}
                          alignItems='center'
                          gap='0.5rem'
                          fontWeight='semibold'
                    >
                        <Icon as={FaCheckCircle} color='#000000'></Icon>
                        <Text>Get paid via Debit Card, ACH, or PayPal.</Text>
                    </Flex>
                    <Flex direction={{base: 'row'}}
                          alignItems='center'
                          gap='0.5rem'
                          fontWeight='semibold'
                    >
                        <Icon as={FaCheckCircle} color='#000000'></Icon>
                        <Text>Withdraw your earnings anytime.</Text>
                    </Flex>
                </Flex>
                <Flex as='form'
                      direction='row'
                      alignItems='center'
                      gap='0.5rem'
                >
                    <Input type="email"
                           size='lg'
                           id='email'
                           name='email'
                           placeholder='john@example.com'
                           bgColor='#FFFFFF'

                    />
                    <ButtonDark size='lg'
                                display={{base: 'none', sm: 'flex'}} text='Get Started'/>
                </Flex>
            </Flex>
            <Flex maxHeight={{lg: '547'}}
                  maxWidth={{lg: '448'}}
                  alignItems='end'
            >
                <Image src={heroImageMobile} objectFit='contain' align='center' display={{base: 'block', sm: 'none'}}/>
                <Image src={heroImageTablet} objectFit='contain' align='center'
                       display={{base: 'none', sm: 'block', lg: 'none'}}/>
                <Image src={heroImageDesktop} boxSize='md' objectFit='contain' align='right'
                       display={{base: 'none', lg: 'block'}}></Image>

            </Flex>

        </Flex>
    );
}

export default CallToAction1;