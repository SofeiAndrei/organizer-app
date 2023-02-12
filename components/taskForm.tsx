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
                    className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                    type="text"
                    minLength={1}
                    value={name}
                    onChange={({ target }) => {
                        setName(target.value);
                    }}
                    placeholder="Task Name">
                </input>
                <br/>
                <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                    type="text"
                    maxLength={100}
                    value={description}
                    onChange={({ target }) => {
                        setDescription(target.value);
                    }}
                    placeholder="Task Description">
                </input>
                <br/>
                <button
                    className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
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