import React from "react";

export default function InputCommit(props) {
    return (
        <div className='input__item'>
            <textarea name='commit' placeholder='內文' className='input__comment'
                value={props.commit} onChange={props.changeState} ></textarea>
        </div>
    )
}