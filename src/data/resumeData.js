import {
    MailOutlined,
    PhoneOutlined,
    HomeOutlined,
    LinkedinOutlined,
    GithubOutlined,
    BookOutlined,
    LaptopOutlined,
    CodeOutlined,
    CheckCircleOutlined
  } from '@ant-design/icons';
  
  const resumeData = {
    personalDetails: {
      name: 'Ye Htun Zaw',
      image: 'https://avatars.githubusercontent.com/u/47273253?v=4',
      title: 'Full-Stack Developer',
      email: 'maungyehtunzaw@gmail.com',
      phone: '+855 0973564 596,+95 097432 77 69',
      address: '123 Main Street, Yangon, Myanmar',
      linkedIn: 'https://www.linkedin.com/in/yehtunzaw/',
      github: 'https://github.com/maungyehtunzaw',
      icons: {
        email: <MailOutlined />,
        phone: <PhoneOutlined />,
        address: <HomeOutlined />,
        linkedIn: <LinkedinOutlined />,
        github: <GithubOutlined />,
      },
    },
    education: [
      {
        institution: 'Computer University',
        degree: 'Bachelor of Computer Science',
        startYear: '2008',
        endYear: '2011',
        description: 'Studied various subjects including software engineering, algorithms, and data structures.',
        icon: <BookOutlined />
      },
      {
        institution: 'ICTTI',
        degree: 'Software Engineer Certification',
        startYear: '2013',
        endYear: '2013',
        description: 'Obtained certification in software engineering.',
        icon: <CheckCircleOutlined />
      },
      {
        institution: 'San Development',
        degree: 'Android Kotlin Cert',
        startYear: '2015',
        endYear: '2015',
        description: 'Android development with Kotlin.',
        icon: <CheckCircleOutlined />
      },
      {
        institution: 'Coding Elephant',
        degree: 'Full-Stack Js Course',
        startYear: '2018',
        endYear: '2013',
        description: 'Fucll-Stack development with JavaScript.',
        icon: <CheckCircleOutlined />
      }
    ],
    experience: [
      {
        company: 'National IT Solutions Co., Ltd',
        position: 'Programmer',
        startYear: '2013',
        endYear: '2018',
        description: 'Worked on various projects involving website development, customer requirement and team collaboration.',
        icon: <LaptopOutlined />
      },
      {
        company: 'City Capital Development Co.,Ltd',
        position: 'Senior Web Developer',
        startYear: '2018',
        endYear: '2019',
        description: 'Led web development projects and managed a team of developers.',
        icon: <CodeOutlined />
      },
      {
        company: 'Career-Tech Japan Co., Ltd',
        position: 'Lead Full-Stack Developer',
        startYear: '2019',
        endYear: '2023',
        description: 'Developing School Website, Job Website, Hired System, and more.',
        icon: <CodeOutlined />
      },
      {
        company: 'More & More Co., Ltd',
        position: 'Lead Full-Stack Developer',
        startYear: '2023',
        endYear: '2023',
        description: 'Leading in development, for Gold & Jwelery ERP System.',
        icon: <CodeOutlined />
      },
      {
        company: 'Develop X',
        position: 'Backend Developer',
        startYear: '2023',
        endYear: '2024',
        description: 'Develop Doamin management system, and more.',
        icon: <CodeOutlined />
      }
    ],
    skills: ['HTML', 'CSS', 'JavaScript', 'React','Vue','Node.js', 'PHP', 'Laravel', 'CakePHP','MySQL', 'Flutter', 'Kotlin']
  };
  
  export default resumeData;
  