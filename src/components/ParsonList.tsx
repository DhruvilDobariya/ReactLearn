type ParsonListType = {
    users : {
        id : number,
        name : string
    }[]
}
export const ParsonList = (props : ParsonListType) =>{
    return(
        <div className="container py-4">
            <table className="table">
                <tr className="bg-dark text-light">
                    <th>Id</th>
                    <th>Name</th>
                </tr>
                {props.users.map((user)=>{
                    return(
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                        </tr>
                    );
                })}
            </table>
        </div>
    );
}