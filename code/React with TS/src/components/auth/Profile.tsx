export type ProfileProps = {
    name : string
}
export const Profile = (props: ProfileProps) =>{
    return(
        <div>Private Profile Component. Name is: {props.name}</div>
    );
}