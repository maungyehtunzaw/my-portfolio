import {
    MailOutlined,
    PhoneOutlined,
    HomeOutlined,
    LinkedinOutlined,
    GithubOutlined,
    BookOutlined,
    LaptopOutlined,
    CodeOutlined,
    CheckCircleOutlined,
    FacebookOutlined
  } from '@ant-design/icons';
  import ccdLogo from '../assets/ccd.png';
  import nitsLogo from '../assets/nits.png';
  import devXlogo from '../assets/devx.png';
  import moreLogo from '../assets/more.png';
  import careerTech from '../assets/jrf.png';
  
  const resumeData = {
    personalDetails: {
      name: 'Ye Htun Zaw',
      image: 'https://avatars.githubusercontent.com/u/47273253?v=4',
      title: 'Full-Stack Developer',
      email: 'maungyehtunzaw@gmail.com',
      phone: '+855 0973564 596,+95 097432 77 69',
      address: '123 Main Street, Yangon, Myanmar',
      linkedIn: 'https://www.linkedin.com/in/yehtunz/',
      github: 'https://github.com/maungyehtunzaw',
      facebook:'https://fb.com/maungyehtunzaw',
      icons: {
        email: <MailOutlined />,
        phone: <PhoneOutlined />,
        address: <HomeOutlined />,
        linkedIn: <LinkedinOutlined />,
        github: <GithubOutlined />,
        facebook: <FacebookOutlined/>
      },
    },
    education: [
      {
        id:1,
        institution: 'Computer University',
        degree: 'Bachelor of Computer Science',
        startYear: '2008',
        endYear: '2011',
        description: 'Studied various subjects including software engineering, algorithms, and data structures.',
        icon: <BookOutlined />
      },
      {
        id:2,
        institution: 'ICTTI',
        degree: 'Software Engineer Certification',
        startYear: '2013',
        endYear: '2013',
        description: 'Obtained certification in software engineering.',
        icon: <CheckCircleOutlined />
      },
      {
        id:3,
        institution: 'San Development',
        degree: 'Android Kotlin Cert',
        startYear: '2015',
        endYear: '2015',
        description: 'Android development with Kotlin.',
        icon: <CheckCircleOutlined />
      },
      {
        id:4,
        institution: 'Coding Elephant',
        degree: 'Full-Stack Js Course',
        startYear: '2018',
        endYear: '2013',
        description: 'Full-Stack development with JavaScript.',
        icon: <CheckCircleOutlined />
      }
    ],
    experience: [
      {
        id:5,
        company: 'Develop X',
        position: 'Backend Developer',
        startYear: '2023',
        endYear: '2024',
        description: 'Develop Doamin management system, and more.',
        icon: <CodeOutlined />,
        logo: devXlogo,
      },
      {
        id:4,
        company: 'More & More Co., Ltd',
        position: 'Lead Full-Stack Dev',
        startYear: '2023',
        endYear: '2023',
        description: 'Leading in development, for Gold & Jwelery ERP System.',
        icon: <CodeOutlined />,
        logo: moreLogo,
      },
    
      {
        id:3,
        company: 'Career-Tech Japan Co., Ltd',
        position: 'Lead Full-Stack Dev',
        startYear: '2019',
        endYear: '2023',
        description: 'Developing School Website, Job Website, Hired System, and more.',
        icon: <CodeOutlined />,
        logo: careerTech,
      },
      {
        id:2,
        company: 'City Capital Development Co.,Ltd',
        position: 'Senior Web Dev',
        startYear: '2018',
        endYear: '2019',
        description: "Building  Web Application with Laravel - HR, G2C Projects for Nay PyiDevelopment Committee (NPTDC), Government Develop, Discuss requirements and deliver solution to clients ",
        icon: <CodeOutlined />,
        logo: ccdLogo,
      },
      {
        id:1,
        company: 'National IT Solutions Co., Ltd',
        position: 'Programmer',
        startYear: '2013',
        endYear: '2018',
        description: 'Worked on various projects involving website development, customer requirement and team collaboration., such as c2c , cinema website and multiple dynamic website, business website, static website, it solution to customers ',
        icon: <LaptopOutlined />,
        logo: nitsLogo,
      },
     
     
    ],
    skills: ['HTML', 'CSS', 'JavaScript', 'React','Vue','Node.js', 'PHP', 'Laravel', 'CakePHP','MySQL', 'Flutter', 'Kotlin','Go Lang'],
    myskills: [
      {
        name: "Problem Solving",
        description: ""
      },
      {
        name: "Communication",
        description: ""
      },
      {
        name: "Teamwork",
        description: ""
      },
      {
        name: "Adaptability",
        description: ""
      },
      {
        name: "Time Management",
        description: ""
      }
    ],
    skillLogos:{
      HTML: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
      CSS: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
      JavaScript: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
      React: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
      Vue: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg',
      'Node.js': 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
      PHP: 'https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg',
      Laravel: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg',
      CakePHP: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Cakephp_logo.svg/1200px-Cakephp_logo.svg.png',
      MySQL: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/MySQL_textlogo.svg',
      Flutter: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png',
      Kotlin: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png',
      'Go Lang': 'https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg'
    },
    skillData:[
      { skill: 'HTML', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg', percent: 90 },
      { skill: 'CSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg', percent: 85 },
      { skill: 'JavaScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png', percent: 80 },
      { skill: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg', percent: 75 },
      { skill: 'Vue', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg', percent: 70 },
      { skill: 'Node.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg', percent: 85 },
      { skill: 'PHP', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg', percent: 75 },
      { skill: 'Laravel', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg', percent: 80 },
      { skill:"CakePHP", logo:"https://cakephp.org/img/trademarks/logo-1.jpg",percent:75},
      { skill: 'MySQL', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/MySQL_textlogo.svg', percent: 80 },
      { skill: 'Flutter', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png', percent: 70 },
      { skill: 'Go Lang', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg', percent: 65 },
    ],
    
  };
  
  export default resumeData;
  