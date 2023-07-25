import React from 'react';
import {Flex, Heading, Image, Text} from "@chakra-ui/react";

Business.propTypes = {

};

function Business() {
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
                <Heading as='h2'>Business, business, business.</Heading>
                <Image src='/assets/Business.gif' />
                <Heading as='h2'>Numbers.</Heading>
                <Text as='em' fontSize='xl'>Am I doing this right?</Text>
            </Flex>
        </>
    );
}

export default Business;