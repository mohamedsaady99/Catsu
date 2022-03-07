import React from 'react'
import './contact.css'
import { Form, Input, Button, Row, Col } from 'antd';
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
function Contact() {

    const onFinish = (values) => {
        console.log(values);
    };

    return (
        <div className='contact' id="contact">
            <h2>Contact Us</h2>
            <Row>
                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                    <div className='contact-info'>
                        <h3>Get in touch</h3>
                        <h4>
                            We love hearing from the All About Cats community and welcome your questions, suggestions, and insights.
                            If you have questions related to cat care, health, or nutrition, please Contact us
                        </h4>
                        <p>
                            <Button type="primary" icon={<i className="ri-home-8-line icon"></i>}></Button>
                            <span>18 El-Tahrir st. cairo,Egypt</span>
                        </p>
                        <p>
                            <Button type="primary" icon={<i className="ri-phone-fill icon"></i>}></Button>
                            <a href='tel:201026454879'>+201026454879</a>
                        </p>
                        <p>
                            <Button type="primary" icon={<i className="ri-mail-line icon"></i>}></Button>
                            <a href='mailto:mohamedsaadyelnagar@gmail.com'>mohamedsaadyelnagar@gmail.com</a>
                        </p>
                    </div>
                </Col>
                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                        <Form.Item
                            name={['name']}
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input placeholder='Name' />
                        </Form.Item>
                        <Form.Item
                            name={['email']}
                            rules={[
                                {
                                    type: 'email',
                                    required: true
                                },
                            ]}
                        >
                            <Input placeholder='Email' />
                        </Form.Item>
                        <Form.Item name={['subject']} >
                            <Input placeholder='Subject' />
                        </Form.Item>
                        <Form.Item name={['message']}>
                            <Input.TextArea placeholder='Message' />
                        </Form.Item>
                        <Form.Item >
                            <Button type="primary" htmlType="submit" icon={<i className="ri-send-plane-fill"></i>}>
                                Send Message
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

export default Contact