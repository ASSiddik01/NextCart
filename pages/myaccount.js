import React, { useEffect } from 'react'
import { useRouter } from "next/router";

const Myaccount = () => {
    const router = useRouter()
    // redirect
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            router.push("/login")
        }
    }, [localStorage.getItem('token')])

    return (
        <div>Myaccount</div>
    )
}

export default Myaccount