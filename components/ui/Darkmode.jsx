import {Icon, useColorMode} from "@chakra-ui/react"
import {IconButton} from "@chakra-ui/react"
import {FaSun, FaMoon} from "react-icons/fa"

import {Fragment} from "react"

//dark mode toggle

//maybe must add colorModeScript to config to make it av. after reload https://chakra-ui.com/guides/getting-started/nextjs-guide

function DarkModeToggle() {
    const {colorMode, toggleColorMode} = useColorMode()

    return (
        <Fragment>
            <IconButton
             icon={colorMode === "light" ? <FaSun/> : <FaMoon />} 
             isRound="true"
             size="lg"
             onClick={toggleColorMode}
             marginTop="-350px"
             marginLeft="60px"
            ></IconButton>
        </Fragment>
    )
  
}

export default DarkModeToggle