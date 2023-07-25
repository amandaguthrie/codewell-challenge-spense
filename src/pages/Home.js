import React from 'react';
import {Flex} from "@chakra-ui/react";
import CallToAction1 from "../components/CallToAction1";
import BrandBar from "../components/BrandBar";
import CallToAction2 from "../components/CallToAction2";
import CallToAction3 from "../components/CallToAction3";

Home.propTypes = {};

function Home() {
    return (
        <>
            <Flex direction={{base: 'column'}}
                  bgColor='#EFEDEB'
                  paddingX={{base: '2rem', lg: '10vw', xl: '15vw'}}
            >
                <CallToAction1/>
            </Flex>
            <Flex direction={{base: 'column'}}
                  paddingX={{base: '2rem', lg: '10vw', xl: '15vw'}}
                  gap='2rem'
            >
                <BrandBar/>
                <CallToAction2/>
                <CallToAction3/>
            </Flex>
        </>
    )
        ;
}

export default Home;