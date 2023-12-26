import {Button, Descriptions, Drawer, Form, Input, List, Space, Typography,} from "antd";
import moment from 'moment';

function TaskDetailsDrawer(props) {
    const task = props.task;
    return (
        <Drawer title="Детали задачи" placement="right" width={700} onClose={props.onClose} open={props.open}>
            <Descriptions layout={"vertical"}>
                <Descriptions.Item label="Имя">{task.name}</Descriptions.Item>
                <Descriptions.Item label="Детали">{task.description}</Descriptions.Item>
                <Descriptions.Item label="Автор">{task.createdBy}</Descriptions.Item>
                <Descriptions.Item
                    label="Дата создания">{moment(task.createdAt).format('YYYY-MM-DD HH:mm:ss')}</Descriptions.Item>
            </Descriptions>
            <Space direction="vertical" size="middle" style={{display: 'flex'}}>
                <Typography>Комментарии</Typography>
                <List
                    size="large"
                    bordered
                    dataSource={props.task.comments}
                    renderItem={(item) => <List.Item>
                        <Descriptions layout={"vertical"}>
                            <Descriptions.Item label="Текст комментария">{item.commentText}</Descriptions.Item>
                            {/*<Descriptions.Item align= "start "label="Идентификатор комментария">{item.id}</Descriptions.Item>*/}
                        </Descriptions>
                    </List.Item>}>
                </List>
                <Space>
                    <Form name="Добавить комментарий"
                          initialValues={{remember: true}}
                          onFinish={props.handleCreateTaskComment}
                    >
                        <Form.Item name="commentText"
                                   rules={[{required: true, message: 'Введите текст комментария!'}]}>
                            <Input showCount maxLength={300} size="medium" placeholder="Введите новый комментарий">

                            </Input>
                        </Form.Item>
                        <Form.Item>
                            <Button style={{width: '100%'}}
                                    type="primary"
                                    htmlType="submit"
                                    className="login-form-button">
                                Добавить
                            </Button>
                        </Form.Item>
                    </Form>
                </Space>
            </Space>
        </Drawer>
    )
}

export default TaskDetailsDrawer