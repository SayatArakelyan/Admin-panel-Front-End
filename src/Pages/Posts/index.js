import {Button, Input, InputNumber, Select, Space} from "antd";
import {useState} from "react";

import {useDispatch,} from "react-redux";

import {addProduct} from "../../redux/reducers/products/actions";


function Posts() {


    const dispatch = useDispatch()


    const [data, setData] = useState({
        name: '',
        description: '',
        price: 100,
        category_id: 1,
        image: null,
    })

    const handleChange = (name, value) => {
        setData((prevState) => ({
            ...prevState,
            [name]: value
        }))
    };

    const handleUpload = () => {
        const {name, category_id, image, price, description} = data;

        dispatch(addProduct({
            name,
            description,
            category_id,
            price,
            image
        })).then(() => {
            setData({
                name: '',
                description: '',
                price: 100,
                category_id: 1,
                image: null,
            })
        })
    }

    return (
        <div className="App">

            <Space direction="vertical">
                <Input placeholder="Name" onChange={(e) => handleChange('name', e.target.value)} value={data.name}/>
                <Input placeholder="Description" onChange={(e) => handleChange('description', e.target.value)}
                       value={data.description}/>
                <InputNumber placeholder="Price" onChange={(number) => handleChange('price', number)}
                             value={data.price}/>
                <Select defaultValue="1" options={[{
                    value: '1',
                    label: '1',
                }, {
                    value: '2',
                    label: '2',
                }]} onChange={(category) => handleChange('category_id', category)}/>
            </Space>

            <input type="file" accept='image/*' onChange={(e) => handleChange('image', e.target.files[0])}/>

            <Button onClick={handleUpload}>
                Upload
            </Button>
        </div>
    );
}

export default Posts;
