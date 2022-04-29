import {Fragment} from "react"
import {useRouter} from "next/router"

import {Heading} from "@chakra-ui/react"
import {Button} from "@chakra-ui/react"
import { ClassNames } from "@emotion/react"

import classes from "./404.module.css"

import {motion} from "framer-motion"


function Custom404() {
    const router = useRouter()
    const MotionHeading = motion(Heading)
    const MotionButton = motion(Button)

    return (
        <div className={classes.fragment}>
        <MotionHeading fontSize="7xl" backgroundColor="red.500" bgClip="text" 
        marginTop="80px"  display="flex" justifyContent="center" alignItems="center"
        animate={{y:[0, 80, 10] }} transition={{ ease: "easeOut", duration: 1 }}
        >Page not found</MotionHeading>

        <div className={classes.button}>

        <MotionButton spacing={4} size="lg" colorScheme="teal" display="inline-block"
          animate={{ rotate: 360 , y:[0,105,40]}}
          transition={{ duration: 1 }} 
          whileHover={{scale:1.5}}
        onClick={() => {
            router.push("/")
        }}
        
        >Add some more Todos</MotionButton>

        </div>




        </div>


        


    )
}

export default Custom404