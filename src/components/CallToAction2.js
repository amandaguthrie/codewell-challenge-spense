import React from 'react';
import {Card, CardBody, CardHeader, Heading, Icon, Image, Link, Text} from "@chakra-ui/react";
import {FaExternalLinkAlt} from "react-icons/fa";

CallToAction2.propTypes = {};

function CallToAction2() {
    // noinspection JSValidateTypes
    return (
        <Card size="lg"
              bgColor="#EFEDEB"
              color='#595546'
              variant="unstyled"
              minWidth='100%'
              direction={{base: 'column', lg: 'row'}}
              paddingX='2rem'
              paddingTop='2rem'
              paddingBottom='0'
              alignItems='center'
              gap='2rem'>
            <CardHeader maxWidth={{base: '100%', lg: '50%', xl: '50%'}}>
                <Heading as='h2' fontSize={{base: '2xl', lg: '4xl'}} color='#000000' pb='2rem'>
                    Secure your money with Escrow.
                </Heading>
                <Text pb='2rem'>
                    Spense uses Escrow to secure all payments. We believe Escrow offers the highest level of security
                    for your payments, so you never need to worry about scams.
                </Text>
                <Link href="#"
                      borderBottom='1px solid'
                      fontWeight="semibold"
                      isExternal
                      _hover={{
                          textDecoration: 'none'
                      }}
                >
                    Learn more about Escrow <Icon as={FaExternalLinkAlt}/></Link>
            </CardHeader>
            <CardBody width='100%'
                      display='flex'
                      alignItems={{base: 'center', lg: 'end'}}
                      justifyContent={{base: 'center', lg: 'end'}}

                      padding='0px !important'
            >
                <Image src='/assets/Phone Mockup (Desktop) Square.png'
                       maxWidth={{base: '203px', lg: '405px'}}
                       width='calc((100vw*29)/27)'
                       height='100%'
                       objectPosition='bottom right'
                       display={{base: 'none', lg: 'flex', xl: 'flex'}}
                />
                <Image src='/assets/Phone Mockup (Mobile).png'
                       maxWidth={{base: '374px', lg: '374px'}}
                       width='calc((100vw*374)/405)'
                       height='100%'
                       objectPosition='bottom center'
                       display={{base: 'flex', sm: 'none'}}
                />
                <Image src='/assets/Phone Mockup (Tablet).png'
                       maxWidth={{base: '688px', lg: '688px'}}
                       width='calc((100vw*688)/405)'
                       height='100%'
                       objectPosition='bottom center'
                       display={{base: 'none', sm: 'flex', lg: 'none'}}
                />
            </CardBody>
        </Card>
    );
}

export default CallToAction2;