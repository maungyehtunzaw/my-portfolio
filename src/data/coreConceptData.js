import { AppstoreOutlined, CodeOutlined, FileTextOutlined, ReadOutlined } from '@ant-design/icons';
import BlogImage from '../assets/icon/blog.png';
import CareerImage from '../assets/icon/programmer.png';
import PortfolioImage from '../assets/icon/portfolio.png';
import ResumeImage from '../assets/icon/cv.png';
const projectsData = [
    {
        id: 1,
        title: 'Portfolio',
        description: 'A showcase of my professional projects and achievements.',
        icon: <AppstoreOutlined  />,
        link: '/projects',
        iconImage: PortfolioImage,
        ribbonText: 'Hippies',
        ribbonColor: 'purple',
    },
    {
        id: 2,
        title: 'Career Journey',
        description: 'A detailed timeline of my career milestones and experiences.',
        icon: <CodeOutlined/>,
        link: '/story',
        iconImage: CareerImage,
    },
    {
        id: 3,
        title: 'Professional Resume',
        description: 'An overview of my skills, education, and work experience.',
        icon: <FileTextOutlined/>,
        link: '/resume',
        iconImage: ResumeImage,
    },
    {
        id: 4,
        title: 'Tech Blog',
        description: 'Insights, tutorials, and thoughts on technology and coding.',
        icon: <ReadOutlined />,
        link: '/blogs',
        iconImage: BlogImage,
    },
];

export default projectsData;
