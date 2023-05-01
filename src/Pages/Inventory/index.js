import {Avatar, Space, Table, Typography, Button,Modal} from "antd";

import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts} from "../../redux/reducers/products/actions";
import {deleteProduct,updateProduct} from "../../redux/reducers/products/actions";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import ProductForm from "../../Components/ProductForm";


function Inventory() {
    const {loading, data: dataSource} = useSelector(state => state.products)

    const [originalData, setOriginalData] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const [selectedProduct, setSelectedProduct] = useState(null);



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
    const handleEdit = (product) => {
        setSelectedProduct(product);
        setIsModalVisible(true);
    };

    const handleCancelEdit = () => {
        setSelectedProduct(null);
        setIsModalVisible(false);
    };
    const handleUpdate = (updatedProduct) => {
        const updatedData = originalData.map((product) =>
            product.id === updatedProduct.id ? updatedProduct : product
        );
        setOriginalData(updatedData);
        dispatch(updateProduct(updatedProduct));
        setIsModalVisible(false);
    };

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
                        title: "description",
                        dataIndex: "description",
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
                            <DeleteOutlined danger onClick={() => handleDelete(id)}>

                            </DeleteOutlined>
                        ),
                    },
                    {
                        title: "",
                        dataIndex: "id",
                        key: "edit",
                        render: (id, record) => (
                            <EditOutlined onClick={() => handleEdit(record)} />
                        ),
                    },


                ]}
                dataSource={originalData}
                pagination={{
                    pageSize: 5,
                }}
            ></Table>
            <Modal
                visible={isModalVisible}
                onCancel={handleCancelEdit}
                footer={null}
            >
                <ProductForm
                    product={selectedProduct}
                    onCancel={handleCancelEdit}
                    onSubmit={handleUpdate}
                    onupdate={handleUpdate}
                />
            </Modal>

        </Space>
    );
}

export default Inventory;
