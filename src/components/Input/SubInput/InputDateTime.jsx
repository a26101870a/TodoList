import React from 'react';

export default function InputDateTime(props) {
    return (
        <div className='input__item'>
            <input type='date' name='date' className='input__data input__dateTime'
                value={props.date} onChange={props.changeState} />
            <input type='time' name='time' className='input__data input__dateTime'
                value={props.time} onChange={props.changeState} />
        </div>
    )
}