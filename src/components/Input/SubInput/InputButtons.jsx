import React from "react";

export default function InputButtons(props) {
    return (
        <div className='input__buttons'>
            <button type='button' className='button button-cancel' onClick={props.closeAdd}>x Cancel</button>
            <button type='button' className='button button-save' onClick={props.submitTodo}>+ Save</button>
        </div>
    )
}