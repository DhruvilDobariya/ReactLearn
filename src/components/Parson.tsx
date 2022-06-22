type ParsoneType = {
    user : {
        id : number,
        name : string
    }
}
export const Parson = (props : ParsoneType) => {
    return(
        <div>
            {"Id: " + props.user.id}
            <br />
            {"Name: " + props.user.name}
        </div>
    );
}