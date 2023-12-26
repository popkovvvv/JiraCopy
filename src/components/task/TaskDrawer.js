import {Button, Drawer, Form, Input} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";

function TaskDrawer(props) {
    return (
        <Drawer title="Создать задачу" placement="right" onClose={props.onClose} open={props.open}>
            <Form name="Create_Task"
                  initialValues={{remember: true}}
                  onFinish={props.handleCreateTask}
            >
                <Form.Item name="name"
                           rules={[{required: true, message: 'Пожалуйста введите название задачи'}]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="название задачи"/>
                </Form.Item>
                <Form.Item name="description"
                           rules={[{required: true, message: 'Пожалуйста добавьте описание задачи'}]}
                >
                    <Input prefix={<LockOutlined className="site-form-item-icon"/>}
                           placeholder="Описание задачи"
                    />
                </Form.Item>
                <Form.Item>
                    <Button style={{width: '100%'}}
                            type="primary"
                            htmlType="submit"
                            className="login-form-button">
                        Добавить задачу
                    </Button>
                </Form.Item>
            </Form>
        </Drawer>
    )

}

export default TaskDrawer