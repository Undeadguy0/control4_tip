export function UserMessage({message}){
    return (
        <div className="user-message">{message}</div>
    )
}

export function SystemMessage({message}){
    return (
        <div className="system-message">{message}</div>
    )
}