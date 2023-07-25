import React from 'react';
import {Flex, Heading, Image} from "@chakra-ui/react";


function Features() {
    return (
        <>
            <Flex direction={{base: 'column'}}
                  bgColor='#EFEDEB'
                  paddingX={{base: '2rem', lg: '10vw', xl: '15vw'}}
            >
            </Flex>
            <Flex direction={{base: 'column'}}
                  paddingX={{base: '2rem', lg: '10vw', xl: '15vw'}}
                  paddingY={'2rem'}
                  gap='2rem'
            >
                <Heading as='h2'>Sometimes bugs are features in disguise.</Heading>
                <Image src='/assets/Features.gif' maxWidth='calc(364px/2)'/>
            </Flex>
        </>
    );
}

export default Features;