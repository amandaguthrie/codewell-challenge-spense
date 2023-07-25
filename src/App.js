import React from 'react';
import {ChakraProvider, Flex,} from '@chakra-ui/react';
import Announcement from "./components/Announcement";
import NavigationMain from "./components/NavigationMain";
import spenseTheme from "./theme/spense-theme";
import NavigationFooter from "./components/NavigationFooter";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Home from "./pages/Home";
import Business from "./pages/Business";
import Pricing from "./pages/Pricing";
import Features from "./pages/Features";
import Login from "./pages/Login";
import GetStarted from "./pages/GetStarted";

function App() {
    return (
        <ChakraProvider theme={spenseTheme}>
            <BrowserRouter>
                <Flex direction={{base: 'column'}} alignContent='start' justifyContent='space-between' minHeight='100vh'
                >
                    <Flex direction={{base: 'column'}}>
                        <Announcement/>
                        <NavigationMain/>
                        <Routes>
                            <Route path='/' element={<Home/>}/>
                            <Route path='/business' element={<Business/>}/>
                            <Route path='/pricing' element={<Pricing/>}/>
                            <Route path='/features' element={<Features/>}/>
                            <Route path='/login' element={<Login />}/>
                            <Route path='/get-started' element={<GetStarted />}/>
                        </Routes>
                    </Flex>


                    <Flex direction={{base: 'row'}}
                          bgColor='#000000'
                          color='#878987'
                          paddingX={{base: '2rem', lg: '10vw', xl: '15vw'}}
                    >
                        <NavigationFooter/>
                    </Flex>

                </Flex>
            </BrowserRouter>
        </ChakraProvider>
    )
        ;
}

export default App;
