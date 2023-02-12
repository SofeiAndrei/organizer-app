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
            { !hasEmail ? (
                <div>
                    <form>
                        <input
                            className="border p-2"
                            placeholder="Email"
                            value={email}
                            onChange={({ target }) => {
                                setEmail(target.value);
                            }}
                        />
                        <button
                            onClick={(event) => {
                                event.preventDefault()
                                localStorage.setItem("email", email)
                                setHasEmail(true)
                                setEmail("")
                            }}>
                        Enter
                        </button>
                    </form>
                </div>
            ) : (
                <div>
                    <div>You are already connected, you can see your task list now!</div>
                    <button
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
