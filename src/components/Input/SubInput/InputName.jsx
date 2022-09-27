import React from "react";

export default function InputName(props) {
    return (
        <div className="input__name">
            <i className={props.className}></i> {props.inputName}
        </div>
    )
}