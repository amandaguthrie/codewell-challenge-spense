import {extendTheme} from "@chakra-ui/react";
import '@fontsource/cabin';
import '@fontsource/cabin/500.css';
import '@fontsource/cabin/600.css';
import '@fontsource/cabin/700.css';

const colorWhite = '#FFFFFF'
// const colorTaupe = '#EFEDEB'
const colorText = '#595546'
// const colorFooterText = '#878987'

const spenseTheme = extendTheme({
    fonts: {
        heading: `'Cabin', sans-serif`,
        body: `'Cabin', sans-serif`
    },
    styles: {
        global: {
            body: {
                bg: colorWhite,
                color: colorText
            }
        }
    }
})

export default spenseTheme;