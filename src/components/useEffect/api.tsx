import { useEffect, useState } from "react"

export const API = () => {
    const [resource, setResource] = useState("posts");
    const [items, setItems] = useState([]);

    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/${resource}`)
        .then(response => response.json())
        .then(json => console.log(json))
        //.then(json => setItems(json))
    },[resource]);
    /* console.log(resource);
    console.log(items); */
    return(
        <div className="container">
            <div className="py-2">
                <button className="btn" onClick={() => setResource("users")}>Users</button>
                <button className="btn" onClick={() => setResource("posts")}>Posts</button>
                <button className="btn" onClick={() => setResource("comments")}>Comments</button>
            </div>
            <h4 className="d-flex justify-content-center">{resource}</h4>
            {/* {items.map(item => {
                return <pre>{JSON.stringify(item)}</pre>
            })} */}
            {/* {JSON.stringify(items)} */}
        </div>
    );
}