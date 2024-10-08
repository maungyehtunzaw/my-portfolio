import {
  BookOutlined,
  HomeOutlined,
  LaptopOutlined,
  CodeOutlined,
  CheckCircleOutlined,
  TeamOutlined,
  TrophyOutlined,
  CrownOutlined,
  GoldOutlined,
  AppstoreOutlined
} from "@ant-design/icons";

const timelineData = [
  {
    startYear: '',
    endYear: '2007',
    event: 'Completed High School',
    description: 'Graduated from Basic Education High School in Taze, Sagaing Division, laying the foundation for future academic and professional success.',
    skills: ['High School Diploma'],
    icon: <BookOutlined />
  },
  {
    startYear: '2007',
    endYear: '2007',
    event: 'Introduction to Computing',
    description: 'Began learning the basics of computers, marking the beginning of my journey into the technology field.',
    skills: ['Computer Basics'],
    icon: <HomeOutlined />
  },
  {
    startYear: '2008',
    endYear: '2011',
    event: 'Bachelor’s Degree in Computer Science',
    description: 'Attended the University of Computer Studies, Monywa, and graduated with a degree in Computer Science in 2011.',
    skills: ['Computer Science', 'Software Engineering'],
    icon: <LaptopOutlined />
  },
  // {
  //   startYear: '2012',
  //   endYear: '2012',
  //   event: 'First Job Experience in Yangon',
  //   description: 'Gained valuable experience as a Salesperson, Data Entry Assistant, and Store Staff in Yangon, developing soft skills in customer service and communication.',
  //   skills: ['Sales', 'Customer Communication'],
  //   icon: <TeamOutlined />
  // },
  {
    startYear: '2013',
    endYear: '2013',
    event: 'ICTTI Certification',
    description: 'Successfully passed the entrance exam and obtained a Software Engineering certification from the ICTTI institute.',
    skills: ['Software Engineering', 'Java', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    icon: <CheckCircleOutlined />
  },
  {
    startYear: '2013',
    endYear: '2018',
    event: 'Junior Programmer at National IT Solutions Co., Ltd',
    description: 'Worked as a Junior Programmer, progressing to Executive level and collaborating on multiple projects using PHP frameworks.',
    skills: ['Programming', 'PHP', 'MySQL', 'CakePHP', 'CodeIgniter', 'Laravel'],
    icon: <CodeOutlined />
  },
  {
    startYear: '2018',
    endYear: '2019',
    event: 'Senior Web Developer at City Capital Development Co., Ltd',
    description: 'Led development for Government-to-Citizen (G2C) and Human Resource (H2R) projects as a Senior Web Developer.',
    skills: ['Web Development', 'Project Management', 'Laravel'],
    icon: <TrophyOutlined />
  },
  {
    startYear: '2019',
    endYear: '2022',
    event: 'Lead Full-Stack Developer at Career-Tech Japan Co., Ltd',
    description: 'Led a team as a Full-Stack Developer, managing complex projects and working with modern web and mobile technologies.',
    skills: ['Full-Stack Development', 'Leadership', 'Laravel', 'CakePHP', 'Vue.js', 'React.js', 'Flutter'],
    icon: <CrownOutlined />
  },
  {
    startYear: '2022',
    endYear: '2023',
    event: 'Full-Stack Developer at More & More Co., Ltd',
    description: 'Developed an in-house Web ERP system for the jewelry company More & More as a Full-Stack Developer.',
    skills: ['Full-Stack Development', 'Leadership', 'Laravel', 'React.js'],
    icon: <GoldOutlined />
  },
  {
    startYear: '2023',
    endYear: '2024',
    event: 'Backend Developer at Develop-X',
    description: 'Worked on various backend systems using Laravel, improving the scalability and performance of multiple projects.',
    skills: ['Backend Development', 'Laravel'],
    icon: <CodeOutlined />
  },
  {
    startYear: '2024',
    endYear: '2024',
    event: 'Flutter Developer at FLCT',
    description: 'Currently employed as a Flutter Developer, focusing on mobile application development for cross-platform solutions.',
    skills: ['Flutter', 'Mobile App Development'],
    icon: <AppstoreOutlined />
  }
];

export default timelineData;