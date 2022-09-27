import React from 'react';
import InputName from 'SubInput/InputName'
import InputDateTime from 'SubInput/InputDateTime'
import InputFile from 'SubInput/InputFile'
import InputCommit from 'SubInput/InputCommit'
import InputButtons from 'SubInput/InputButtons'

const inputNameItems = [
    {
        className: 'fa-regular fa-calendar',
        inputName: 'Deadline'
    },
    {
        className: 'fa-solid fa-file',
        inputName: 'File'
    },
    {
        className: 'fa-solid fa-comment-dots',
        inputName: 'Comment'
    },
]

export default function InputForm(props) {
    return (
        <div className='input__form'>
            <div className='input__items'>
                <InputName className={inputNameItems[0].className} inputName={inputNameItems[0].inputName} />
                <InputDateTime date={props.stateData.date} time={props.stateData.time} changeState={props.changeState} />

                <InputName className={inputNameItems[1].className} inputName={inputNameItems[1].inputName} />
                <InputFile filebox={props.filebox} file={props.stateData.file} changeState={props.changeState} />

                <InputName className={inputNameItems[2].className} inputName={inputNameItems[2].inputName} />
                <InputCommit commit={props.stateData.commit} changeState={props.changeState} />
            </div>
            < InputButtons closeAdd={props.closeAdd} submitTodo={props.submitTodo} />
        </div>
    )
}