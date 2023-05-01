import { Form, Input, Button } from "antd";
import {updateProduct} from "../../redux/reducers/products/actions";
import {useDispatch} from "react-redux";

function ProductForm({ product, onCancel }) {
    const [form] = Form.useForm();
    const dispatch = useDispatch()


    const handleFinish = (id) => {
dispatch(updateProduct({id}))

        onCancel();
    };

    const handleCancel = () => {
        form.resetFields();
        onCancel();
    };

    return (
        <Form
            form={form}
            layout="vertical"
            onFinish={(values)=>handleFinish()}
            initialValues={product}
        >



            <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: "Please enter a name" }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="description"
                name="description"
                rules={[{ required: true, message: "Please enter a description" }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Price"
                name="price"
                rules={[{ required: true, message: "Please enter a price" }]}
            >
                <Input type="number" min={0} step={0.01} />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Save
                </Button>
                <Button style={{ marginLeft: "10px" }} onClick={handleCancel}>
                    Cancel
                </Button>
            </Form.Item>
        </Form>
    );
}

export default ProductForm;
