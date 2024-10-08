import React from 'react';
import { Row, Col, Card, Typography, Form, Input, Button, Space, message } from 'antd';
import { MailOutlined, PhoneOutlined, HomeOutlined, GithubOutlined, LinkedinOutlined } from '@ant-design/icons';

const { Title } = Typography;

function Contact() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    message.success('Your message has been sent!');
    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    message.error('Please check the form fields and try again.');
  };

  return (
    <div className='contactSection'>
      <Title level={2} align="center">Contact</Title>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <Card title="Address" bordered="false" style={{ marginBottom: 16 }}>
            <Space direction="vertical">
              <HomeOutlined /> 123 Main Street, Yangon, Myanmar
            </Space>
          </Card>
          <Card title="Phone" bordered="false" style={{ marginBottom: 16 }}>
            <Space direction="vertical">
              <PhoneOutlined /> +95 123 456 789
            </Space>
          </Card>
          <Card title="Social" bordered="false" style={{ marginBottom: 16 }}>
            <Space direction="vertical">
              <MailOutlined /> yehtunzaw@example.com
              <a href="https://www.linkedin.com/in/yehtunzaw/">
                <LinkedinOutlined /> linkedin.com/in/yehtunzaw
              </a>
              <a href="https://github.com/yehtunzaw">
                <GithubOutlined /> github.com/yehtunzaw
              </a>
            </Space>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={16}>
        <Title level={3}>Send me a message from</Title>
          <Card title="Contact Form" bordered="false">
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: 'Please enter your name!' }]}
              >
                <Input placeholder="Your Name" />
              </Form.Item>
              <Form.Item
                name="email"
                label="Email"
              
                rules={[
                  { required: true, message: 'Please enter your email!' },
                  { type: 'email', message: 'Please enter a valid email!' },
                ]}
              >
                <Input placeholder="Your Email" />
              </Form.Item>
              <Form.Item
                name="message"
                label="Message"
                rules={[{ required: true, message: 'Please enter your message!' }]}
              >
                <Input.TextArea rows={4} placeholder="Your Message" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Contact;
