import {Table} from "antd";

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