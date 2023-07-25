// noinspection JSValidateTypes

import React from 'react';
import {Card, CardBody, CardHeader, Heading, Icon, Image, Link, Text} from "@chakra-ui/react";
import {FaExternalLinkAlt} from "react-icons/fa";

CallToAction3.propTypes = {};

function CallToAction3() {
    return (
        <Card size="lg"
              bgColor="#FFFFFF"
              color='#595546'
              variant="unstyled"
              minWidth='100%'
              direction={{base: 'column-reverse', lg: 'row'}}
              paddingX='2rem'
              paddingTop='2rem'
              paddingBottom='0'
              alignItems='center'
              gap='2rem'>

            <CardBody width='100%'
                      display='flex'
                      alignItems='center'
                      justifyContent='center'

                      padding='0px !important'
            >
                <Image src='/assets/Text Editor.png'
                       maxWidth={{base: '100%'}}
                       width='calc((100vw*656)/429)'
                       height='100%'
                       objectPosition='center'
                       display='flex'
                />
            </CardBody>
            <CardHeader maxWidth={{base: '100%', lg: '50%', xl: '50%'}}>
                <Heading as='h2' fontSize={{base: '2xl', lg: '4xl'}} color='#000000' pb='2rem'>
                    A text editor like no other.
                </Heading>
                <Text pb='2rem'>
                    Our text editor pulls you into focus with its simplistic design and usability so you can put out
                    your best writing.
                </Text>
                <Link href="#"
                      borderBottom='1px solid'
                      fontWeight="semibold"
                      isExternal
                      _hover={{
                          textDecoration: 'none'
                      }}
                >
                    Text Editor Live Demo <Icon as={FaExternalLinkAlt}/></Link>
            </CardHeader>
        </Card>
    );
}

export default CallToAction3;