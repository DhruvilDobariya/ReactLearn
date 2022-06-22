import React from "react";

type InputProps = {
    handleChange : (event : React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = (props : InputProps) =>{
    let handleChangeEvent = (event : React.ChangeEvent<HTMLInputElement>) =>{
        console.log(event, event.target.value);
    }
    return(
        <div>
            <input type="text" name="" onChange={handleChangeEvent} id="" />
            {/* <input type="text" name="" onChange={props.handleChange} id="" /> */}
        </div>
        
    );
}