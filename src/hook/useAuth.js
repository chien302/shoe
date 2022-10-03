import React, { useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { authentication } from '../firebase-config'

export const useAuth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userName, setUserName] = useState('')

    useEffect(() => {
        onAuthStateChanged(authentication, (user) => {
            if (user) {
                setIsLoggedIn(true)
                setUserName(user)
            } else {
                setIsLoggedIn(false)
            }
        })

    }, [])
    return { isLoggedIn, userName }
}
