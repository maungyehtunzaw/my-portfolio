const projectsData = [
  {
    id: 1,
    title: 'Japan Ready School',
    description: 'Online School System, Course, Exam, Quiz,Teacher Admin CMS, and Mobile App API implement with CakePHP Framework ',
    category: 'Web Development',
    tags: ['CakePHP', 'PHP', 'jQuery','MySQL'],
    mainImage:require('../assets/projects/japanready.jpeg'),
    webSite: 'https://www.japanreadyschool.com',
    images: [
      '/path/to/main/g2c-main.jpg',
      '/path/to/secondary/g2c-1.jpg',
      '/path/to/secondary/g2c-2.jpg'
    ],
    time: 'Feb 2022',
    company: 'Career-Tech Japan'
  },
  {
    id: 2,
    title: 'Career Tech Japan',
    description: 'Admin panel for traninee management,Interview Process record, Personal TEST, and Comapny Section , to hired the trainee. implement with Laravel 5.8 Framework.',
    category: 'Web Development',
    tags: ['Laravel','JQuery','Datatables','MySQL'],
    mainImage:require('../assets/projects/career-tech.png'),
    webSite: 'https://www.career-techjapan.com',
    images: [
      '/path/to/main/mobile-app-main.jpg',
      '/path/to/secondary/mobile-app-1.jpg',
      '/path/to/secondary/mobile-app-2.jpg'
    ],
    time: 'Jul 2019',
    company: 'Career-Tech Japan'
  },
  {
    id: 3,
    title: 'Jpro Myanmar',
    description: 'A Jobseeker platform for job search, employer dashboard,admin dashboard, jobseeker dashboard, point system',
    category: 'Web Development',
    tags: ['Laravel','VueJs','InertiaJs','NuxtJs','MySQL'],
    mainImage:require('../assets/projects/jpro.png'),
    webSite: 'https://www.jpromyanmar.com',
    images: [
      '/path/to/main/mobile-app-main.jpg',
      '/path/to/secondary/mobile-app-1.jpg',
      '/path/to/secondary/mobile-app-2.jpg'
    ],
    time: 'Jul 2019',
    company: 'Career-Tech Japan'
  },
    {
      id: 3,
      title: 'Moe Nat Min C2C',
      description: 'Customer to Customer Product Selling Buying Website. implement with CakePHP Framework, Admin CMS, User CMS, and Mobile App API.',
      category: 'Web Development',
      tags: ['CakePHP', 'MySQL', 'jQuery'],
      mainImage:require('../assets/projects/mnm.png'),
      images: [
        '/path/to/main/hr-system-main.jpg',
        '/path/to/secondary/hr-system-1.jpg',
        '/path/to/secondary/hr-system-2.jpg'
      ],
      time: '2014',
      company: 'NITS'
    },
    {
      id: 4,
      title: 'BookIt Yangon',
      description: 'For Beauty salon booking schedule web application. implement with cakephp 3 framework with company backend, user backend, and customers booking function..',
      category: 'Web Development',
      tags: ['CakePHP', 'PHP', 'jQuery','MySQL'],
      mainImage:require('../assets/projects/book.png'),
      images: [
        '/path/to/main/g2c-main.jpg',
        '/path/to/secondary/g2c-1.jpg',
        '/path/to/secondary/g2c-2.jpg'
      ],
      time: '2015',
      company: 'NITS'
    },
    {
      id: 5,
      title: 'Beauty & Luxury',
      description: 'This website is for information website available products and services.implement with CiBootstrap Backend using CI Framework..',
      category: 'Web Development',
      tags: ['CodeIgniter', 'PHP', 'jQuery','MySQL'],
      mainImage:require('../assets/projects/bnu.png'),
      images: [
        '/path/to/main/g2c-main.jpg',
        '/path/to/secondary/g2c-1.jpg',
        '/path/to/secondary/g2c-2.jpg'
      ],
      time: 'Mar 2021 - Dec 2021',
      company: 'NITS'
    },
    {
      id: 6,
      title: 'NC & MaGa',
      description: 'This website for company infomation website and their products. implement with Laravel 4 Framework, Admin CMS',
      category: 'Web Development',
      tags: ['Laravel', 'PHP', 'jQuery','MySQL'],
      mainImage:require('../assets/projects/ncmg.png'),
      images: [
        '/path/to/main/g2c-main.jpg',
        '/path/to/secondary/g2c-1.jpg',
        '/path/to/secondary/g2c-2.jpg'
      ],
      time: 'Mar 2021 - Dec 2021',
      company: 'Freelance'
    },
  
    
    
    {
      id: 7,
      title: 'Phoenix Commounity App',
      description: 'Colloborate with chinese team to add features, bugs fix.',
      category: 'App Development',
      tags: ['Flutter', 'GetX'],
      mainImage:require('../assets/projects/mmpv.png'),
      images: [
        '/path/to/main/mobile-app-main.jpg',
        '/path/to/secondary/mobile-app-1.jpg',
        '/path/to/secondary/mobile-app-2.jpg'
      ],
      time: 'June- 2024',
      company: 'FLCT'
    },
    {
      id: 8,
      title: 'Phoenix Chat Desktop',
      description: 'Collabrae with chinese team to add features, bugs fix. Technologies used: Flutter, Firebase.',
      category: 'App Development',
      tags: ['Flutter', 'Getx','Desktop App'],
      mainImage:require('../assets/projects/mmpv.png'),
      images: [
        '/path/to/main/mobile-app-main.jpg',
        '/path/to/secondary/mobile-app-1.jpg',
        '/path/to/secondary/mobile-app-2.jpg'
      ],
      time: 'June 2024',
      company: 'FLCT'
    },
    {
      id: 9,
      title: 'Japan Ready Functions App',
      description: 'Developed a mobile for learning Japanese language, video courses, assignments, exams, and quizzes. ',
      category: 'App Development',
      tags: ['Flutter','Firebase','Dio','Hive','GetX','Sqlite'],
      mainImage:require('../assets/projects/jrf.png'),
      webSite:'https://play.google.com/store/apps/details?id=com.japanready.jrfapp',
      images: [
        '/path/to/main/mobile-app-main.jpg',
        '/path/to/secondary/mobile-app-1.jpg',
        '/path/to/secondary/mobile-app-2.jpg'
      ],
      time: 'July 2022',
      company: 'Career-Tech Japan'
    },
    {
      id: 10,
      title: 'Golden Trivia Quiz App',
      description: 'My first app with flutter, testing quiz with local data.',
      category: 'App Development',
      tags: ['Flutter', 'Firebase','Sharepreferences'],
      mainImage:require('../assets/projects/quiz.png'),
      webSite: 'https://play.google.com/store/apps/details?id=yehtun.com.mmquiz',
      images: [
        '/path/to/main/mobile-app-main.jpg',
        '/path/to/secondary/mobile-app-1.jpg',
        '/path/to/secondary/mobile-app-2.jpg'
      ],
      time: '',
      company: 'Freelance'
    },
    {
      id: 11,
      title: 'Proverb App',
      description: 'A collection of Myanmar proverbs, Adages, Quotes ',
      category: 'App Development',
      tags: ['Flutter', 'Bloc','Http','Drift'],
      mainImage:require('../assets/projects/mmproverb.png'),
      webSite: 'https://play.google.com/store/apps/details?id=yehtun.com.mmproverb.mmproverb',
      images: [
        '/path/to/main/mobile-app-main.jpg',
        '/path/to/secondary/mobile-app-1.jpg',
        '/path/to/secondary/mobile-app-2.jpg'
      ],
      time: 'Jul 2022 - Nov 2022',
      company: 'Freelance'
    },
    {
      id: 12,
      title: 'Learn Thai - Sentenece App',
      description: 'Thai learning app in difference language, localizations, sentences, conversation and vocabularies.',
      category: 'App Development',
      tags: ['Flutter', 'Provider','Sharepreferences'],
      mainImage:require('../assets/projects/mmpv.png'),
      webSite: 'https://play.google.com/store/apps/details?id=yehtun.com.quick_learn_th',
      images: [
        '/path/to/main/mobile-app-main.jpg',
        '/path/to/secondary/mobile-app-1.jpg',
        '/path/to/secondary/mobile-app-2.jpg'
      ],
      time: 'Jul 2022 - Nov 2022',
      company: 'Freelance'
    },
    {
      id: 14,
      title: 'Picture Dictionary App',
      description: 'A sample picture dictionary, with playable game, and quiz for childrens',
      category: 'App Development',
      tags: ['Flutter', 'Firebase'],
      mainImage:require('../assets/projects/mmpicture.png'),
      webSite:'https://play.google.com/store/apps/details?id=yehtun.com.mmpicture',
      images: [
        '/path/to/main/mobile-app-main.jpg',
        '/path/to/secondary/mobile-app-1.jpg',
        '/path/to/secondary/mobile-app-2.jpg'
      ],
      time: 'Jul 2022 - Nov 2022',
      company: 'Freelance'
    },
    // Add more projects as needed
  ];
  
  export default projectsData;
  