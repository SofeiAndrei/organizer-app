import { async } from "@firebase/util";
import { doc, updateDoc, deleteDoc, documentId } from "firebase/firestore";
import { useState } from "react";
import { firestore } from "../utils/firebaseConfig";
export default function Task(props:{taskData, updateTask, deleteTask}){
    const [done, setDone] = useState(props.taskData.done)

    console.log(props.taskData)
    const doneButtonValue = () => {
        if(done){
            return "Done"
        } else {
            return "Not Done"
        }
    }

    return (
        <div className="taskContainer">
            <div>
                {props.taskData.name}
            </div>
            <div>
                {props.taskData.description}
            </div>
            <button 
                className="doneButton"
                onClick = {(event) => {
                    event.preventDefault()
                    setDone(!props.taskData.done)
                    props.updateTask(props.taskData.id, props.taskData.done)
                }}>
                {doneButtonValue()}
            </button>
            <button
                className="deleteButton"
                onClick = {(event) => {
                    event.preventDefault()
                    props.deleteTask(props.taskData.id)
                }}>
                Delete
            </button>
        </div>
    )
}