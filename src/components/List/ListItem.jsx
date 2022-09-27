import React, { useState, useRef, useEffect } from 'react';
import { InputTask } from 'Input/InputTask';
import { editTodoList } from 'Redux/actions/todoActions';
import { deleteTodoList } from 'Redux/actions/todoActions';
import { connect } from 'react-redux';

function ConnectListItem(props) {
    const [state, setState] = useState({
        complete: props.listData.complete,
        important: props.listData.important,

        editTasks: null
    });
    const list = useRef()

    useEffect(() => { updateTodolist() }, [state.complete, state.important])

    function changeListComplete(event) {
        setState(prevState => {
            return { ...prevState, complete: event.target.checked }
        })
    }

    function changeListImportant() {
        setState(prevState => {
            return { ...prevState, important: !prevState.important }
        })
    }

    function openEdit(event) {
        if (event.target.className.indexOf('fa-star') === -1 &&
            event.target.className.indexOf('task__check') === -1) {
            list.current.style.display = 'none'

            setState({
                editTasks: (<InputTask closeAdd={closeEdit}
                    state={props.listData}
                    updateTodolist={updateTodolist}
                    editTodoList={props.editTodoList} />)
            })
        }
    }

    function closeEdit() {
        list.current.style.display = ''
        setState({ editTasks: null })
    }

    function updateTodolist() {
        let updateList = Object.assign({}, props.listData)
        updateList = {
            ...updateList,
            complete: state.complete,
            important: state.important
        }
        props.editTodoList(updateList)
    }

    return (
        <div className='list__item '>
            <div className='task ' ref={list} >
                <div className={'task__topbar ' +
                    (state.important ? 'task-important ' : '')}>
                    <input type='checkbox' className='task__check '
                        checked={state.complete}
                        onChange={changeListComplete} />

                    <i className={state.important ?
                        'fa-sharp fa-solid fa-star icon icon-important ' :
                        'fa-regular fa-star icon '}
                        onClick={changeListImportant}>
                    </i>

                    <i className='fa-solid fa-pen icon ' onClick={openEdit}></i>
                    <i className='fa-solid fa-xmark icon ' onClick={() => { props.deleteTodoList(props.listData) }}></i>
                </div>

                <div className='task__body'>
                    <input type='text'
                        className={'task__title ' + (state.complete ? 'task-complete ' : '')}
                        value={props.listData.name}
                        readOnly={true} />

                    <div className={'task__date ' +
                        (state.complete ? 'task-complete ' : '')}>
                        {props.listData.date != '' ?
                            <i className="fa-regular fa-calendar icon"></i> : ''}
                        {props.listData.date != '' ?
                            `${props.listData.date.substring(5).replace('-', '/')}` : ''}
                    </div>

                    <div style={{ clear: 'both' }}></div>

                    <div className='task__comment'>
                        {props.listData.commit}
                    </div>
                </div>
            </div>
            <div className='task__edit'>
                {state.editTasks}
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        editTodoList: todoList => dispatch(editTodoList(todoList)),
        deleteTodoList: todoList => dispatch(deleteTodoList(todoList))
    }
}

export const ListItem = connect(null, mapDispatchToProps)(ConnectListItem)