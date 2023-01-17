import { AiOutlineHome } from "react-icons/ai";
import { FaGalacticRepublic } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { FiCodesandbox } from "react-icons/fi";
import { RiContactsBookLine } from "react-icons/ri";

module.exports = [
  {
    id: 1,
    name: "Home",
    routePath: "/",
    icon: <AiOutlineHome />,
  },
  {
    id: 2,
    name: "About Me",
    routePath: "/about",
    icon: <FaGalacticRepublic />,
  },
  {
    id: 3,
    name: "CV",
    routePath: "/resume",
    icon: <CgNotes />,
  },
  {
    id: 4,
    name: "Projects",
    routePath: "/works",
    icon: <FiCodesandbox />,
  },
  {
    id: 5,
    name: "Contact",
    routePath: "/contact",
    icon: <RiContactsBookLine />,
  },
];
