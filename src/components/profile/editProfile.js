import React, { useState } from 'react'
import { Form, Input, Button } from 'antd';
const layout = {
    wrapperCol: {
        span: 24,
    },
};
/* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};
/* eslint-enable no-template-curly-in-string */

function EditProfile({ user, setUser, setEdit }) {
    const imageUrl = localStorage.getItem("imageUrl")
    const [data, setData] = useState({
        name: user.name,
        email: user.email,
        imageUrl: imageUrl
    })

    const onFinish = (values) => {
        console.log(values);
        setEdit(false)
        setUser(data);
        console.log(data)
    };

    return (
        <div className='edit-profile'>
            <h3>Edit Profile Info</h3>
            <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item
                    name={['name']}
                    initialValue={data.name}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
                </Form.Item>
                <Form.Item
                    name={['email']}
                    initialValue={data.email}
                    rules={[
                        {
                            type: 'email',
                            required: true
                        },
                    ]}
                >
                    <Input value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
                </Form.Item>
                <Form.Item >
                    <Button type="primary" htmlType="submit" >
                        Update
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default EditProfile