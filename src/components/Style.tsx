type StyleProps = {
    style : React.CSSProperties;
}

export const Style = (props : StyleProps) =>{
    return(
        <div>
            <p style = {props.style}>This is style props</p>
        </div>
    );
}