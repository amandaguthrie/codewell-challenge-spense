import React, {useState} from 'react';
import {
    Card,
    CardBody,
    CardHeader,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack
} from "@chakra-ui/react";
import ButtonDark from "../components/common/ButtonDark";

function GetStarted() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirm: ''
    });

    const {email, password, confirm} = formData;

    const onChange = (evt) => {
        setFormData((prevState) => ({
            ...prevState,
            [evt.target.name]: evt.target.value
        }))
    }

    return (
        <Flex direction={{base: 'column'}}
              paddingX={{base: '2rem', lg: '10vw', xl: '15vw'}}
              paddingY={'2rem'}
              gap='2rem'
        >
            <Card size='md'
                  marginX={{base: '0', lg: '25vw'}}
            >
                <CardHeader>
                    <Heading as='h1'>Get Started</Heading>
                </CardHeader>
                <CardBody as='form'>
                    <Stack direction='column' gap='1rem'>
                        <FormControl>
                            <FormLabel htmlFor='email'>Email</FormLabel>
                            <Input type="email"
                                   id="email"
                                   name="email"
                                   value={email}
                                   onChange={onChange}
                                   placeholder="john@example.com"
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor='password'>Password</FormLabel>
                            <Input type="password"
                                   id="password"
                                   name="password"
                                   value={password}
                                   onChange={onChange}
                                   placeholder="At least 8 characters"
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor='confirm'>Confirm Password</FormLabel>
                            <Input type="password"
                                   id="confirm"
                                   name="confirm"
                                   value={confirm}
                                   onChange={onChange}
                                   placeholder="Verify your password"
                            />
                        </FormControl>
                        <ButtonDark size='lg' type='submit' text='Get Started'/>
                    </Stack>
                </CardBody>
            </Card>
        </Flex>
    );
}

export default GetStarted;