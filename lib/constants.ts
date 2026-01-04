export interface EventItem {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
}

export const events: EventItem[] = [
  {
    title: "React Summit 2026",
    image: "/images/event1.png",
    slug: "react-summit-2026",
    location: "Amsterdam, Netherlands",
    date: "June 14-16, 2026",
    time: "9:00 AM - 6:00 PM CEST",
  },
  {
    title: "AI & Machine Learning Expo",
    image: "/images/event2.png",
    slug: "ai-ml-expo-2026",
    location: "San Francisco, CA",
    date: "March 20-22, 2026",
    time: "10:00 AM - 7:00 PM PST",
  },
  {
    title: "Global DevOps Conference",
    image: "/images/event3.png",
    slug: "global-devops-conf-2026",
    location: "London, United Kingdom",
    date: "April 5-7, 2026",
    time: "9:30 AM - 5:30 PM GMT",
  },
  {
    title: "Web3 Hackathon 2026",
    image: "/images/event4.png",
    slug: "web3-hackathon-2026",
    location: "Austin, TX",
    date: "May 10-12, 2026",
    time: "8:00 AM - 10:00 PM CST",
  },
  {
    title: "Mobile Dev Summit",
    image: "/images/event5.png",
    slug: "mobile-dev-summit-2026",
    location: "Singapore",
    date: "July 18-20, 2026",
    time: "9:00 AM - 6:00 PM SGT",
  },
  {
    title: "Cybersecurity Tech Week",
    image: "/images/event6.png",
    slug: "cybersecurity-tech-week-2026",
    location: "Berlin, Germany",
    date: "September 25-29, 2026",
    time: "8:30 AM - 6:30 PM CEST",
  },
];
