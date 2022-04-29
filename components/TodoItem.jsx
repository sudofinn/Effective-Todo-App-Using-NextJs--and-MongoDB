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


function TodoItem() {

    return (
       <VStack
       divider={<StackDivider />}
       borderColor="gray.100"
       borderWidth="2px"
       p="4"
       borderRadius="lg"
       w="80%"
       maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw' }}
       alignItems='stretch'
       display="flex"
       justifyContent="center"
      
       
       
       >
           <HStack>
               <Text>Hallo, 1 Test</Text>
               <Spacer />
               <IconButton
            icon={<FaTrash />}
            isRound='true' />
           </HStack>

           <HStack>
               <Text>Hallo, 2 Test</Text>
               <Spacer />
               <IconButton
            icon={<FaTrash />}
            isRound='true' />
           </HStack>

           <HStack>
               <Text>Hallo, 3 Test</Text>
               <Spacer />
               <IconButton
            icon={<FaTrash />}
            isRound='true' />
           </HStack>

       </VStack>
    )

}

export default TodoItem