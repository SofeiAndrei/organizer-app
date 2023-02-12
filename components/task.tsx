import { useState } from "react";
export default function Task(props:{taskData, updateTask, deleteTask}){
    const [done, setDone] = useState(props.taskData.done)

    const doneButtonValue = () => {
        if(done){
            return "Done"
        } else {
            return "Not Done"
        }
    }

    return (
        <div className="flex flex-row p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="grow basis-1/2">
                <div>
                    <p className="font-bold">
                    Name:
                    </p>
                    {props.taskData.name}
                </div>
                <br/>
                <div>
                    <p className="font-bold">
                    Description:
                    </p>
                    {props.taskData.description}
                </div>
            </div>
            <div className="basis-1/2">
                <button 
                    className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    onClick = {(event) => {
                        event.preventDefault()
                        setDone(!props.taskData.done)
                        props.updateTask(props.taskData.id, props.taskData.done)
                    }}>
                    {doneButtonValue()}
                </button>
                <button
                    className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    onClick = {(event) => {
                        event.preventDefault()
                        props.deleteTask(props.taskData.id)
                    }}>
                    Delete
                </button>
            </div>
        </div>
    )
}