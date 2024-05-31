import React from 'react'

function Button(props) {
    return (
        <button className={props.classProp}>
            {props.textProp}
        </button>
    )
}

export default Button