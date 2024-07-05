import React, { useState,useEffect } from 'react';
import { Routes, Route, Link,useLocation } from 'react-router-dom';
import { Layout, Menu, Drawer, Button,Typography} from 'antd';
import { FileDoneOutlined,PictureOutlined, HomeOutlined, ProjectOutlined, FileTextOutlined, MailOutlined, BulbOutlined, AppstoreTwoTone ,FacebookFilled,InstagramFilled,YoutubeFilled,GithubFilled,LinkedinFilled } from '@ant-design/icons';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import './App.css';
import StoryTime from './pages/StoryTime';
import Gallery from './pages/Gallery';
import { AnimatePresence, motion } from "framer-motion"
import { getRandomAnimation } from './util/animationUtil';
import { lightTheme, darkTheme, purpleTheme } from './theme';
import { ThemeProvider, useTheme } from './context/themeContext';
import Privacy from './pages/Privacy';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;


const App = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [selectedKey, setSelectedKey] = useState('/');
  console.log(location.pathname);

  useEffect(() => {
    setSelectedKey(location.pathname);
  }, [location]);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  const handleMenuClick = () => {
    closeDrawer();
  };

  const menuItems = [
    { key: '/', icon: <HomeOutlined />, label: <Link to="/">Home</Link> },
    { key: '/projects', icon: <ProjectOutlined />, label: <Link to="/projects">Projects</Link> },
    { key: '/resume', icon: <FileDoneOutlined />, label: <Link to="/resume">Resume</Link> },
    { key: '/contact', icon: <MailOutlined />, label: <Link to="/contact">Contact</Link> },
    { key: '/gallery', icon: <PictureOutlined />, label: <Link to="/gallery">Gallery</Link> },
    { key: '/blogs', icon: <BulbOutlined />, label: <Link to="/blogs">Blogs</Link> },
    { key: '/privacy', icon: <FileTextOutlined />, label: <Link to="/privacy">Privacy</Link> },
  ];

  const themeStyles = theme === 'light' ? lightTheme : theme === 'dark' ? darkTheme : purpleTheme;

  return (
    <Layout className="layout" style={{ backgroundColor: themeStyles.backgroundColor }}>
      <Header
        style={{
          zIndex: 1,
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: themeStyles.primaryColor,
        }}
      >
        <Link to="/">
          <div className="logo" style={{ color: themeStyles.textColor }}>
            Ye Htun Z
          </div>
        </Link>
        <Menu theme="dark" mode="horizontal" selectedKeys={[selectedKey]} className="desktop-menu" style={{ backgroundColor: themeStyles.primaryColor }}>
          {menuItems.map((item) => (
            <Menu.Item key={item.key} icon={item.icon}>
              {item.label}
            </Menu.Item>
          ))}
        </Menu>
        {/* <div> */}
          {/* <Switch checked={theme === 'dark'} onChange={() => toggleTheme(theme === 'dark' ? 'light' : 'dark')} /> Dark Mode
          <Switch checked={theme === 'purple'} onChange={() => toggleTheme(theme === 'purple' ? 'light' : 'purple')} /> Purple Mode */}
          {/* <Switch
            checked={theme === 'dark'}
            onChange={toggleTheme}
            checkedChildren={<MoonOutlined />}
            unCheckedChildren={<SunOutlined />}
          /> */}
      
        {/* </div> */}
        <Button className="mobile-menu-button" type="primary" onClick={showDrawer} icon={<AppstoreTwoTone />} />
        <Drawer title="Ye Htun Z" placement="right" closable={true} onClose={closeDrawer} open={drawerVisible}>
          <Menu mode="inline" selectedKeys={[selectedKey]}>
            {menuItems.map((item) => (
              <Menu.Item key={item.key} icon={item.icon} onClick={handleMenuClick}>
                {item.label}
              </Menu.Item>
            ))}
          </Menu>
        </Drawer>
      </Header>
      <Content className="content" style={{ backgroundColor: themeStyles.backgroundColor, color: themeStyles.textColor }}>
        {/* <div style={{ background: themeStyles.backgroundColor, padding: 24, minHeight: 380 }}> */}
          <AnimatePresence onExitComplete={true} initial={false} mode="wait">
            <Routes location={location}>
              <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
              <Route path="/abouts" element={<PageWrapper><AboutMe /></PageWrapper>} />
              <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
              <Route path="/resume" element={<PageWrapper><Resume /></PageWrapper>} />
              <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
              <Route path="/blogs" element={<PageWrapper><Blogs /></PageWrapper>} />
              <Route path="/gallery" element={<PageWrapper><Gallery /></PageWrapper>} />
              <Route path="/project/:projectId" element={<PageWrapper><ProjectDetail /></PageWrapper>} />
              <Route path="/story" element={<PageWrapper><StoryTime /></PageWrapper>} />
              <Route path="/privacy" element={<PageWrapper><Privacy /></PageWrapper>} />
            </Routes>
          </AnimatePresence>
        {/* </div> */}
      </Content>
      <Footer className="footer" style={{ textAlign: 'center', marginTop: 20, borderRadius: 30, backgroundColor:themeStyles.backgroundColor  }} theme="dark">
        <div className="footer-content" style={{ textAlign: 'left', padding: 20, color: themeStyles.textColor,backgroundColor: themeStyles.primaryColor }}>
          <Title level={3}>Connect with me:</Title>
          <Button type="link" icon={<GithubFilled style={{ fontSize: '30px', color: themeStyles.textColor }} />} href="https://github.com/maungyehtunzaw" target="_blank" />
          <Button type="link" icon={<LinkedinFilled style={{ fontSize: '30px', color: themeStyles.textColor }} />} href="https://www.linkedin.com/in/yehtunz/" target="_blank" />
          <Button type="link" icon={<InstagramFilled style={{ fontSize: '30px', color: themeStyles.textColor }} />} href="https://instagram.com/maungyehtunzaw" target="_blank" />
          <Button type="link" icon={<FacebookFilled style={{ fontSize: '30px', color: themeStyles.textColor }} />} href="https://fb.com/maungyehtunzaw" target="_blank" />
          <Button type="link" icon={<YoutubeFilled style={{ fontSize: '30px', color: themeStyles.textColor }} />} href="https://www.linkedin.com/in/yehtunz/" target="_blank" />
        </div>
        <div className="footer-content" style={{ textAlign: 'left', backgroundColor: '#000', padding: '20px', color: 'white' }}>
          All rights reserved  ©{new Date().getFullYear()} Ye Htun Z ©2024
        </div>
      </Footer>
    </Layout>
  );
};

const PageWrapper = ({ children }) => {
  const animation = getRandomAnimation();
  return (
    <motion.div
      initial={animation.initial}
      animate={animation.animate}
      exit={animation.exit}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

const AppWrapper = () => {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
};

export default AppWrapper;