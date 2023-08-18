import React, { useState, useEffect } from "react";

const InputElement = () => {
    
    const random_boolean = Math.random() >=0.5;

    const [isLoading, setIsLoading] = useState(random_boolean === true);
    // if (random_boolean === true){
    //     const [isLoading, setIsLoading] = useState(true);
    // } else {
    //     const [isLoading, setIsLoading] = useState(true);
    // }
 
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        },2000);
    })

    return isLoading ? <div>Loading...</div> : <input placeholder="Enter some text" />;
}
 
export default InputElement;