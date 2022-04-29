import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,

    Button,
    Stack,
    Box,
    FormLabel,
    Input,
    Select,
    InputGroup,
    InputLeftAddon,
    InputRightAddon,
    Textarea
  } from '@chakra-ui/react'


import { AddIcon } from '@chakra-ui/icons'

import react from "react"
import {useRef} from "react"

import {motion} from "framer-motion"


function AddUser() {
    const { isOpen, onOpen, onClose } = useDisclosure()
   
    const firstField = useRef()

    const MotionButton = motion(Button)
  
    return (
      <>
        <MotionButton leftIcon={<AddIcon />} colorScheme='teal' onClick={onOpen}
         marginTop="-320px"  marginLeft="50px"
         whileHover={{scale:2}}
          animate={{ rotate: 360 , y:[0,105,40]}}
          transition={{ duration: 1 }} 
        >
          
        </MotionButton>
        <Drawer
          isOpen={isOpen}
          placement='right'
          initialFocusRef={firstField}
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth='1px'>
              Create a new account
            </DrawerHeader>
  
            <DrawerBody>
              <Stack spacing='24px'>
                <Box>
                  <FormLabel htmlFor='username'>Name</FormLabel>
                  <Input
                    ref={firstField}
                    id='username'
                    placeholder='Please enter user name'
                  />
                </Box>
                </Stack>
  
                <Stack spacing='24px'>
                <Box>
                  <FormLabel htmlFor='age' >Age</FormLabel>
                  <Input
                    ref={firstField}
                    id='age'
                    placeholder='Please enter your age'
                  />
                </Box>
  
                <Box>
                  <FormLabel htmlFor='owner'>Favorite Productivity App</FormLabel>
                  <Select id='owner' defaultValue='segun'>
                    <option value='notion'>Notion</option>
                    <option value='obsidian'>Obsidian</option>
                    <option value='remnote'>RemNote</option>
                    <option value='goodnotes'>GoodNotes</option>
                  </Select>
                </Box>
  
                <Box>
                  <FormLabel htmlFor='desc'>What are you working on?</FormLabel>
                  <Textarea id='desc' />
                </Box>
              </Stack>
            </DrawerBody>
  
            <DrawerFooter borderTopWidth='1px'>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Submit</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }


export default AddUser