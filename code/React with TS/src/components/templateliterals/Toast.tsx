type HorizontalPosition = "left" | "right" | "center";
type VerticalPosition = "top" | "center" | "bottom";

type ToastProps = {
    position : Exclude<`${HorizontalPosition}-${VerticalPosition}`, "center-center"> | 'center';
}

export const Toast = (props:ToastProps) => {
    return(
        <div>
            Toast position is: {props.position}
        </div>
    );
}