import AddTodo from "../../components/logic/AddTodo"
import {useRouter} from "react"

function NewMeetup() {

    async function addTodoHandler() {
        //api request to own api endpoint ( in this , connect w. mongodb)
        const response = await fetch("/api/new-todo", {
            method:"POST",
            body: JSON.stringify(todoData),
            headers: {
                "Content-Type": "application/json"
            }
        })


        const data = await response.json()
        console.log(data)


    }

    return (
        <AddTodo onAddTodo={addTodoHandler} />

    )

}

export default NewMeetup