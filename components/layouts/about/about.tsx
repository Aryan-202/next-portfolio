"use client";

import { motion } from "motion/react";
import { PROFILE_INFO } from "@/data";
import { Card } from "@/components/ui/card";
import {
  MapPin,
  Calendar,
  Award,
  Phone,
  GraduationCap,
} from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 scroll-animate">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building reliable automation systems that save time, reduce cost, and increase revenue.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - My Journey */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Card className="p-6 lg:p-8 h-full">
              <h3 className="text-2xl font-semibold mb-6">What I Do</h3>

              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  I help businesses grow, automate, and innovate through a full suite of digital services.
                </p>

                <div>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    My 6 services:
                  </p>
                  <ul className="text-muted-foreground leading-relaxed list-disc pl-5 space-y-1">
                    <li>AI Automation — workflows, lead gen & CRM</li>
                    <li>Mobile App Development — iOS & Android apps</li>
                    <li>Website Development — fast, modern websites</li>
                    <li>Custom Software — tailored business solutions</li>
                    <li>Data Handling — scraping, pipelines & analytics</li>
                    <li>IT Support — reliable tech support & maintenance</li>
                  </ul>
                </div>

                <div className="pt-2">
                  <p className="text-muted-foreground leading-relaxed font-medium">
                    The goal is simple:
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Save time. Reduce cost. Increase revenue.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Right Column - Personal Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Card className="p-6 lg:p-8 h-full">
              <h4 className="text-2xl font-semibold mb-6">Personal Details</h4>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium text-lg">
                      {PROFILE_INFO.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Experience</p>
                    <p className="font-medium text-lg">2+ Years</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Specialization
                    </p>
                    <p className="font-medium text-lg">
                      Automation & Integration
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Education</p>
                    <p className="font-medium text-lg">
                      B.Tech in Computer Science
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Availability
                    </p>
                    <p className="font-medium text-lg">
                      Open for Opportunities
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;