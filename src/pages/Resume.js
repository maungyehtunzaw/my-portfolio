import React from 'react';
import { Row, Col, Card, Typography, List, Tag, Space,Avatar } from 'antd';
import { Fade } from 'react-awesome-reveal';
import resumeData from '../data/resumeData';  // Import the resume data
import { WalletOutlined } from '@ant-design/icons';
const { Title, Paragraph, Text } = Typography;
const { Meta } = Card;
function Resume() {
  return (
    <div>
      <Title level={2}>Resume</Title>
      <Row gutter={[16, 16]}>
        <Col xs={24} md={8}>
          <Fade triggerOnce>
            <Card title="Personal Details" bordered={false} className="personal-card">
              <Space direction="vertical">
                <Paragraph>
                  {resumeData.personalDetails.icons.email} <Text strong>Email:</Text> {resumeData.personalDetails.email}
                </Paragraph>
                <Paragraph>
                  {resumeData.personalDetails.icons.phone} <Text strong>Phone:</Text> {resumeData.personalDetails.phone}
                </Paragraph>
                <Paragraph>
                  {resumeData.personalDetails.icons.address} <Text strong>Address:</Text> {resumeData.personalDetails.address}
                </Paragraph>
                <Paragraph>
                  {resumeData.personalDetails.icons.linkedIn} <Text strong>LinkedIn:</Text> <a href={resumeData.personalDetails.linkedIn}>{resumeData.personalDetails.linkedIn}</a>
                </Paragraph>
                <Paragraph>
                  {resumeData.personalDetails.icons.github} <Text strong>GitHub:</Text> <a href={resumeData.personalDetails.github}>{resumeData.personalDetails.github}</a>
                </Paragraph>
              </Space>
            </Card>
          </Fade>
        </Col>
        <Col xs={24} md={16}>
          <Fade triggerOnce cascade>
            <Card  bordered={false} style={{ marginBottom: 16 }} className="education-card" icon={<WalletOutlined />}>
            <Meta
          avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />}
           title="Education"
          description="Education & Certifications"
        />
              <List
                itemLayout="vertical"
                dataSource={resumeData.education}
                renderItem={item => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={item.icon}
                      title={`${item.degree} at ${item.institution}`}
                      description={`${item.startYear} - ${item.endYear}`}
                    />
                    <Paragraph>{item.description}</Paragraph>
                  </List.Item>
                )}
              />
            </Card>
            <Card title="Experience" bordered={false} style={{ marginBottom: 16 }} className="experience-card">
              <List
                itemLayout="vertical"
                dataSource={resumeData.experience}
                renderItem={item => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={item.icon}
                      title={`${item.position} at ${item.company}`}
                      description={`${item.startYear} - ${item.endYear}`}
                    />
                    <Paragraph>{item.description}</Paragraph>
                  </List.Item>
                )}
              />
            </Card>
            <Card title="Skills" bordered={false} className="skills-card">
              {resumeData.skills.map((skill, index) => (
                <Tag color="blue" key={index} style={{ marginBottom: 8 }}>
                  {skill}
                </Tag>
              ))}
            </Card>
          </Fade>
        </Col>
      </Row>
    </div>
  );
}

export default Resume;
