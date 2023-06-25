import React from 'react';
import {Form, Input, Button} from 'antd';
import {useDispatch} from "react-redux";
import {signIn} from "../../redux/reducers/Auth/authActions";
import {AUTH_TOKEN} from "../../constants";
import {Navigate, useNavigate} from "react-router-dom";
import "../../App.css"

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const LoginForm = () => {
    const user = localStorage.getItem(AUTH_TOKEN)



    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onFinish = (values) => {
        dispatch(signIn({Email: values.Email, password: values.password})).then(() => {

            navigate('/')
        })
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    console.log(user)

    if (user) {
        return <Navigate to="/" replace/>;
    }

    return (

        <Form
            {...layout}
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}

        >
            <Form.Item
                label="Email"
                name="Email"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input/>
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password/>
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
      
    );
};

export default LoginForm;
