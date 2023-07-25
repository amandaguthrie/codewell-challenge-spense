import React from 'react';
import {Grid, Image} from "@chakra-ui/react";

function BrandBar() {
    return (
        <Grid templateRows='3rem' templateColumns={{base: 'repeat(3, 1fr)', sm: 'repeat(5, 1fr)', lg: 'repeat(8, 1fr)'}}
              gap='2rem' align='start' marginY='2rem' maxHeight='3rem' overflow='hidden'>
            <Image src='/assets/Facebook Logo.png'
                   minWidth='100%'
                   minHeight='100%'
                   objectFit='contain'/>
            <Image src='/assets/Dribbble Logo.png'
                   minWidth='100%'
                   minHeight='100%'
                   objectFit='contain'/>
            <Image src='/assets/YouTube Logo.png'
                   minWidth='100%'
                   minHeight='100%'
                   objectFit='contain'/>

            <Image src='/assets/Pinterest Logo.png'
                   minWidth='100%'
                   minHeight='100%'
                   objectFit='contain'/>
            <Image src='/assets/Twitter Logo.png'
                   minWidth='100%'
                   minHeight='100%'
                   objectFit='contain'/>
            <Image src='/assets/Reddit Logo.png'
                   minWidth='100%'
                   minHeight='100%'
                   objectFit='contain'/>
            <Image src='/assets/Google Logo.png'
                   minWidth='100%'
                   minHeight='100%'
                   objectFit='contain'/>
            <Image src='/assets/Slack Logo.png'
                   minWidth='100%'
                   minHeight='100%'
                   objectFit='contain'/>

        </Grid>
    );
}

export default BrandBar;