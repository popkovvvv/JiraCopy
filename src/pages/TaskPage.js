import TaskTable from "../components/task/TaskTable";
import {Button, Card, Space} from "antd";
import TaskDrawer from "../components/task/TaskDrawer";
import React, {useEffect, useState} from "react";
import TaskDetailsDrawer from "../components/task/TaskDetailsDrawer";


function TaskPage() {
    const [openCreateTaskDrawer, setOpenCreateTaskDrawer] = useState(false);
    const [openTaskDetailsDrawer, setOpenTaskDetailsDrawer] = useState(false);
    const [taskDetails, setTaskDetails] = useState(null);

    const [tasks, setTasks] = useState([])

    const getTasks = () => {
        fetch('http://localhost:8080/tasks', {
            headers: {
                'Content-Type': 'application/json',
                //'Access-Control-Allow-Origin': '*'
            },
            method: 'GET'

        })
            .then(async function (response) {
                return response.json()
            })
            .then(function (response) {
                setTasks(response)
            });
    }

    const addCommentToTask = (commentText, authorId, correspondingTask) => {
        fetch('http://localhost:8080/comments', {
            headers: {
                'Content-Type': 'application/json',
                //'Access-Control-Allow-Origin': '*'
            },
            method: 'POST',
            body: JSON.stringify({
                commentText,
                author: authorId,
                correspondingTask
            })

        }).then(async function (response) {
            console.log("Добавили коммент")
        })
    }

    useEffect(() => {
        getTasks()
    }, []);

    const showTaskDetailsDrawer = (task) => {
        setTaskDetails(task)
        setOpenTaskDetailsDrawer(true);
    };

    const showMessageDrawer = () => {
        setOpenCreateTaskDrawer(true);
    };

    const closeTaskDetailsDrawer = () => {
        setTaskDetails(null)
        setOpenTaskDetailsDrawer(false);
    };

    const closeMessageDrawer = () => {
        setOpenCreateTaskDrawer(false);
    };

    const handleCreateTask = (input) => {
        console.log(input)
    }

    const handleCreateTaskComment = (input) => {
        const commentText = input.commentText
        addCommentToTask(commentText, 1, taskDetails.id)
        getTasks()
        setTaskDetails(tasks.find(task => task.id === taskDetails.id))
    }

    return (<Card title={'Задачи'}>
        <Space direction="vertical" size="middle" style={{display: 'flex'}}>
            <Button onClick={showMessageDrawer}>
                Добавить задачу
            </Button>
            {openCreateTaskDrawer &&
                <TaskDrawer onClose={closeMessageDrawer} open={openCreateTaskDrawer}
                            handleCreateTask={handleCreateTask}/>}
            {openTaskDetailsDrawer &&
                <TaskDetailsDrawer task={taskDetails} onClose={closeTaskDetailsDrawer} open={openTaskDetailsDrawer}
                                   handleCreateTaskComment={handleCreateTaskComment}/>}
            <TaskTable showTaskDetailsDrawer={showTaskDetailsDrawer} tasks={tasks}/>
        </Space>
    </Card>)
}

export default TaskPage