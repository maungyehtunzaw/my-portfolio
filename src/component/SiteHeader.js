import { Header } from "antd/es/layout/layout";
import { Button, Drawer, Menu, Avatar, Flex } from "antd";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import HamburgerIcon from "../assets/icon/burger.png";
import { HomeOutlined, ProjectOutlined, FileTextOutlined, PictureOutlined, BulbOutlined } from "@ant-design/icons";
import logoIcon from "../assets/logo/logo192.png";

const SiteHeader = () => {
    const [drawerVisible, setDrawerVisible] = useState(false);
    const location = useLocation();
    const [selectedKey, setSelectedKey] = useState("/");

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
        { key: "/", icon: <HomeOutlined />, label: <Link to="/">Home</Link> },
        {
            key: "/projects",
            icon: <ProjectOutlined />,
            label: <Link to="/projects">Projects</Link>,
        },
        {
            key: "/resume",
            icon: <FileTextOutlined />,
            label: <Link to="/resume">Resume</Link>,
        },
        {
            key: "/gallery",
            icon: <PictureOutlined />,
            label: <Link to="/gallery">Gallery</Link>,
        },
        {
            key: "/blogs",
            icon: <BulbOutlined />,
            label: <Link to="/blogs">Blogs</Link>,
        },
        {
            key: "/privacy",
            icon: <FileTextOutlined />,
            label: <Link to="/privacy">Privacy</Link>,
        },
    ];

    return (
        <Header
            style={{
                zIndex: 1,
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <Link to="/">
                <Flex justify="start" align="center">
                    <Avatar src={logoIcon} />
                    <div className="logo"> Ye Htun Z </div>
                </Flex>
            </Link>
            <Menu
                theme="dark"
                mode="horizontal"
                selectedKeys={[selectedKey]}
                className="desktop-menu"
                items={menuItems}
            />
            <Button
                className="mobile-menu-button"
                type="primary"
                onClick={showDrawer}
                icon={<Avatar src={HamburgerIcon} />}
            />
            <Drawer
                title="Ye Htun Z"
                placement="right"
                closable={true}
                onClose={closeDrawer}
                open={drawerVisible}
            >
                <Menu
                    mode="inline"
                    selectedKeys={[selectedKey]}
                    onClick={handleMenuClick}
                    items={menuItems}
                />
            </Drawer>
        </Header>
    );
};

export default SiteHeader;
