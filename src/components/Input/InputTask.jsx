import React, { useState, useRef, useEffect } from 'react';
import InputForm from 'Input/InputForm'
import { addTodoList } from "Redux/actions/todoActions"
import { connect } from 'react-redux'

function ConnectInputTask(props) {
    const [state, setState] = useState({});
    const filebox = useRef('');
    let data = {};

    if (props.state) {
        data = props.state;
    } else {
        data = {
            id: '',
            name: '',
            date: '',
            time: '',
            file: '',
            commit: '',
            complete: false,
            important: false
        };
    }

    useEffect(() => { setState(data) }, [])

    function changeState(event) {
        let value = event.target.value

        if (event.target.name === 'file') {
            value = value.substring(value.lastIndexOf('\\') + 1)
        }

        setState(prevState => {
            return { ...prevState, [event.target.name]: value }
        })
    }

    function tagComplete(event) {
        setState(prevState => {
            return { ...prevState, complete: event.target.checked }
        })
    }

    function tagImportant() {
        setState(prevState => {
            return { ...prevState, important: !prevState.important }
        })
    }

    function submitTodo() {
        if (state.name === '') {
            alert('清輸入待辦事項標題')
        } else {
            if (state.id === '') {
                props.addTodoList(state)
                alert('新增成功')
            } else {
                props.editTodoList(state)
                alert('編輯成功！')
            }

            props.closeAdd()
            setState({ id: '', name: '', date: '', time: '', file: '', commit: '', important: false, complete: false })
            filebox.current.value = ''
        }
    }

    return (
        <div className='input'>
            <div className={'task__topbar ' +
                (state.important ? 'task-important ' : '')}>
                <input type='checkbox' className='task__check '
                    checked={state.complete}
                    onChange={tagComplete} />

                <i className={state.important ?
                    'fa-sharp fa-solid fa-star icon icon-important ' :
                    'fa-regular fa-star icon '}
                    onClick={tagImportant}>
                </i>
                <i className='fa-solid fa-pen icon icon-edit'></i>
                <i className='fa-solid fa-xmark icon '></i>
            </div>
            <div>
                <input type='text'
                    className={'task__title ' + (state.complete ? 'task-complete ' : '')}
                    value={state.name}
                    onChange={changeState} />
            </div>

            <InputForm
                closeAdd={props.closeAdd}
                stateData={state}
                changeState={changeState}
                submitTodo={submitTodo}
                filebox={filebox} />
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        addTodoList: todoList => dispatch(addTodoList(todoList))
    }
}

export const InputTask = connect(null, mapDispatchToProps)(ConnectInputTask)