import TaskTable from "../components/task/TaskTable";
import {Card} from "antd";

function TaskPage() {
    return (<Card title={'Задачи'}>
        <TaskTable/>
    </Card>)
}

export default TaskPage