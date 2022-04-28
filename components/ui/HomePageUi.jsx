import {Fragment} from "react"

import {Heading} from "@chakra-ui/react"

import DarkModeToggle from "./Darkmode.jsx"
import SettingsOverlay from "./SettingsOverlay.jsx"

//all the ui for the homepage

function HomePageUi() {

    return (
        <Fragment>
            <Heading fontSize="8xl" marginTop="50px" display="flex" justifyContent="center" alignItems="center"
              bgGradient='linear(to-r, blue.500, pink.300, blue.600)' bgClip="text"
            >Your Todos</Heading>


            <DarkModeToggle />

            <SettingsOverlay />
        </Fragment>
    )

}

export default HomePageUi