import { MdOutlineBusinessCenter, MdOutlineSchool } from "react-icons/md";
import { FaAward } from "react-icons/fa";

module.exports = [
  {
    id: 1,
    title: "Education",
    icon: <MdOutlineBusinessCenter />,
    items: [
      {
        id: 1,
        date: "2022",
        title: "Software Engineer Certificate ",
        place: "Hack Reactor",
        bg: "#FFF4F4",
      },

      {
        id: 2,
        date: "2009-2011",
        title: "Master of Music, Violin Performance",
        place: "New York University",
        bg: "#FFF1FB",
      },

      {
        id: 3,
        date: "2005-2009",
        title: "Bachelor of Music, Violin Performance ",
        place: "University Of Texas at Austin",
        bg: "#FFF4F4",
      },
    ],
  },
  {
    id: 2,
    title: "Experience",
    icon: <MdOutlineSchool />,
    items: [
      {
        id: 1,
        date: "2022-Current",
        title: "Full-Stack Software Engineer",
        place: "Self-Employed",
        bg: "#EEF5FA",
      },
      {
        id: 2,
        date: "2011-Current",
        title: "Freelance Violinist",
        place: "DFW",
        bg: "#F2F4FF",
      },
      {
        id: 3,
        date: "2016-Current",
        title: "Section Violin",
        place: "East Texas Symphony",
        bg: "#F2F4FF",
      },

      {
        id: 4,
        date: "2013-Current",
        title: "Section Violin",
        place: "Abilene Philharmonic",
        bg: "#EEF5FA",
      },
    ],
  },
  {
    id: 3,
    title: "Awards",
    icon: <FaAward />,
    items: [
      {
        id: 1,
        date: "2015-2017",
        title: "  Graphic Designer",
        place: "Web Graphy, Los Angeles, CA",
        bg: "#FCF4FF",
      },

      {
        id: 2,
        date: "2014 - 2015",
        title: "Jr. Web Developer",
        place: "Creative Gigs.",
        bg: "#FCF9F2",
      },

      {
        id: 3,
        date: "2015-2017",
        title: "Best Freelancer",
        place: "Fiver & Upwork Level 2 & Top Rated",
        bg: "#FCF4FF",
      },
    ],
  },
];
