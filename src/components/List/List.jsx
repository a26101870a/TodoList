import React from 'react';
import { connect } from 'react-redux';
import { ListItem } from 'List/ListItem';

export function CoonectList(props) {
    let data = props.data
        .sort((f, s) => { return f.important > s.important ? 1 : -1 })
        .sort((f, s) => { return f.complete > s.complete ? 1 : -1 })

    let todoCount = 0;
    let ListItems = data.map((item) => {
        switch (props.page) {
            case 'progress': {
                if (item.complete)
                    return null
                break;
            }
            case 'completed': {
                if (!item.complete)
                    return null
                break;
            }
            default:
                break;
        }

        if (props.page) {
            todoCount++
        } else if (!item.complete) {
            todoCount++
        }

        return <ListItem key={item.id} listData={item} />
    })

    return (
        <div className='list__container'>
            <div className='list__items'>
                {ListItems}
            </div>
            <div className='list__text' >
                <span>{todoCount} Tasks {props.page == 'completed' ? ' Completed ' : ' Left'}</span>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return { data: state }
}

export const List = connect(mapStateToProps)(CoonectList)