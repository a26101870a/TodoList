import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Provider } from "react-redux"
import Layout from 'Pages/Layout';
import MyTasks from 'Pages/MyTasks';
import Progress from 'Pages/Progress';
import Completed from 'Pages/Completed';
import { todoStore } from "Redux/store/todoStore"

export default function Main() {
    return (
        <Provider store={todoStore}>
            <HashRouter>
                <Routes>
                    <Route path='/' element={<Layout />} >
                        <Route index element={<MyTasks />} />
                        <Route path='progress' element={<Progress />} />
                        <Route path='completed' element={<Completed />} />
                    </Route>
                </Routes>
            </HashRouter>
        </Provider>
    )
}