import image from "../assets/images/sec.jpeg";
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
