import {Fragment} from "react"
import {useRouter} from "next/router"

import {Heading} from "@chakra-ui/react"
import {Button} from "@chakra-ui/react"
import { ClassNames } from "@emotion/react"

import classes from "./404.module.css"




function Custom404() {
    const router = useRouter()


    return (
        <div className={classes.fragment}>
        <Heading fontSize="7xl" backgroundColor="red.500" bgClip="text" 
        marginTop="80px"  display="flex" justifyContent="center" alignItems="center"
        >Page not found</Heading>

        <div className={classes.button}>

        <Button spacing={4} size="lg" colorScheme="teal" display="inline-block"
        onClick={() => {
            router.push("/")
        }}
        
        >Add some more Todos</Button>

        </div>




        </div>


        


    )
}

export default Custom404