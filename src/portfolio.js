/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import skillSvg from "./assets/images/skill.svg";

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Umar Azam",
  title: "Hi all, I'm Umar",
  subTitle: emoji(
    "I build scalable web and mobile platforms with AI-driven features, modern cloud-ready architectures, and high-performance full-stack solutions—focused on automation, system optimization, and solving complex business problems."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1W58uyHN-sP-aCknk0o_81maNpN45XEoy/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/UmarAzam21/",
  linkedin: "https://pk.linkedin.com/in/muhammad-umar-588679309/",
  gmail: "uazam3033@gmail.com",
  gitlab: "https://gitlab.com/umarAzam",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Build full-stack apps with React, Next.js, Python (FastAPI), Node.js, and PostgreSQL"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Develop REST APIs, role-based systems, and backend services  "
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },

    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "fastapi",
      fontAwesomeClassname: "fas fa-bolt"
    },
    {
      skillName: "postgresql",
      fontAwesomeClassname: "fas fa-database"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "GCS University",
      logo: require("./assets/images/images.jpg"),
      subHeader: "Intermediate of Science in Computer Science",
      duration: "September 2023 - April 2025",

    },
    // {
    //   schoolName: "Stanford University",
    //   logo: require("./assets/images/stanfordLogo.png"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2013 - April 2017",
    //   desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",
      description: "React, Next.js, HTML, CSS, JavaScript, Responsive Design",
      progressPercentage: "90%",
      icon: "fas fa-pen-nib"
    },
    {
      Stack: "Backend",
      description: "Node.js, FastAPI, Python, REST APIs, Database Design",
      progressPercentage: "70%",
      icon: "fas fa-server"
    },
    {
      Stack: "Programming",
      description: "JavaScript, Python, Problem Solving, Data Structures",
      progressPercentage: "60%",
      icon: "fas fa-code"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Engineer",
      company: "Grootcore Systems",
      companylogo: require("./assets/images/icon.png"),
      date: "April 2025 – November 2025",
      desc: "Developed dynamic full-stack web applications using React.js and Node.js",
      descBullets: [
        "Implemented responsive UI components using React.js",
        "Developed RESTful APIs with Node.js and Express.js"
      ]
    },
    {
      role: "Backend Developer",
      company: "Liztek",
      companylogo: require("./assets/images/liztek.jpg"),
      date: "December 2025 – February 2026",
      desc: "Scalable backend services and RESTful endpoints for the GRC platform, while creating backend scripts to automate and support critical operations. Collaborate with cross-functional teams to integrate APIs, implement end-to-end features, and ensure performance, security."
    },
    {
      role: "Full Stack Developer ",
      company: "Compile Vision",
      companylogo: require("./assets/images/compile-vision.png"),
      date: "Jan 2055 – Present",
      desc: "Design and develop end-to-end web applications by delivering secure backend services and intuitiveuserinterfaces. Work closely with product and compliance teams to build scalable features, integrate APIs, andensure performance, security, and reliability across the full technology stack"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "INNOVATIVE SOLUTIONS I'VE ARCHITECTED FOR ENTERPRISE-SCALE BUSINESS CHALLENGES",
  projects: [
    {
      image: skillSvg,
      projectName: "GRC",
      projectDesc: "A comprehensive enterprise-grade Governance, Risk, and Compliance (GRC) platform engineered to provide organizations with advanced analytics, policy management, regulatory compliance tracking, and automated risk assessment frameworks. This sophisticated solution streamlines compliance workflows, maintains complete audit trails, and enables data-driven decision-making to minimize operational risks and ensure adherence to global regulatory standards.",
      footerLink: []
    },
    {
      image: skillSvg,
      projectName: "CustomLearn",
      projectDesc: "A robust and scalable online education platform featuring integrated real-time video conferencing capabilities, live chat support infrastructure, student collaboration tools, and secure payment gateway integration. This comprehensive learning management system is architected to deliver seamless educational experiences with advanced communication features, monetization capabilities, and student engagement metrics for modern digital learning ecosystems.",
      footerLink: []
    },
    {
      image: skillSvg,
      projectName: "Cartoon Gen",
      projectDesc: "An advanced artificial intelligence-powered content generation platform specialized in creating high-quality animated assets and artistic illustrations. This innovative solution leverages machine learning algorithms to generate custom cartoon animations, 3D renderings, 2D illustrations, and Ghibli-inspired sketching styles. Designed for content creators, educational institutions, and design professionals requiring rapid prototyping of visual assets with exceptional artistic quality.",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Testimonials Section

const testimonialSection = {
  title: emoji("Testimonials ⭐"),
  subtitle: "WHAT OTHERS SAY ABOUT WORKING WITH ME",

  testimonials: [
    {
      name: "Syed Ali Mehdi Naqvi",
      position: "CEO at Clarity Cosmos",
      text: "It was a pleasure working with Muhammad Umar. He not only delivers high-quality builds but truly understands the speed-with-excellence mindset required in a startup environment. What consistently stood out was his ability to bring meaningful value beyond execution.",
      image: require("./assets/images/aliReview.png")
    },
    {
      name: "Abdullah Ahmad",
      position: "CTO at Stikwood Interior",
      text: "Highly professional and reliable. Umar delivered high-quality code on time and was always willing to go the extra mile.",
      image: require("./assets/images/abdullah.png")
    },
    {
      name: "Faizan Munsaf",
      position: "CEO at Compile Vision",
      text: "Impressive problem-solving skills and great communication. A pleasure to work with and recommend to anyone.",
      image: require("./assets/images/faizan munsaf.jpg")
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3278559234",
  email_address: "uazam3033@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  testimonialSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};

