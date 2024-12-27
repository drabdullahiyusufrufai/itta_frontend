import image from "../assets/images/blog.jpeg";
import thumbnail from "../assets/images/avatar.png";

const courseCategories = [
  {
    id: 1,
    name: "Technology",
    subcategories: [
      {
        id: 101,
        name: "Machine Learning",
        description:
          "Learn algorithms and models to enable systems to learn from data.",
        image: image,
      },
      {
        id: 102,
        name: "Artificial Intelligence",
        description:
          "Explore the creation of intelligent machines simulating human thinking.",
        image: image,
      },
      {
        id: 103,
        name: "Software Development",
        description:
          "Master the art of designing, coding, and maintaining software.",
        image: image,
      },
      {
        id: 104,
        name: "Cybersecurity",
        description: "Protect systems and networks from digital attacks.",
        image: image,
      },
    ],
  },
  {
    id: 2,
    name: "Programming",
    subcategories: [
      {
        id: 201,
        name: "Web Development",
        description:
          "Build interactive and responsive websites using modern frameworks.",
        image: image,
      },
      {
        id: 202,
        name: "Mobile Development",
        description: "Create cutting-edge apps for Android and iOS devices.",
        image: image,
      },
      {
        id: 203,
        name: "Game Development",
        description:
          "Design and develop engaging games across various platforms.",
        image: image,
      },
      {
        id: 204,
        name: "DevOps",
        description:
          "Learn to integrate development and operations for faster delivery.",
        image: image,
      },
    ],
  },
  {
    id: 3,
    name: "Data Science",
    subcategories: [
      {
        id: 301,
        name: "Data Analysis",
        description:
          "Analyze and interpret complex datasets to drive decision-making.",
        image: image,
      },
      {
        id: 302,
        name: "Big Data",
        description:
          "Handle massive data sets and unlock insights using advanced tools.",
        image: image,
      },
      {
        id: 303,
        name: "Data Visualization",
        description:
          "Turn data into compelling visual narratives and dashboards.",
        image: image,
      },
      {
        id: 304,
        name: "Machine Learning for Data Science",
        description:
          "Apply machine learning techniques to data science projects.",
        image: image,
      },
    ],
  },
  {
    id: 4,
    name: "Design",
    subcategories: [
      {
        id: 401,
        name: "Graphic Design",
        description:
          "Learn to create stunning visuals using industry-standard tools.",
        image: image,
      },
      {
        id: 402,
        name: "UI/UX Design",
        description:
          "Design user-friendly interfaces with a focus on user experience.",
        image: image,
      },
      {
        id: 403,
        name: "Motion Design",
        description:
          "Add life to your designs with captivating animations and effects.",
        image: image,
      },
      {
        id: 404,
        name: "3D Design",
        description:
          "Master the art of creating realistic 3D models and environments.",
        image: image,
      },
    ],
  },
  {
    id: 5,
    name: "Business",
    subcategories: [
      {
        id: 501,
        name: "Entrepreneurship",
        description:
          "Develop skills to start and manage your own successful business.",
        image: image,
      },
      {
        id: 502,
        name: "Marketing",
        description:
          "Master strategies to promote products and engage customers effectively.",
        image: image,
      },
      {
        id: 503,
        name: "Finance",
        description:
          "Learn how to manage and grow wealth through smart financial practices.",
        image: image,
      },
      {
        id: 504,
        name: "Leadership",
        description:
          "Develop essential leadership skills to inspire and guide teams.",
        image: image,
      },
    ],
  },
];

export default courseCategories;




export const data = {
  courses: [
    {
      courseId: "AI101",
      courseName: "Introduction to Artificial Intelligence",
      description: "A beginner-level course that introduces the fundamentals of Artificial Intelligence, its history, and real-world applications.",
      durationWeeks: 6,
      difficultyLevel: "Beginner",
      instructor: "Dr. Sarah Connor",
      prerequisites: "None",
      thumbnail: "path/to/ai101_thumbnail.jpg",
      thumbnailAlt: "Introduction to Artificial Intelligence course thumbnail",
      modules: [
        {
          moduleId: "M1",
          title: "What is Artificial Intelligence?",
          description: "Understanding the basics of AI and its significance in modern technology.",
          topics: [
            {
              topicId: "T1",
              title: "Introduction to AI",
              durationHours: 1.5,
              transcript: "Welcome to the world of Artificial Intelligence. In this lesson, we will explore the definition of AI, its core concepts, and its relevance in today's technological landscape. We will also touch on its historical development and major milestones.",
              videos: "path/to/introduction_to_ai_video.mp4",
              readings: ["path/to/intro_to_ai_reading.pdf"]
            },
            {
              topicId: "T2",
              title: "Applications of AI",
              durationHours: 2,
              transcript: "This topic highlights the various applications of AI in diverse fields such as healthcare, finance, transportation, and entertainment. Examples include AI-driven diagnostic tools, autonomous vehicles, and personalized recommendations on streaming platforms.",
              videos: "path/to/applications_of_ai_video.mp4",
              readings: ["path/to/applications_of_ai_reading.pdf"]
            }
          ]
        },
        {
          moduleId: "M2",
          title: "Ethics in AI",
          description: "An overview of ethical considerations and challenges in AI deployment.",
          topics: [
            {
              topicId: "T3",
              title: "Bias in AI",
              durationHours: 1,
              transcript: "Bias in AI systems can result from biased training data or flawed algorithms. This topic discusses real-world examples of AI bias, its implications, and strategies to mitigate it.",
              videos: "path/to/bias_in_ai_video.mp4",
              readings: ["path/to/bias_in_ai_reading.pdf"]
            },
            {
              topicId: "T4",
              title: "AI and Privacy",
              durationHours: 1.5,
              transcript: "As AI systems collect and analyze massive amounts of data, privacy concerns have become critical. In this lesson, we will examine the challenges of data privacy in AI systems and explore best practices to ensure user data protection.",
              videos: "path/to/ai_and_privacy_video.mp4",
              readings: ["path/to/ai_and_privacy_reading.pdf"]
            }
          ]
        }
      ]
    },
    {
      courseId: "ML201",
      courseName: "Machine Learning Essentials",
      description: "A comprehensive course on the fundamental concepts of Machine Learning and its algorithms.",
      durationWeeks: 8,
      difficultyLevel: "Intermediate",
      instructor: "Dr. Alan Turing",
      prerequisites: "Basic knowledge of programming and mathematics",
      thumbnail: "path/to/ml201_thumbnail.jpg",
      thumbnailAlt: "Machine Learning Essentials course thumbnail",
      modules: [
        {
          moduleId: "M3",
          title: "Introduction to Machine Learning",
          description: "A primer on what machine learning is and how it works.",
          topics: [
            {
              topicId: "T5",
              title: "What is Machine Learning?",
              durationHours: 2,
              transcript: "Machine Learning is a subset of AI focused on developing algorithms that allow computers to learn from and make predictions or decisions based on data. This topic introduces the basic principles, types of learning, and common applications.",
              videos: "path/to/what_is_ml_video.mp4",
              readings: ["path/to/what_is_ml_reading.pdf"]
            },
            {
              topicId: "T6",
              title: "Supervised Learning",
              durationHours: 2.5,
              transcript: "Supervised Learning is one of the most common types of machine learning. It involves training a model on labeled data. In this topic, we will discuss examples such as regression and classification, and their real-world use cases.",
              videos: "path/to/supervised_learning_video.mp4",
              readings: ["path/to/supervised_learning_reading.pdf"]
            }
          ]
        },
        {
          moduleId: "M4",
          title: "Advanced Topics in Machine Learning",
          description: "Exploring complex concepts and state-of-the-art algorithms in Machine Learning.",
          topics: [
            {
              topicId: "T7",
              title: "Deep Learning",
              durationHours: 3,
              transcript: "Deep Learning is a specialized branch of machine learning that uses neural networks with many layers to model and analyze complex patterns in data. This topic covers its architecture, applications, and tools like TensorFlow and PyTorch.",
              videos: "path/to/deep_learning_video.mp4",
              readings: ["path/to/deep_learning_reading.pdf"]
            },
            {
              topicId: "T8",
              title: "Reinforcement Learning",
              durationHours: 2.5,
              transcript: "Reinforcement Learning is a paradigm where an agent learns to make decisions by interacting with an environment to maximize cumulative rewards. This topic discusses algorithms like Q-learning and their applications in robotics and gaming.",
              videos: "path/to/reinforcement_learning_video.mp4",
              readings: ["path/to/reinforcement_learning_reading.pdf"]
            }
          ]
        }
      ]
    }
  ],
  students: [
    {
      studentId: "S12345",
      name: "John Doe",
      email: "john.doe@example.com",
      profilePicture: "path/to/john_doe_profile.jpg",
      profilePictureAlt: "Profile picture of John Doe",
      courses: [
        {
          courseId: "AI101",
          progress: "50%",
          lastVisitedModule: "M1"
        },
        {
          courseId: "ML201",
          progress: "25%",
          lastVisitedModule: "M3"
        }
      ]
    }
  ]
};




