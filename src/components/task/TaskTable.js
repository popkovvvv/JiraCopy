import TableComponent from "../common/Table";
import data from './Tasks.json';
import {Button} from "antd";
import moment, {Moment} from 'moment';
import {useEffect, useState} from "react";

function getColumns(showTaskDetailsDrawer) {
    return (
        [
            {
                title: 'Идентификатор задачи',
                dataIndex: 'id',
                render: (id) => id,
            },
            {
                title: 'Название задачи',
                dataIndex: 'name',
                render: (name) => name,
            },
            {
                title: 'Описание',
                dataIndex: 'description',
                render: (description) => description,
            },
            {
                title: 'Кем создана',
                dataIndex: 'createdBy',
                render: (createdBy) => createdBy,
            },
            {
                title: 'Дата создания',
                dataIndex: 'createdAt',
                render: (createdAt) => moment(createdAt).format('YYYY-MM-DD HH:mm:ss'),
            },
            {
                dataIndex: 'id',
                render: (id, row) => (
                    <Button onClick={() => showTaskDetailsDrawer(row)}>
                        Детали задачи
                    </Button>
                ),
            },

        ]
    )
}

function TaskTable(props) {
    const [state, setState] = useState(props.tasks)

    useEffect(() => {
        setState(props.tasks)
    }, [props.tasks])
    console.log(props.tasks)
    return TableComponent(getColumns(props.showTaskDetailsDrawer), state, "id")
}

export default TaskTable
