import React from 'react';
import {Flex, Text} from "@chakra-ui/react";
function Announcement() {
    return (
        <Flex bgColor='#000000'
              color='#FFFFFF'
              fontWeight='bold'
              direction='column'
              alignItems='center'
              padding='1rem'
        >
            <Text>🎉 To celebrate Spense's launch, we will be waiving all fees for the entire month of April. <u>You will
                be receiving 100% of the earnings.</u> 🎉</Text>

        </Flex>
    );
}

export default Announcement;