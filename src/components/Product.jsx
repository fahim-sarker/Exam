import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { increment } from './slice/ExamSlice'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const Product = () => {
    const auth = getAuth();

    let dispatch = useDispatch()
    let red = useSelector((state) => state.counter.value)
    let handleincrement = () => {
        dispatch(increment())
    }


    let [name, setName] = useState("")
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")


    let handlename = (e) => {
        setName(e.target.value);

    }
    let handleemail = (e) => {
        setEmail(e.target.value);

    }
    let handlepass = (e) => {
        setPassword(e.target.value);

    }
    let handlesubmit = () => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password,name)
            .then((user) => {
                console.log(user);
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });

    }
    return (
        <>
            <button onClick={handleincrement}>{red}</button>
            <form action="">
                <input onChange={handlename} type="text" placeholder='enter your name' name="" id="" />
                <input onChange={handleemail} type="text" placeholder='enter your email' name="" id="" />
                <input onChange={handlepass} type="password" placeholder='password' name="" id="" />
                <button onClick={handlesubmit}>submit</button>
            </form>

        </>
    )
}

export default Product