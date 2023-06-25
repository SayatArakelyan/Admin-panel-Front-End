import { Avatar, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMessages } from "../../redux/reducers/messages/actions";
// import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
// import ProductForm from "../../Components/ProductForm";

function Messages() {
    const { loading, data: dataSource } = useSelector((state) => state.messages);
    console.log(dataSource)

    const [originalData, setOriginalData] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMessages());
    }, []);

    useEffect(() => {
        setOriginalData(dataSource);
    }, [dataSource]);

    return (
        <Space size={20} direction="vertical">
            <Typography.Title level={4}>Inventory</Typography.Title>
            <Table
                loading={loading}
                columns={[
                    {
                        title: "Image",
                        dataIndex: "image",
                        key: "id",
                        render: (image) => {
                            return <Avatar src={`http://localhost:4444/${image}`} />;
                        },
                    },
                    {
                        title: "Message",
                        dataIndex: "message",
                        key: "id",
                    },
                    {
                        title: "Email",
                        dataIndex: "email",
                        key: "id",
                    },
                ]}
                dataSource={originalData}
                pagination={{
                    pageSize: 5,
                }}
            ></Table>
        </Space>
    );
}

export default Messages;
