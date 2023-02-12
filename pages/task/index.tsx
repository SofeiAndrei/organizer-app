import { useRouter } from "next/router"
import { firestore } from "../../utils/firebaseConfig"
import { collection, query, where, getDocs, QueryDocumentSnapshot, DocumentData, updateDoc, doc, deleteDoc, getDoc, setDoc } from "firebase/firestore"
import React, { useEffect, useState } from "react"
import TaskForm from "../../components/taskForm"
import Task from "../../components/task"

export default function TaskList(){
    const [email, setEmail] = useState("")
    const [filters, setFilters] = useState([])
    const [tasks, setTasks] = useState([])
    const [loading, setLoading] = useState(true)

    const todosCollection = collection(firestore, "tasks")
    const router = useRouter()

    const getTasks = async () => {
        const tasksQuery = query(todosCollection, where("owner", "==", localStorage.getItem("email")))
        const querySnapshot = await getDocs(tasksQuery)
        
        const result = querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id}))

        console.log("NEW TASKS AFTER DEL")
        console.log(result)
        console.log("OLD TASKS")
        console.log(tasks)
        setTasks(result)
    }
    
    const addTask = async (data) => {
        const timestamp = Date.now().toString()
        const _task = doc(firestore, `tasks/${timestamp}`)

        const taskData = {
            name: data.name,
            description: data.description,
            done: false,
            owner: localStorage.getItem("email"),
            id: timestamp
        }
        try{
            await setDoc(_task, taskData)
            setTasks([...tasks, taskData])
        } catch (error) {
            console.log(error)
        }
    }

    const updateTask = async (documentId, done) => {
        const _task = doc(firestore, `tasks/${documentId}`)

        await updateDoc(_task, {
            "done": !done
        })

        getTasks()
    }

    const deleteTask = async (documentId) => {
        const _task = doc(firestore, `tasks/${documentId}`)

        await deleteDoc(_task)

        getTasks()
    }

    useEffect(() => {
        if(!router.isReady){
            return
        }
        if(localStorage.getItem("email")){
            setEmail(localStorage.getItem("email"))
        } else {
            router.push("/")
            alert("You must connect via the email first!")
        }
        getTasks()

        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    return (
        <div>
            <div>
                { email ? (
                <div>
                    <TaskForm addTask={addTask}/>
                    <div>{tasks.length} Tasks!!</div>
                    <div>
                        {tasks.map((val, key) => {
                            return (
                                <div key={key}>
                                    <Task taskData={val} updateTask={updateTask} deleteTask={deleteTask}/>
                                </div>
                            )
                        })}
                    </div>
                </div>
                ) : (
                <div>NO EMAIL GIVEN, GO TO HOME TO ENTER YOUR EMAIL</div>
                )}   
            </div>
        </div>
    )
}