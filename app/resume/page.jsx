"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";

const about = {
  title: "About Me",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod doloribus eum eius, perspiciatis fuga nihil est ipsum dolorum earum voluptatum omnis tempora reiciendis? Eum quae doloribus sint itaque debitis placeat?",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Aamil Khan",
    },
    {
      fieldName: "Email",
      fieldValue: "aamilkhaan7@gmail.com",
    },
    {
      fieldName: "Phone",
      fieldValue: "+92 333 0228937",
    },
    {
      fieldName: "Location",
      fieldValue: "Karachi, Pakistan",
    },
    {
      fieldName: "Education",
      fieldValue: "BSc. Computer Science",
    },
    {
      fieldName: "Experience",
      fieldValue: "2 Years",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Urdu",
    },
  ],
};

const expericence = {
  icon: "assets/resume/badge.svg",
  title: "My Experience",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quos ipsum eligendi laudantium mollitia officiis doloribus asperiores error impedit libero officia, et assumenda magni minima velit vitae quidem minus. Sequi.",
  items: [
    {
      company: "Google",
      position: "Software Engineer",
      duration: "2020 - 2021",
    },
    {
      company: "Facebook",
      position: "Frontend Developer",
      duration: "2019 - 2020",
    },
    {
      company: "Amazon",
      position: "Backend Developer",
      duration: "2018 - 2019",
    },
    {
      company: "Microsoft",
      position: "Full Stack Developer",
      duration: "2017 - 2018",
    },
    {
      company: "Apple",
      position: "UI/UX Designer",
      duration: "2016 - 2017",
    },
    {
      company: "Netflix",
      position: "Data Scientist",
      duration: "2015 - 2016",
    },
    {
      company: "Tesla",
      position: "Machine Learning Engineer",
      duration: "2014-2015",
    },
  ],
};

const education = {
  icon: "assets/resume/cap.svg",
  title: "My Education",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quos ipsum eligendi laudantium mollitia officiis doloribus asperiores error impedit libero officia, et assumenda magni minima velit vitae quidem minus. Sequi.",
  items: [
    {
      institution: "University of Karachi",
      degree: "Bachelors in Computer Science",
      duration: "2018 - 2022",
    },
    {
      institution: "Govt. Degree Science & Commerce College",
      degree: "Intermediate in Computer Science",
      duration: "2016 - 2018",
    },
    {
      institution: "The City School",
      degree: "Matriculation in Science",
      duration: "2014 - 2016",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod doloribus eum eius, perspiciatis fuga nihil est ipsum dolorum earum voluptatum omnis tempora reiciendis? Eum quae doloribus sint itaque debitis placeat?",
  skillList: [
    {
      icon: <FaHtml5 />,
      title: "HTML5",
    },
    {
      icon: <FaCss3 />,
      title: "CSS3",
    },
    {
      icon: <SiTailwindcss />,
      title: "Tailwind CSS",
    },
    {
      icon: <FaJs />,
      title: "JavaScript",
    },
    {
      icon: <FaReact />,
      title: "React.js",
    },
    {
      icon: <FaNodeJs />,
      title: "Node.js",
    },
    {
      icon: <SiMongodb />,
      title: "MongoDB",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{expericence.title}</h3>
                <p className="max-w-[600px] mx-auto text-white/60 xl:mx-0">
                  {expericence.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {expericence.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Education */}
            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] mx-auto text-white/60 xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-[10px]">
                  {skills.skillList.map((skill, index) => {
                    return <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>

                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.title}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>;
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* About Me */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px] pb-10">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
              </div>
              <ul className="grid grid-cols-1 xl:grid-cols-2 gap-6 max-w-[620px] mx-auto xl:mx-0">
                {about.info.map((item, index) => {
                  return (
                    <li key={index} className="w-full h-[150px] bg-[#232329] rounded-xl flex flex-col justify-center items-center group gap-4">
                      <span className="text-xl text-accent underline underline-offset-8 group-hover:underline">{item.fieldName}</span>
                      <span className="text-white group-hover:text-accent duration-300 text-xl">{item.fieldValue}</span>
                    </li>
                  );
                })}
              </ul>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
