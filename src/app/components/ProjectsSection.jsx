"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Real Estate Web Application",
    description: "Designed and developed a robust Real Estate MERN (MongoDB, Express.js, React.js, Node.js) web application, seamlessly integrating property listings, interactive maps, and user authentication for a user-friendly and feature-rich real estate experience.",
    image: "/images/realestate.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/deepak759/Real-Estate-MERN-Web-Application",
    previewUrl: "https://real-estate-cttt.onrender.com/",
  },
  {
    id: 2,
    title: "E-Commerce Web Application",
    description: "Designed and developed a robust Real Estate E-commerce MERN (MongoDB, Express.js, React.js, Node.js) web application, seamlessly integrating property listings, user authentication, and secure transactions for an immersive and user-friendly online property buying experience.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/deepak759/E-Commerce-Web-Application",
    previewUrl: "https://e-commerce-web-application-six.vercel.app/",
  },
  {
    id: 3,
    title: "Netflix Clone",
    description: "Built a Netflix clone MERN web app with MongoDB, Express.js, React.js, and Node.js. Replicated the UI/UX for an immersive streaming experience. Demonstrated full-stack proficiency in a dynamic portfolio showcase.",
    image: "/images/projects/netflix.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/deepak759/Netflix-Clone",
    previewUrl: "https://lively-souffle-96074f.netlify.app/login",
  },
  {
    id: 4,
    title: "Real Time News Web Application",
    description: "Revolutionize your news experience with my real-time news web application, delivering up-to-the-minute updates on global events. Stay informed, engaged, and ahead of the curve with this dynamic and user-friendly platform for the modern news consumer.",
    image: "/images/projects/news.png",
    tag: ["All", "web"],
    gitUrl: "https://github.com/deepak759/Daily-News",
    previewUrl: "https://github.com/deepak759/Daily-News#readme",
  },
  {
    id: 5,
    title: "Crypto Selling UI Design",
    description: "Elevate your digital presence with a cutting-edge crypto selling web page design that seamlessly integrates user-friendly interfaces and visually stunning elements. Our project transforms complexity into simplicity, offering a streamlined platform for effortless cryptocurrency transactions",
    image: "/images/projects/crypto.png",
    tag: ["All", "Web","UI Design"],
    gitUrl: "https://github.com/deepak759/Crypto-selling-UI",
    previewUrl: "https://crypto-selling-ui.netlify.app/",
  },
  {
    id: 6,
    title: "Personal Portfolio",
    description: "Elevate your online presence with my personal portfolio web app, showcasing a dynamic display of my skills, projects, and achievements. Seamlessly designed for a captivating user experience, this platform reflects my professional journey and expertise in a visually stunning and interactive format.",
    image: "/images/projects/port.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/deepak759/personal-portfolio",
    previewUrl: "https://personal-portfolio-psi-ten.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="UI Design"
          isSelected={tag === "UI Design"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
