import {Header} from "antd/es/layout/layout";
import {Menu, Space} from "antd";
import {DashboardFilled, UserAddOutlined} from "@ant-design/icons";
import {NavLink, Route, Routes} from 'react-router-dom';
import React from 'react';
import TaskPage from "../../pages/TaskPage";
import UserPage from "../../pages/UserPage";

function HeaderComponent() {
    return (
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
            <Header className="header" style={{backgroundColor: '#ffffff'}}>
                <div style={{display: 'flex'}}>
                    <Menu theme="light"
                          className="menu"
                          selectable={true}
                          mode="horizontal"
                          style={{flex: 'auto', minWidth: 0}}
                    >
                        <Menu.Item key="/tasks" icon={<DashboardFilled/>}>
                            <NavLink to="/tasks">
                                <span>Задачи</span>
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item key="/users" icon={<UserAddOutlined/>}>
                            <NavLink to="/users">
                                <span>Пользователи</span>
                            </NavLink>
                        </Menu.Item>
                    </Menu>
                </div>
            </Header>
            <Routes>
                <Route path="/tasks" element={<TaskPage/>}/>
                <Route path="/users" element={<UserPage/>}/>
            </Routes>
        </Space>
    )
}

export default HeaderComponent;