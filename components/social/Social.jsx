import {
  // FaDribbble,
  // FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaGitlab,
  FaGithub,
  GoLogoGi
  // FaTwitter,
} from "react-icons/fa";

const Social = () => {
  const socialContent = [
    {
      id: 1,
      link: "https://www.instagram.com/yorkphoenix/",
      icon: <FaInstagram />,
      iconClass: "text-[#1773EA]",
    },
    {
      id: 2,
      link: "https://gitlab.com/york.p.shaw",
      icon: <FaGitlab />,
      iconClass: "text-[#1C9CEA]",
    },
    {
      id: 3,
      link: "https://github.com/yorkpshaw",
      icon: <FaGithub />,
      iconClass: "text-[#e14a84]",
    },
    {
      id: 4,
      link: "https://www.linkedin.com/in/york-shaw/",
      icon: <FaLinkedinIn />,
      iconClass: "text-[#0072b1]",
    },
  ];

  return (
    <>
      {socialContent.map((item) => (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          key={item.id}
        >
          <span className={`socialbtn ${item.iconClass}`}>{item.icon}</span>
        </a>
      ))}
    </>
  );
};

export default Social;
