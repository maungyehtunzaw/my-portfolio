import React from 'react';
import { Row, Col, Image, Button } from 'antd';
import { LinkedinFilled, GithubFilled, MailOutlined } from '@ant-design/icons';
import { Typography, Card } from 'antd';

const { Title, Paragraph } = Typography;

function AboutMe() {
  return (
    <div className="about-section">
      <Row align="middle" justify="center" gutter={16}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <Image
            width={200}
            src="path_to_your_photo.jpg" // Replace with your actual image path
            alt="Your Name"
            style={{ borderRadius: '50%' }}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={16}>
          <h1>Hi, I'm Ye Htun Zaw</h1>
          <Paragraph>
            I'm a Full-Stack Web Developer and Android App Developer with extensive experience in developing high-quality web and mobile applications. I specialize in HTML, CSS, JavaScript, PHP, MySQL, and more. I am passionate about building responsive, user-centric solutions that solve real-world problems.
          </Paragraph>
          <Paragraph>
            I am currently looking for new opportunities to work on exciting projects. If you have a project in mind or want to collaborate, feel free to get in touch.
            </Paragraph>
          <h2>Connect with Me</h2>
          <div>
            <Button type="link" icon={<LinkedinFilled />} href="https://www.linkedin.com/in/yehtunzaw/" target="_blank">LinkedIn</Button>
            <Button type="link" icon={<GithubFilled />} href="https://github.com/yehtunzaw" target="_blank">GitHub</Button>
            <Button type="link" icon={<MailOutlined />} href="mailto:your.email@example.com">Email</Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default AboutMe;
