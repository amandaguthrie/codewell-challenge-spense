import React from 'react';
import PropTypes from 'prop-types';
import {Button} from "@chakra-ui/react";

ButtonDark.propTypes = {
    as: PropTypes.any,
    display: PropTypes.any,
    size: PropTypes.string,
    text: PropTypes.string,
    type: PropTypes.string
};

ButtonDark.defaultProps = {
    as: 'button',
    display: 'flex',
    size: 'md',
    text: '',
    to: '',
    type: 'submit'
}

function ButtonDark({as, display, size , text, to, type}) {
    let fontSize = (size) => {

        switch (size) {
            case 'sm':
                return 'md';
            case 'md':
                return 'lg';
            case 'lg':
                return 'lg';
            default:
                return 'md';
        }

    }

    return (
        <Button bgColor='#000000'
                color='#FFFFFF'
                as={as}
                display={display}
                fontSize={fontSize}
                fontWeight='medium'
                letterSpacing='0.05em'
                size={size}
                to={to}
                type={type}
                _hover={{
                    bgColor: 'blackAlpha.800'
                }}
        >
            {text}
        </Button>
    );
}

export default ButtonDark;