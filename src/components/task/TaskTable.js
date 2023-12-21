import TableComponent from "../common/Table";
import data from './Tasks.json';

const columns = [
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
        render: (createdAt) => createdAt,
    },
];

function TaskTable() {
    const tasks = data.tasks
    return TableComponent(columns, tasks, "id")
}

export default TaskTable