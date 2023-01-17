const Tag = () => {
  const tagList = [
    "JavaScript",
    "Python",
    "React",
    "Redux",
    "Node.JS",
    "Next.JS",
    "Express",
    "Django",
    "FastAPI",
    "RabbitMQ",
    "SQL",
    "MongoDB",
    "PostgreSQL",
    "Docker",
    "JSON Web Token",
    "Agile Software Development",
    "Git",
    "Microservices",
    "Monoliths",
    "HTML5",
    "Bootstrap",
    "Tailwind",
    "Material UI",
  ];
  return (
    <>
      {tagList.map((tag, i) => (
        <button className="resume-btn text-[15px]" key={i}>
          {tag}
        </button>
      ))}
    </>
  );
};

export default Tag;
