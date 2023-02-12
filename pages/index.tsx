import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
    const [email, setEmail] = useState("")
    const [hasEmail, setHasEmail] = useState(false)
    const router = useRouter();
  
    useEffect(() => {
        if(!router.isReady){
            return
        }

        if(localStorage.getItem("email")){
            setHasEmail(true)
        }
    })

    return (
        <div>
            <br/>
            { !hasEmail ? (
                <div>
                    <form>
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                            placeholder="Email"
                            value={email}
                            onChange={({ target }) => {
                                setEmail(target.value);
                            }}
                        />
                        <button
                            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                            onClick={(event) => {
                                event.preventDefault()
                                if(email){
                                    localStorage.setItem("email", email)
                                    setHasEmail(true)
                                    setEmail("")
                                }
                                else{
                                    alert("Enter your email!!")
                                }
                            }}>
                        Enter
                        </button>
                    </form>
                </div>
            ) : (
                <div>
                    <div>You are connected, you can see your task list now!</div>
                    <br/>
                    <button
                        className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                        onClick={(event) => {
                            event.preventDefault()
                            localStorage.removeItem("email")
                            setHasEmail(false)
                            setEmail("")
                        }}>
                    Log Out
                    </button>
                </div>
            )}
        </div>
    )
}
