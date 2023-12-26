import {Table} from "antd";
import React from "react";

function TableComponent(columns, dataSource, rowKey) {
    return (
        <Table
            dataSource={dataSource}
            columns={columns}
            style={{width: '100%'}}
            rowKey={rowKey}
            locale={{emptyText: 'Нет данных'}}
            pagination={false}
        />
    )
}

export default TableComponent