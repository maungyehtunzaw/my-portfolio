import React from 'react';
import { Row, Col, Image, Button, Divider, Badge } from 'antd';
import { LinkedinFilled, GithubFilled, MailOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import logoImage from '../assets/logo/yehtunz.JPG';
import { useTheme } from '../context/themeContext';
import CoreConceptSection from './components/CoreConcepts';
const { Title, Paragraph } = Typography;
function Home() {
  const { theme } = useTheme();
  return (
    
    <div style={{ backgroundColor: theme.backgroundColor, color: theme.textColor, padding: '20px' }}>
    <section className="home-section">
      <Row align="middle" justify="center" gutter={16}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <Badge.Ribbon text="Hippies" color="pink">
            <Image
              width="100%"
              src={logoImage}
              alt="Ye Htun Z"
              preview={false}
              style={{ borderRadius: '50%', border: `3px solid ${theme.cardBackgroundColor}` }}
            />
          </Badge.Ribbon>
        </Col>
        <Col xs={24} sm={24} md={12} lg={16}>
          <Title style={{ color: theme.textColor }}>Hi, I'm Ye {theme.textColor} Htun Zaw</Title>
          <Paragraph>
            <Typography.Title level={5} style={{ color: theme.textColor }}>
              I'm a Full-Stack Web Developer, PHP, NodeJs, React, Vue and Flutter App Developer with extensive experience in developing high-quality web and mobile applications. I specialize in JavaScript, PHP, MySQL, and customized design for CSS, SASS. I am passionate about building responsive, user-centric solutions that solve real-world problems.
            </Typography.Title>
          </Paragraph>
          <Paragraph>
            <Typography.Title level={5} style={{ color: theme.textColor }}>
            {theme.textColor} <br/>
              I am currently looking for new opportunities to work on exciting projects. If you have a project in mind or want to collaborate, feel free to get in touch.
            </Typography.Title>
          </Paragraph>
          <Title level={3} style={{ color: theme.textColor }}>Connect with me</Title>
          <Paragraph>
            <Button ghost type="primary" shape="circle" icon={<LinkedinFilled />} href="https://www.linkedin.com/in/yehtunz/" target="_blank" /> &nbsp;
            <Button ghost type="primary" danger shape="circle" icon={<GithubFilled />} href="https://github.com/maungyehtunzaw" target="_blank" /> &nbsp;
            <Button ghost type="primary" shape="circle" icon={<MailOutlined />} href="mailto:maungyehtunzaw@gmail.com" />
          </Paragraph>
        </Col>
      </Row>
    </section>
    <Divider type="horizontal" orientation="center" orientationMargin={20}>
      <Title level={3} style={{ color: theme.textColor }}>Story, Works and Blogs</Title>
    </Divider>
    <CoreConceptSection/>
    
  </div>
 
  );
}

export default Home;
