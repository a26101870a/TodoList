import React from "react";

export default function InputFile(props) {
    return (
        <div className='input__item'>
            <input type='file' name='file' className='input__data' ref={props.filebox} onChange={props.changeState} />
        </div>
    )
}