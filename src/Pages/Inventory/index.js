import {Avatar, Space, Table, Typography, Button} from "antd";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts} from "../../redux/reducers/products/actions";
import {deleteProduct} from "../../redux/reducers/products/actions";

function Inventory() {
    const {loading, data: dataSource} = useSelector(state => state.products)

    const [originalData, setOriginalData] = useState([]);


    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchProducts());

    }, []);

    useEffect(() => {
        setOriginalData(dataSource);
    }, [dataSource]);


    const handleDelete = (id) => {
        const index = originalData.findIndex((item) => item.id === id);
        const newData = [...originalData];
        newData.splice(index, 1);
        setOriginalData(newData);
        dispatch(deleteProduct({id: id}))
    }


    return (
        <Space size={20} direction="vertical">
            <Typography.Title level={4}>Inventory</Typography.Title>
            <Table
                loading={loading}


                columns={[
                    {
                        title: "image",
                        dataIndex: "image",
                        key: "id",
                        render: (image) => {
                            console.log(image)
                            return <Avatar src={`http://localhost:4444/${image}`}/>;
                        },
                    },
                    {
                        title: "name",
                        dataIndex: "name",
                        key: "id"


                    },
                    {
                        title: "Price",
                        dataIndex: "price",
                        key: "id",
                        render: (value) => <span>${value}</span>,
                    },


                    {
                        title: "Category",
                        dataIndex: "category_id",
                    },
                    {
                        title: "",
                        dataIndex: "id",
                        key: "delete",
                        render: (id) => (
                            <Button danger onClick={() => handleDelete(id)}>
                                Delete
                            </Button>
                        ),
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

export default Inventory;
