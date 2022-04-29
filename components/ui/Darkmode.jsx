import {Icon, useColorMode} from "@chakra-ui/react"
import {IconButton} from "@chakra-ui/react"
import {FaSun, FaMoon} from "react-icons/fa"



import {Fragment} from "react"

import {motion} from "framer-motion"

//dark mode toggle

//maybe must add colorModeScript to config to make it av. after reload https://chakra-ui.com/guides/getting-started/nextjs-guide

function DarkModeToggle() {
    const {colorMode, toggleColorMode} = useColorMode()
   

    const MotionIconButton = motion(IconButton)

    return (
        <Fragment>
            <MotionIconButton
             icon={colorMode === "light" ? <FaSun/> : <FaMoon />} 
             isRound="true"
             size="lg"
             onClick={toggleColorMode}
             marginTop="-350px"
             marginLeft="60px"
             whileHover={{scale:2}}
            animate={{ rotate: 360 , y:[0,105,40]}}
            transition={{ duration: 1 }} 
            ></MotionIconButton>
        </Fragment>
    )
  
}

export default DarkModeToggle