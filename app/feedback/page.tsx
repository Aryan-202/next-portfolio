import FeedbackSection from '@/components/layouts/feedback'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Feedback",
  description: "Read what clients say about Aryan Vishwakarma's automation solutions and AI workflow engineering.",
};

const FeedbackPage = () => {
  return (
    <FeedbackSection />
  )
}

export default FeedbackPage;
