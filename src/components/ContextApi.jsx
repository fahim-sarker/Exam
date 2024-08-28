import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import axios from "axios"

let examdata = createContext()

const ContextApi = ({children}) => {
    let [api,setapi]=useState([])
    let getdata = () => axios.get("https://dummyjson.com/products").then((response)=>{
        setapi(response.data.products);
        
    })

    useEffect(()=>{
        getdata()
    },[])
    
  return (
    <examdata.Provider value={api}>{children}</examdata.Provider>
  )
}

export { ContextApi, examdata }
