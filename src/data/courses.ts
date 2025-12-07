export interface Course {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  overview: string;
  image: string;
  features: {
    title: string;
    description: string;
  }[];
  benefits: {
    title: string;
    description: string;
  }[];
  structure?: {
    items: string[];
    subjects?: string[];
    academyBenefits?: string[];
  };
  whyChooseUs?: {
    title: string;
    description: string;
  }[];
}

export const courses: Course[] = [
  {
    id: 1,
    slug: 'foundation-course',
    title: 'IIT Medical foundation course for 8th, 9th, and 10th grade students',
    subtitle: 'Course Overview',
    overview: 'A foundation course is designed to build a strong academic base for students. It covers core subjects like Math, Physics, Chemistry Biology, English, Marathi and Social Studies. We specialize in building rock-solid foundations in science and mathematics, empowering students to master the JEE and NEET with analytical thinking and conceptual strength. NMMS, NTS, Scholarship, Olympiads Maths and Science, Homi Bhabha young Scientist, District level Maths Science and Quiz competition etc.',
    image: '/assets/images/single-meeting.jpg',
    features: [],
    benefits: [
      {
        title: 'Improves understanding of concepts',
        description: '',
      },
      {
        title: 'Enhances problem-solving skills',
        description: '',
      },
      {
        title: 'Boosts confidence',
        description: '',
      },
      {
        title: 'Prepares students for board exams and competitive exams',
        description: '',
      },
      {
        title: 'Personality development',
        description: '',
      },
      {
        title: 'Project Presentation',
        description: '',
      },
      {
        title: 'Science Exhibition',
        description: '',
      },
    ],
    structure: {
      items: [
        'Interactive classes',
        'Regular assessments',
        'Personalized attention',
        'Doubt-clearing sessions',
      ],
      subjects: [
        'Marathi',
        'Physics, Chemistry Biology',
        'English',
        'Social Studies',
        'Mathematics',
      ],
      academyBenefits: [
        'Experienced faculty',
        'Small batch sizes',
        'Regular progress tracking',
        'Supportive learning environment',
      ],
    },
  },
  {
    id: 2,
    slug: 'science-stream',
    title: 'Science Stream Coaching for 11th and 12th Grade',
    subtitle: 'Course Overview',
    overview: 'Join our academy for comprehensive preparation for Maharashtra Board exams in classes 11th and 12th. Our experienced faculty and structured curriculum will help students achieve excellent grades and build a strong foundation for future success.',
    image: '/assets/images/single-meeting.jpg',
    features: [
      {
        title: 'Expert Faculty',
        description: 'Learn from experienced teachers familiar with the Maharashtra Board curriculum.',
      },
      {
        title: 'Comprehensive Study Materials',
        description: 'Our study materials cover all aspects of the syllabus, ensuring students are well-prepared for exams.',
      },
      {
        title: 'Regular Assessments',
        description: 'Track progress and identify areas for improvement with our regular assessments.',
      },
      {
        title: 'Doubt-Clearing Sessions',
        description: 'Get clarity on complex topics with our doubt-clearing sessions.',
      },
    ],
    benefits: [
      {
        title: 'Excellent Grades',
        description: 'Achieve outstanding grades in Maharashtra Board exams with our expert guidance.',
      },
      {
        title: 'Strong Foundation',
        description: 'Build a solid foundation in core subjects, setting the stage for future academic success.',
      },
      {
        title: 'Better Preparation',
        description: 'Prepare students for board exams and competitive exams, ensuring they\'re well-equipped for future challenges.',
      },
    ],
    whyChooseUs: [
      {
        title: 'Proven Track Record',
        description: 'Our students have consistently achieved excellent grades in Maharashtra Board exams.',
      },
      {
        title: 'Personalized Attention',
        description: 'Our small batch sizes ensure each student receives personalized attention and support.',
      },
    ],
  },
  {
    id: 3,
    slug: 'jee-preparation',
    title: 'JEE Mains and Advanced Preparation',
    subtitle: 'Course Overview',
    overview: 'Comprehensive coaching program designed to help students crack JEE Mains and Advanced with top ranks. Our structured approach, experienced faculty, and rigorous practice sessions ensure students are fully prepared for these competitive exams.',
    image: '/assets/images/single-meeting.jpg',
    features: [
      {
        title: 'IIT Alumni Faculty',
        description: 'Learn from experienced IIT alumni who understand the exam pattern inside out.',
      },
      {
        title: 'Comprehensive Study Material',
        description: 'Complete coverage of JEE syllabus with additional practice problems.',
      },
      {
        title: 'Regular Mock Tests',
        description: 'Weekly mock tests simulating actual JEE exam conditions.',
      },
      {
        title: 'Doubt Resolution',
        description: 'Dedicated doubt-clearing sessions to ensure no concept is left unclear.',
      },
    ],
    benefits: [
      {
        title: 'Top Rankings',
        description: 'Our students consistently achieve top ranks in JEE Mains and Advanced.',
      },
      {
        title: 'Problem-Solving Skills',
        description: 'Develop advanced problem-solving and analytical thinking abilities.',
      },
      {
        title: 'Exam Strategy',
        description: 'Learn time management and exam strategies to maximize your score.',
      },
    ],
  },
  {
    id: 4,
    slug: 'neet-coaching',
    title: 'NEET Coaching',
    subtitle: 'Course Overview',
    overview: 'Specialized NEET coaching program focusing on Physics, Chemistry, and Biology. Our expert faculty and proven teaching methodology have helped hundreds of students achieve their medical career dreams.',
    image: '/assets/images/meeting-02.jpg',
    features: [
      {
        title: 'Medical Expert Faculty',
        description: 'Learn from experienced medical professionals and subject experts.',
      },
      {
        title: 'Conceptual Learning',
        description: 'Focus on deep conceptual understanding rather than rote learning.',
      },
      {
        title: 'Regular Testing',
        description: 'Frequent tests to track progress and improve weak areas.',
      },
      {
        title: 'Biology Focus',
        description: 'Special emphasis on Biology with detailed theory and practice.',
      },
    ],
    benefits: [
      {
        title: 'Medical College Admission',
        description: 'High success rate in helping students secure seats in top medical colleges.',
      },
      {
        title: 'Strong Biology Foundation',
        description: 'Build a strong foundation in Biology, Chemistry, and Physics.',
      },
      {
        title: 'Career Guidance',
        description: 'Expert guidance on medical career options and college selection.',
      },
    ],
  },
  {
    id: 5,
    slug: 'mht-cet',
    title: 'MHT-CET Preparation',
    subtitle: 'Course Overview',
    overview: 'Complete preparation program for MHT-CET covering Physics, Chemistry, Mathematics, and Biology. Our experienced faculty and Maharashtra Board-aligned curriculum ensure excellent results.',
    image: '/assets/images/meeting-03.jpg',
    features: [
      {
        title: 'Board-Aligned Curriculum',
        description: 'Syllabus aligned with Maharashtra State Board for optimal preparation.',
      },
      {
        title: 'Previous Year Analysis',
        description: 'Detailed analysis of previous year papers and question patterns.',
      },
      {
        title: 'Time Management',
        description: 'Special focus on speed and accuracy for CET exam.',
      },
      {
        title: 'Mock Tests',
        description: 'Regular CET-pattern mock tests for exam readiness.',
      },
    ],
    benefits: [
      {
        title: 'State Engineering Colleges',
        description: 'Help secure admission in top Maharashtra engineering and medical colleges.',
      },
      {
        title: 'Dual Preparation',
        description: 'Prepare for both board exams and MHT-CET simultaneously.',
      },
      {
        title: 'State Quota Advantage',
        description: 'Expert guidance on utilizing Maharashtra state quota effectively.',
      },
    ],
  },
  {
    id: 6,
    slug: 'mht-cet-crash',
    title: 'MHT-CET Crash Course',
    subtitle: 'Course Overview',
    overview: 'Intensive crash course for last-minute MHT-CET preparation. Covers all important topics, formulas, and shortcuts to maximize your score in minimum time.',
    image: '/assets/images/meeting-04.jpg',
    features: [
      {
        title: 'Quick Revision',
        description: 'Fast-paced revision of all important topics and concepts.',
      },
      {
        title: 'Formula Sheets',
        description: 'Comprehensive formula sheets and quick reference guides.',
      },
      {
        title: 'Shortcuts & Tricks',
        description: 'Learn time-saving shortcuts and problem-solving tricks.',
      },
      {
        title: 'Practice Sessions',
        description: 'Intensive practice sessions with previous year questions.',
      },
    ],
    benefits: [
      {
        title: 'Last-Minute Boost',
        description: 'Significant improvement in scores even with limited preparation time.',
      },
      {
        title: 'Focused Preparation',
        description: 'Focus on high-weightage topics for maximum impact.',
      },
      {
        title: 'Exam Confidence',
        description: 'Build confidence through intensive practice and revision.',
      },
    ],
  },
];

