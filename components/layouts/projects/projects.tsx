"use client";

import { motion } from "motion/react";
import { projects } from "@/data/projects";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Star } from "lucide-react";
import ProjectCard from "./project-card";

const Projects = () => {
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">My Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent works that showcase my skills and experience
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center justify-center gap-2 mb-8">
            <Star className="w-5 h-5 text-yellow-500 fill-current" />
            <h3 className="text-2xl font-semibold text-center">Featured Projects</h3>
            <Star className="w-5 h-5 text-yellow-500 fill-current" />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} featured />
            ))}
          </div>
        </motion.div>

        
      </div>
    </section>
  );
};

export default Projects;