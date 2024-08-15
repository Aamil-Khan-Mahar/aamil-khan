"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Section } from "lucide-react";
import { SelectTrigger } from "@radix-ui/react-select";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+92 333 0228937",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "aamilkhaan7@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Karachi, Pakistan",
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="order-2 xl:w-[54%] xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let's Work Together</h3>
              <p className="text-white/60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                aperiam, assumenda adipisci, omnis accusamus eligendi, nisi
                facilis labore nesciunt error fugiat facere repellendus! Sed ex
                dicta tempore recusandae voluptatum vero.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" placeholder="Firstname" />
                <Input type="text" placeholder="Lastname" />
                <Input type="email" placeholder="Email Address" />
                <Input type="tel" placeholder="Phone Number" />
              </div>
              <div className="flex h-[48px] w-full items-center justify-between rounded-md border border-white/10 bg-primary px-4 text-base text-white/60 placeholder:text-white/10 focus:border-accent outline-none">
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="est">Web Development</SelectItem>
                      <SelectItem value="cst">Data Science</SelectItem>
                      <SelectItem value="mst">Machine Learning</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here"
              />
              <Button size="md" className="max-w-40">
                Send Message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:m-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-xl text-accent">{item.title}</p>
                    <h3 className="text-lg text-white/80">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
