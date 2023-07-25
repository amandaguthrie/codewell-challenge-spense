import React from 'react';
import {Flex, Heading, Image} from "@chakra-ui/react";

Pricing.propTypes = {};

function Pricing() {
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
                <Heading as='h2'>The price is right!</Heading>
                <Image src='/assets/Price.gif'/>
            </Flex>
        </>
    );
}

export default Pricing;