import React from "react";
import {Greet} from '../Greet';

export const CustomeComponent = (props : React.ComponentProps<typeof Greet>) => {
    return(
        <div>
            {props.name} {props.messages}
        </div>
    );
}