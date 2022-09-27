import React from "react";
import AddTask from "AddTask/AddTask"
import { List } from "List/List"

export default function MyTasks() {
    return (
        <div className="l-content">
            <div className="list">
                <AddTask />
                <List />
            </div>
        </div>
    )
}