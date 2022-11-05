import React from "react";

type Props = {
    children?:any
    onSubmit:any
}

const Form = (props: Props) => {
    return (
        <form onSubmit={props.onSubmit} className="flex flex-col items-center mt-2">
            {props.children}
        </form>
    )
}

export default Form