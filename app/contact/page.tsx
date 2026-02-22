import Contact from "@/components/layouts/contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Aryan Vishwakarma for automation consulting, AI workflow building, or project inquiries.",
};

export default function ContactPage() {
  return <Contact />;
}