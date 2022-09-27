import React from "react";
import { InputTask } from 'Input/InputTask'

export default function AddTask() {
    function openAdd() {
        document.getElementById("addTask").style.display = "none"
        document.getElementById("inputTask").style.display = ""
    }

    function closeAdd() {
        document.getElementById("addTask").style.display = ""
        document.getElementById("inputTask").style.display = "none"
    }

    return (
        <div className="list__top">
            <div id="addTask">
                <button className="button button-add" onClick={openAdd}><i className="fa-solid fa-plus"></i> New Task </button>
            </div>
            <div id="inputTask" style={{ display: "none" }}>
                <InputTask closeAdd={closeAdd} />
            </div>
        </div>
    )
}