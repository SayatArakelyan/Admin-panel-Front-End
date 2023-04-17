import {Avatar,  Space, Table, Typography} from "antd";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts} from "../../redux/reducers/products/actions";

function Inventory() {
    const {loading, data: dataSource} = useSelector(state => state.products)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts());

    }, []);

    console.log(dataSource)

    return (
        <Space size={20} direction="vertical">
            <Typography.Title level={4}>Inventory</Typography.Title>
            <Table
                loading={loading}

                columns={[
                    {
                        title: "image",
                        dataIndex: "image",
                        render: (image) => {
                            return <Avatar src={`http://localhost:4444/${image}`}/>;
                        },
                    },
                    {
                        title: "name",
                        dataIndex: "name",

                    },
                    {
                        title: "Price",
                        dataIndex: "price",
                        render: (value) => <span>${value}</span>,
                    },

                    {
                        title: "Stock",
                        dataIndex: "stock",
                    },

                    {
                        title: "Brand",
                        dataIndex: "brand",
                    },
                    {
                        title: "Category",
                        dataIndex: "category",
                    },
                ]}
                dataSource={dataSource}
                pagination={{
                    pageSize: 5,
                }}
            ></Table>
        </Space>
    );
}

export default Inventory;
