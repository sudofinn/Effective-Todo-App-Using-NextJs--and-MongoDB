import {
    HStack,
    VStack,
    Text,
    IconButton,
    StackDivider,
    Spacer,
    Badge,
  } from '@chakra-ui/react';
  import { FaTrash } from 'react-icons/fa';


function TodoItem(props) {

    return (
       <VStack
       divider={<StackDivider />}
       borderColor="gray.100"
       borderWidth="2px"
       p="5"
       borderRadius="lg"
       w="80%"
       maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw' }}
       alignItems='stretch'
       display="flex"
       justifyContent="center"
      
       
       
       >
           <HStack>
               <Text fontSize="25px">Essay for tomorrow</Text>
               <Spacer />
               <IconButton
            icon={<FaTrash />}
            isRound='true' />
           </HStack>

           <HStack>
               <Text fontSize="25px">Call John for meetup</Text>
               <Spacer />
               <IconButton
            icon={<FaTrash />}
            isRound='true' />
           </HStack>

           <HStack>
               <Text fontSize="25px">Build own Rest API</Text>
               <Spacer />
               <IconButton
            icon={<FaTrash />}
            isRound='true' />
           </HStack>

       </VStack>
    )

}

export default TodoItem