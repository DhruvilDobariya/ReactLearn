type StatusProps = {
    status : "Loading" | "Error" | "Fatched";
}
export const Status = (props : StatusProps) =>{
    let message;
    if(props.status === "Loading"){
        message = "Data is loading...";
    }
    else if(props.status === "Error"){
        message = "Some error occur";
    }
    else if(props.status === "Fatched"){
        message = "Data fatched successfully";
    }
    return(
        <div>
            {message}
        </div>
    );
}