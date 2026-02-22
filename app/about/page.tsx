import React from 'react'
import About from '@/components/layouts/about'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "Aryan Vishwakarma is an Automation Engineer and AI specialist dedicated to helping businesses scale through intelligent workflows.",
};

const about = () => {
  return (
    <div>
      <About />
    </div>
  )
}

export default about