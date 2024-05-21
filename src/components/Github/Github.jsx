import React, { useEffect } from 'react'
import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/kbiam')
    //     .then(response=>response.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data);

    //     })
        
    // }, [])
    

  return (
    <div>
    <h2>Username : {data.login}</h2>
    Github Users : {data.followers} 
    <br />
    <img src={data.avatar_url} alt="" />
    </div>
  )
}

export default Github
export const userInfo = async() => {
    const response = await fetch('https://api.github.com/users/kbiam')
    return response.json()

} 