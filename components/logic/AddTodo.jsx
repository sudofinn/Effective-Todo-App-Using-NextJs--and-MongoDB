import { Button, HStack, Input, useToast } from '@chakra-ui/react';


function AddTodo() {

    return (
        <form>
            <HStack  marginTop="40px">
                <Input 
                   variant="filled"
                   placeholder="Enter your work here !"  
                />
                
                <Button 
                colorScheme="teal"
                type="submit"
                >Add Todo</Button>
            </HStack>
        </form>
    )

}

export default AddTodo