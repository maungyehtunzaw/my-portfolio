import React from 'react';
import { Row, Col, Card, Typography } from 'antd';
import blogsData from '../data/blogsData';  // Import the blogs data

const { Title, Paragraph } = Typography;

function Blogs() {
  return (
    <div>
      <Title level={2}>Blogs</Title>
      <Row gutter={[16, 16]}>
        {blogsData.map(blog => (
          <Col xs={24} sm={12} lg={8} key={blog.id}>
            <Card
              hoverable
              cover={<img alt={blog.title} src={blog.main_image} />}
              style={{ marginBottom: 16 }}
            >
              <Card.Meta
                title={blog.title}
                description={blog.description}
              />
              <Paragraph style={{ marginTop: 10 }}>
                Created at: {blog.createdAt}
              </Paragraph>
              <Paragraph>
                Updated at: {blog.updatedAt}
              </Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Blogs;
