"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent = [
  {
    title: "Discover Your Sound with Us: A Personal Journey in Music Mastery",
    description:
      "Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.",
  },
  {
    title: "Live Feedback & Engagement",
    description:
      "Immerse yourself in an interactive learning experience where feedback is immediate, just like real-time changes in a collaborative project. This approach enhances your understanding and mastery of music concepts and performance techniques.",
  },
  {
    title: "Cutting-Edge Curriculum",
    description:
      "Our curriculum is continuously updated to include the latest music education trends and technologies, ensuring you’re always learning with the most current and effective methods. Say goodbye to outdated materials and welcome an education that evolves with the industry.",
  },
  {
    title: "Limitless Learning Opportunities",
    description:
      "With our expansive resource library and dynamic course offerings, you’ll never find yourself without something new to explore. Our platform provides continuous opportunities for growth, ensuring your musical skills are always advancing.",
  },
  {
    title: "World-Class Instructors",
    description:
      "Learn from renowned musicians, performers, and producers who bring global experience and industry insights into every lesson.",
  },
  {
    title: "Hands-On Studio Training",
    description:
      "Get access to professional recording studios and learn mixing, mastering, and production on industry-standard equipment.",
  },
  {
    title: "Global Student Community",
    description:
      "Collaborate with fellow learners worldwide. Join jam sessions, virtual concerts, and cross-cultural projects that expand your horizons.",
  },
  {
    title: "Performance Showcases",
    description:
      "Step into the spotlight through recitals, concerts, and online streaming events designed to build your confidence and stage presence.",
  },
  {
    title: "Personalized Learning Path",
    description:
      "Whether you’re a beginner or advanced, our adaptive pathways ensure that your training always matches your skill level and goals.",
  },
  {
    title: "Certification & Career Support",
    description:
      "Earn internationally recognized certificates and get guidance for auditions, competitions, and building a music career.",
  },
];

function WhyChooseUs() {
  return (
    <div>
        <StickyScroll content={musicSchoolContent}></StickyScroll>
    </div>
  )
}

export default WhyChooseUs