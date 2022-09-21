import { createContext, useState, useEffect } from 'react'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../firebase'
import { collection, getDocs, setDoc, doc } from 'firebase/firestore'
import db from '../firebase';

export const MediumContext = createContext();

export const MediumProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [allUsers, setAllUsers] = useState([]);
    const [allPosts, setAllPosts] = useState([]);



    useEffect(() => {
        const getAllUsers = async () => {
            const querySnapshot = await getDocs(collection(db, 'users'));

            setAllUsers(
                querySnapshot.docs.map(doc => {
                    return {
                        id: doc.id,
                        data: {
                            ...doc.data(),
                        },
                    }
                }),
            )
        }
        getAllUsers();
    }, [user]);





    return (
        <MediumContext.Provider
            value={{ user, handleUserAuth, allPosts, allUsers }}
        >
            {children}
        </MediumContext.Provider>
    )
}
