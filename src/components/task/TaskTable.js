import TableComponent from "../common/Table";
import {Button} from "antd";
import moment, {Moment} from 'moment';
import React, {useMemo, useState} from "react";

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

function TaskTable({showTaskDetailsDrawer, tasks}) {
    console.log(tasks)
    return (
        TableComponent(getColumns(showTaskDetailsDrawer), tasks, "id")
    )
}

export default TaskTable
