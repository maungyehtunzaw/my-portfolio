import {AppstoreOutlined, CodeOutlined, ProfileOutlined, BookOutlined} from '@ant-design/icons';
const coreConceptData = [
    {
        id: 1,
        title: 'Work & Projects',
        description: 'Some of the things I\'ve developed',
        image: 'AppstoreOutlined',
        icon:<AppstoreOutlined style={{ fontSize: '48px', color: '#1890ff', textAlign: 'center', padding: '20px' }}/>,
        link: '/projects',
    },
    {
        id: 2,
        title: 'Developer Story',
        description: 'My career timeline as a developer.',
        image: 'CodeOutlined',
        icon:<CodeOutlined style={{ fontSize: '48px', color: '#1890ff', textAlign: 'center', padding: '20px' }}/>,
        link: '/story',
    },
    {
        id: 3,
        title: 'Resume',
        description: 'Just a summary for you to see.',
        image: 'ProfileOutlined',
        icon:<ProfileOutlined style={{ fontSize: '48px', color: '#1890ff', textAlign: 'center', padding: '20px' }}/>,
        link: '/resume',
    },
    {
        id: 4,
        title: 'Blogs',
        description: 'I\'m planning to start a blog.',
        image: 'BookOutlined',
        icon:<BookOutlined style={{ fontSize: '48px', color: '#1890ff', textAlign: 'center', padding: '20px' }}/>,
        link: '/blogs',
    },
];
export default coreConceptData;