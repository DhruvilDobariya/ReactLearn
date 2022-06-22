import { useEffect, useMemo, useState } from "react";

export const Memo = () => { 
    const [ number , setNumber ] = useState (0);
    const [ dark , setDark ] = useState (false);
    const doubleNumber = useMemo ( () => { return slowFunction ( number ) } , [ number ] );
    const themeStyles = useMemo ( () => { 
        return {
             backgroundColor : dark ? ' black ' : ' white ' , 
             color : dark ? ' white ' : ' black ' 
            } 
        } , [ dark ] );
    useEffect (() => { 
        console.log ( ' Theme Changed ' ) 
    },[ themeStyles ]);

    return ( 
        <div className="container">
            <input type="number" value={number} onChange={e => setNumber(parseInt( e.target.value ))}/> 
            <button onClick={() => setDark (prevDark => !prevDark)}>Change Theme</button> 
            <div style={ themeStyles }>{ doubleNumber }</div>
        </div> 
    );

}
function slowFunction(num:number){
    for(let i = 0;i <= 1000000000;i++){}
    return num * 2;
}