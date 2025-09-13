import React from 'react'

const Button = ({ text, click, style, type }) => {
    return (
        <button onClick={click} style={style} type={type}>
            {text}
        </button>
    )
}

export default Button
