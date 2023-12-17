"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      
      <ul className="list-disc pl-2">
        <li>React Js</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>C++</li>
        <li>Python</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc my-1 pl-2">
        <li className="font-bold">B.Tech in Computer Science Engineering With 9.0 CGPA</li>
        <li className="list-none ">Guru Gobind Singh Indraprastha University, New Delhi</li>
        <li className="list-none ">2020-2024</li>
        <li className="font-bold">Class 12th With 92.4%</li>
        <li className="list-none ">G.B.S.S. School No.1, Shakti Nagar</li>
        <li className="list-none ">2020</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <a target="_blank" href="https://www.coursera.org/account/accomplishments/certificate/B5YDHXU8WSXR">
            Python Programing
          </a>
        
        </li>
        <li>
        <a target="_blank" href="https://www.coursera.org/account/accomplishments/certificate/XGVG89JE4P72">

        Machine Learning
        </a>
        </li>
        <li>
        <a target="_blank" href="https://drive.google.com/drive/u/0/folders/1RTkagq4yu79OOUwuvg021Y1mLtcfOVqy">

        Android Basics in Kotlin
        </a>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, SQL,
            MongoDb, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
