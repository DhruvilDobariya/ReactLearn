type GreetType = {
    name : string
    messages? : number,
    isLogIn : boolean
}
export const Greet = (props : GreetType) => {
    const {messages = 0} = props;
    return(
        <div>
            <h2>
                {props.isLogIn ? "Welcome "+ props.name +". You have "+ props.messages +" unread messages!" : "Welcome Guest!"}
            </h2>
        </div>
    );
}