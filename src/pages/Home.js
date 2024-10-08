import React from 'react';
import { Row, Col, Image, Button, Divider, Flex } from 'antd';
import { LinkedinFilled, GithubFilled, MailOutlined, DesktopOutlined, SketchOutlined, ToolOutlined, CodeOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import logoImage from '../assets/logo/yehtunz.jpeg';
import { useTheme } from '../context/themeContext';
import CoreConceptSection from './components/CoreConcepts';
// import styled from 'styled-components';
import { cardStyle, cardStyle2, cardStyle3, cardStyle4, iconStyle } from '../data/styles';
import { TypeAnimation } from 'react-type-animation';
const { Title, Paragraph } = Typography;
// const MyNameTitle =styled.h1`
// color: blue;
// font-size: 2.5rem;
// font-weight: 600;`
 //no ' " for value ?"
function Home() {
  const { theme } = useTheme();

  return (
    
    <div style={{ backgroundColor: theme.backgroundColor, color: theme.textColor, padding: '20px' }}>
    <section className="home-section">
      <Row align="middle" justify="right" gutter={16}>
        <Col xs={24} sm={24} md={12} lg={8}>
        <Flex style={{marginRight:"20px"}} justify='center' align='center'>
       
          {/* <Badge.Ribbon text="Zippzy" color="pink"> */}
          <Image
              width="50%"
              src={logoImage}
              alt="Ye Htun Z"
              preview={false}
              bordered="true"
              style={{ borderRadius: '50%', border: '3px inset #000' }}
            />
          {/* </Badge.Ribbon> */}
         
          </Flex>
        </Col>
        <Col xs={24} sm={24} md={12} lg={16}>
          {/* <Title style={{ color: theme.textColor }}>Hi, I'm Ye {theme.textColor} Htun Zaw</Title> */}
          <TypeAnimation
          style={{fontSize:"2.1rem",color:"purple",letterSpacing:"10px"}}
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "I'm Ye Htun Z, I Develop",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "I'm Ye Htun Z, I Code",
        1000,
        "I'm Ye Htun Z, I Design",
        1000,
      ]}
      wrapper="span"
      speed={50}
      // style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
          <Paragraph>
            <Typography.Title level={4} style={{ color: theme.textColor }}>
              I'm a Full-Stack Web Developer, PHP, NodeJs, React, Vue and Flutter with extensive experience in developing high-quality web and mobile applications. 
            </Typography.Title>
          </Paragraph>
          {/* <Paragraph>
            <Typography.Title level={5} style={{ color: theme.textColor }}>
            {theme.textColor} <br/>
              I am currently looking for new opportunities to work on exciting projects. If you have a project in mind or want to collaborate, feel free to get in touch.
            </Typography.Title>
          </Paragraph> */}
          <Title level={3} style={{ color: theme.textColor }}>Get in Contact</Title>
          <Paragraph>
            <Button ghost type="primary" shape="circle" icon={<LinkedinFilled />} href="https://www.linkedin.com/in/yehtunz/" target="_blank" /> &nbsp;
            <Button ghost type="primary" danger shape="circle" icon={<GithubFilled />} href="https://github.com/maungyehtunzaw" target="_blank" /> &nbsp;
            <Button ghost type="primary" shape="circle" icon={<MailOutlined />} href="mailto:maungyehtunzaw@gmail.com" />
          </Paragraph>
        </Col>
      </Row>
    </section>
    <section style={{ padding: '20px'}}>
      <Divider type="horizontal" orientation="center">
        SKILLS SET
      </Divider>
      
      <Row gutter={[16, 16]} justify="space-around">
        
        <Col xs={24} sm={12} md={6}>
          <Flex vertical className="skill-card" style={cardStyle}>
            <CodeOutlined style={iconStyle} />
            <Title level={4} style={{ marginBottom: '10px', color: '#fff' }}>BACKEND</Title>
            <p>PHP, NodeJs, Go, MySQL, MSSQL</p>
            <p>Develop scalable backend systems</p>
          </Flex>
        </Col>

        <Col xs={24} sm={12} md={6}>
          <Flex vertical className="skill-card" style={cardStyle2}>
            <DesktopOutlined style={iconStyle} />
            <Title level={4} style={{ marginBottom: '10px', color: '#fff' }}>FRONTEND/ANDROID</Title>
            <p>HTML, CSS, React, Vue & Flutter</p>
            <p>Design responsive UI/UX </p>
          </Flex>
        </Col>

        <Col xs={24} sm={12} md={6}>
          <Flex vertical className="skill-card" style={cardStyle3}>
            <SketchOutlined style={iconStyle} />
            <Title level={4} style={{ marginBottom: '10px', color: '#fff' }}>DESIGN</Title>
            <p>Adobe XD, Photoshop</p>
            <p>Create stunning visual designs</p>
          </Flex>
        </Col>

        <Col xs={24} sm={12} md={6}>
          <Flex vertical className="skill-card" style={cardStyle4}>
            <ToolOutlined style={iconStyle} />
            <Title level={4} style={{ marginBottom: '10px', color: '#fff' }}>ESSENTIAL</Title>
            <p>GitHub, Server</p>
            <p>Deploy and maintain systems</p>
          </Flex>
        </Col>

      </Row>
    </section>
    <Divider type="horizontal" orientation="center" orientationMargin={20}>
       <h4>Story, Work and Blogs</h4>
    </Divider>
    <CoreConceptSection/>
    
  </div>
 
  );
}

export default Home;
