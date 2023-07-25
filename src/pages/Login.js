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

Login.propTypes = {};

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const {email, password} = formData;

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
                    <Heading as='h1'>Login</Heading>
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
                        <ButtonDark size='lg' type='submit' text='Login'/>
                    </Stack>
                </CardBody>
            </Card>
        </Flex>
    );
}

export default Login;