import React from 'react'

type Props = {
    header: String
    isShowed: Boolean
    children?: any
    toggle: () => any
}

const Modal = (props: Props) => {
    return (
        <div className={`${props.isShowed ? 'block': 'hidden'} fixed z-10 left-0 top-0 bg-gray-600/50 w-screen h-screen`}>
            <div className="fixed w-screen top-40 bg-white z-20">
                <div className="w-full text-center py-2 text-3xl border-b-4 text-primary-dark font-bold">{props.header}<span className="text-gray-600 absolute top-0 right-5 cursor-pointer" onClick={props.toggle}>X</span></div>
                    {props.children}
            </div>
        </div>
    )
}

export default Modal