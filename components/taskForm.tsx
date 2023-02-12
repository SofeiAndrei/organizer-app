import { useState } from "react";

export default function TaskForm(props:{addTask}){
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")

    const handleTaskFormSubmit = (data) => {
        if(data.name){
            props.addTask(data)
            console.log("Created Task")
        }
        else{
            alert("Do not leave the Task Name empty!")
        }
    }

    return (
        <div className="taskFormContainer">
            <form>
                <input
                    type="text"
                    minLength={1}
                    value={name}
                    onChange={({ target }) => {
                        setName(target.value);
                    }}
                    placeholder="Task Name">
                </input>
                <input
                    type="text"
                    maxLength={100}
                    value={description}
                    onChange={({ target }) => {
                        setDescription(target.value);
                    }}
                    placeholder="Task Description">
                </input>
                <button
                    onClick={(event) => {
                        event.preventDefault()
                        handleTaskFormSubmit({
                            name: name,
                            description: description
                        })
                        setName("")
                        setDescription("")
                    }}>
                Create Task
                </button>
            </form>
        </div>
    )
}