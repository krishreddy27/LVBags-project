import React, {useEffect, useState} from 'react'
import Header from "../components/Header";

export const RandomComponent = () =>{
    const [data, setData] = useState();
    useEffect(() =>{

        fetch('https://dummyjson.com/products/1')
            .then(res => res.json())
            .then(json => console.log(json))

    }, [])
    return(
        <>
            <div>

            </div>
        </>
    )
}
