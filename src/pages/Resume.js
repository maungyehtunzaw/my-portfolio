import React from 'react';
import { Row, Col, Card, Typography, List, Tag, Space,Avatar, Button, Image, Progress } from 'antd';
import { Fade } from 'react-awesome-reveal';
import resumeData from '../data/resumeData';  // Import the resume data
import { WalletOutlined } from '@ant-design/icons';
import eduIcon from '../assets/icon/edu.png';
import expIcon from '../assets/icon/exp.png';
import myPhoto from '../assets/logo/yehtunz.jpeg';
const { Title, Paragraph, Text } = Typography;
const { Meta } = Card;

function Resume() {
  return (
    <div>
      <Title level={2} style={{ textAlign: 'center' }}>My Career Highlights and Experience</Title>
      <Row gutter={[16, 16]}>
        <Col xs={24} md={8}>
          <Fade triggerOnce>
          <Card
  title="Personal Details"
  bordered={true}
  className="personal-card"
  style={{ textAlign: 'center', padding: '20px' }} // Center content and adjust padding
>
  <Image
    width={200}
    src={myPhoto}
    preview={false}
    alt="Profile Picture"
    style={{ display: 'block', margin: '0 auto 16px', borderRadius: '50%',border:"2px solid red" }} // Image centering and rounded corners
  />
  <Space direction="horizontal" size="middle" style={{ justifyContent: 'center' }}>
    <Button
      type="link"
      href={`mailto:${resumeData.personalDetails.email}`}
      icon={resumeData.personalDetails.icons.email}
      size="large"
      style={{ color: '#1DA1F2' }}
    />
    <Button
      type="link"
      href={`tel:${resumeData.personalDetails.phone}`}
      icon={resumeData.personalDetails.icons.phone}
      size="large"
      style={{ color: '#34A853' }}
    />
    <Button
      type="link"
      href={resumeData.personalDetails.linkedIn}
      icon={resumeData.personalDetails.icons.linkedIn}
      size="large"
      style={{ color: '#0077B5' }}
    />
    <Button
      type="link"
      href={resumeData.personalDetails.github}
      icon={resumeData.personalDetails.icons.github}
      size="large"
      style={{ color: '#333' }}
    />
  </Space>
</Card>
     
            <Card title="Skills" bordered={true} className="skills-card">
              <List
                itemLayout="horizontal"
                dataSource={resumeData.myskills}
                renderItem={item => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={<Avatar icon={<WalletOutlined />} />}
                      title={item.name}
                      description={item.description}
                    />
                  </List.Item>
                )}
              />
            </Card>
          </Fade>
        </Col>
        <Col xs={24} md={16}>
          <Fade triggerOnce cascade>
            <Card bordered={true} style={{ marginBottom: 16 }} className="education-card" icon={<WalletOutlined />}>
              <Meta
                avatar={<Avatar src={eduIcon} />}
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
            <Card bordered={true} style={{ marginBottom: 16 }} className="experience-card">
            <Meta
                avatar={<Avatar src={expIcon} />}
                title="Experience"
                description="Working history"
              />
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
            {/* <Card title="Skills" bordered={true} className="skills-card">
              {resumeData.skills.map((skill, index) => (
                <Tag color="blue" key={index} style={{ marginBottom: 8 }}>
                  {skill}
                </Tag>
              ))}
            </Card> */}
            <Card title="Skills" bordered={true} className="skills-card">
            <Space wrap size={[16, 16]} style={{ justifyContent: 'center' }}>
  {resumeData.skills.map((skill, index) => (
    <Tag key={index}  style={{
          padding: '12px 16px',
          border: '1px solid #d9d9d9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100px',
          height:'90px',
          flexDirection: 'column',
          textAlign: 'center'
          
        }}>
      <Image
        src={resumeData.skillLogos[skill]}
        alt={`${skill} logo`}
        width={40} // Adjust size as needed
        preview={false}
        style={{ verticalAlign: 'middle',margin:"7px" }}
      />
        <span>{skill}</span>
    </Tag>
  ))}
  </Space>
</Card>


<Card title="Skills" bordered={true} className="skills-card">
  <Space wrap size={[16, 16]} style={{ justifyContent: 'center' }}>
    {resumeData.skillData.map((skillItem, index) => (
      <div key={index} style={{ textAlign: 'center', width: '200px', padding: '10px', border: '1px solid #d9d9d9', borderRadius: '8px' }}>
        <Image
          src={skillItem.logo}
          alt={`${skillItem.skill} logo`}
          width={50}
          preview={false}
          style={{ marginBottom: '8px' }}
        />
        <p>{skillItem.skill}</p>
        <Progress
          percent={skillItem.percent}
          status="active"
          strokeColor={{
            '0%': '#108ee9',
            '100%': '#87d068',
          }}
        />
      </div>
    ))}
  </Space>
</Card>

          </Fade>
        </Col>
      </Row>
    </div>
  );
}

export default Resume;
