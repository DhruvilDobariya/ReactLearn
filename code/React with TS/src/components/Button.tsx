import React from "react";

type ButtonProps = {
    handelClick : (event : React.MouseEvent<HTMLButtonElement>, id : number) => void
}

export const Button = (props : ButtonProps) =>{
    return(
        <div>
            <button className="btn btn-danger" onClick={(event)=>{
                props.handelClick(event, 1)
            }}>Click</button>
        </div>
    );
}