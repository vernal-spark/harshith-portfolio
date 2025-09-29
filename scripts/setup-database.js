// MongoDB setup script
// Run this script to populate your MongoDB Atlas database with sample data
// Make sure to update the connection string with your actual password

const { MongoClient } = require("mongodb");

// Update this with your actual MongoDB connection string
const MONGODB_URI = process.env.MONGODB_URI;

// Sample data based on your current constants
const sampleExperiences = [
  {
    title: "Software Development Intern",
    company: "Rattle Software Pvt Ltd",
    duration: "Feb 2024 - Present",
    location: "Bengaluru, Karnataka, India",
    icon: "/assets/rattle.svg",
    description: [
      "Collaborated with the adoption team to develop scalable feature requests.",
      "Worked on a sandbox version of the Rattle app, owning the frontend.",
      "Created a new homepage for the sandbox version of the app.",
    ],
    alias: "Rattle",
  },
  {
    title: "Frontend Developer Intern",
    company: "Menubook",
    duration: "Jun 2023 - Sept 2023",
    location: "Remote, India",
    icon: "/assets/menubook.jpeg",
    description: [
      "Developed scalable mobile apps using JavaScript, React Native, and Redux.",
      "Contributed to the admin side for efficient app management.",
    ],
    alias: "Menubook",
  },
  {
    title: "Java Developer Intern",
    company: "Brane Enterprises Pvt Ltd",
    duration: "Oct 2022 - Dec 2022",
    location: "Bengaluru, Karnataka, India",
    icon: "/assets/brane.svg",
    description: [
      "Developed microservices with Spring Boot, MongoDB, Redis, and Kafka.",
      "Enhanced data access operation performance using Redis for caching.",
    ],
    alias: "Brane",
  },
  {
    title: "Full Stack Developer Trainee",
    company: "Crio.Do",
    duration: "Jun 2022 - Mar 2023",
    location: "Remote, India",
    icon: "/assets/crio.svg",
    description: [
      "Completed Full Stack Program, gaining MERN stack proficiency.",
      "Developed an e-commerce platform with authentication features.",
      "Built a video curator platform with search and bookmarking.",
    ],
    alias: "Crio",
  },
];

const sampleProjects = [
  {
    name: "QKart",
    description:
      "A full-stack e-commerce platform built with React and Node.js",
    image: "/assets/qkart.png",
    url: "https://github.com/harshith/qkart",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    name: "QTrip",
    description:
      "A travel booking application with dynamic pricing and user management",
    image: "/assets/qtrip.png",
    url: "https://github.com/harshith/qtrip",
    technologies: ["React", "JavaScript", "CSS", "HTML"],
  },
  {
    name: "XFlix",
    description:
      "A video streaming platform with user authentication and content management",
    image: "/assets/xflix.png",
    url: "https://github.com/harshith/xflix",
    technologies: ["React", "Node.js", "MongoDB", "JWT"],
  },
];

const sampleTechnologies = [
  { name: "React", icon: "/assets/tech/react.svg" },
  { name: "TypeScript", icon: "/assets/tech/typescript.svg" },
  { name: "Node.js", icon: "/assets/tech/node-js.svg" },
  { name: "Next.js", icon: "/assets/tech/react.svg" },
  { name: "MongoDB", icon: "/assets/tech/mongo.svg" },
  { name: "Express", icon: "/assets/tech/express.svg" },
  { name: "Tailwind CSS", icon: "/assets/tech/tailwind.svg" },
  { name: "JavaScript", icon: "/assets/tech/javascript.svg" },
  { name: "HTML", icon: "/assets/tech/html.svg" },
  { name: "CSS", icon: "/assets/tech/css.svg" },
];

const sampleSocialLinks = [
  {
    name: "GitHub",
    icon: "/assets/social/github.svg",
    link: "https://github.com/harshith",
  },
  {
    name: "LinkedIn",
    icon: "/assets/social/linkedIn.svg",
    link: "https://linkedin.com/in/harshith",
  },
  {
    name: "Email",
    icon: "/assets/social/email.svg",
    link: "mailto:harshith@example.com",
  },
  {
    name: "Instagram",
    icon: "/assets/social/insta.svg",
    link: "https://instagram.com/harshith",
  },
];

async function setupDatabase() {
  console.log(MONGODB_URI);
  const client = new MongoClient(MONGODB_URI);

  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas");

    const db = client.db("portfolio");

    // Clear existing collections
    await db.collection("experiences").deleteMany({});
    await db.collection("projects").deleteMany({});
    await db.collection("technologies").deleteMany({});
    await db.collection("socialLinks").deleteMany({});

    // Insert sample data
    await db.collection("experiences").insertMany(sampleExperiences);
    await db.collection("projects").insertMany(sampleProjects);
    await db.collection("technologies").insertMany(sampleTechnologies);
    await db.collection("socialLinks").insertMany(sampleSocialLinks);

    console.log("Database setup completed successfully!");
    console.log(
      "Collections created: experiences, projects, technologies, socialLinks"
    );
  } catch (error) {
    console.error("Error setting up database:", error);
  } finally {
    await client.close();
  }
}

// Run the setup
setupDatabase();
