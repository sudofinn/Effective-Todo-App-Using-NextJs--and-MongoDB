import {Fragment} from "react"

import {Heading} from "@chakra-ui/react"

import DarkModeToggle from "./Darkmode.jsx"
import SettingsOverlay from "./SettingsOverlay.jsx"
import AddUser from "./AddUser.jsx"

import {VStack} from "@chakra-ui/react"

import {motion} from "framer-motion"

//all the ui for the homepage

function HomePageUi() {

    const MotionHeading = motion(Heading)

    return (
        <Fragment>
            <MotionHeading fontSize="8xl" marginTop="50px" display="flex" justifyContent="center" alignItems="center"
              bgGradient='linear(to-r, blue.500, pink.300, blue.600)' bgClip="text" whileHover={{scale:0.9}}
              animate={{y:[0, 80, 50] }} transition={{ ease: "easeOut", duration: 1 }}
            >Your Todos</MotionHeading>

           
            <DarkModeToggle />

            <SettingsOverlay />

            <AddUser />
                
           
        </Fragment>
    )

}

export default HomePageUi