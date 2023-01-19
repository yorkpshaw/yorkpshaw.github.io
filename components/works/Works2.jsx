import Image from "next/image";
import { FiUser, FiCode, FiFilePlus, FiExternalLink } from "react-icons/fi";
import { BsXCircle } from "react-icons/bs";
import Masonry from "react-masonry-css";
import Modal from "react-modal";
import portfolioData from "../../data/worksData";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

Modal.setAppElement("#__next");

const Works2 = () => {
  const breakpointColumnsObj = {
    default: 2,
    1100: 2,
    500: 1,
  };

  // start dynamic portfolio with slug
  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const handlePortfolioData = (id) => {
    const find = portfolioData.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  const handleModle = (id) => {
    handlePortfolioData(id);
  };
  // End dynamic portfolio with slug

  // start filter data based on function
  const [test, setTest] = useState("All");

  const handleSearch = (text) => {
    handleData(text);
    setTest(text);
  };
  useEffect(() => {
    setTest("All");
    handleData("All");
  }, []);

  const [data, setData] = useState(portfolioData);

  // fillter portfilo data
  const handleData = (text) => {
    if (text === "All") {
      setData(portfolioData);
    } else {
      const findData = portfolioData.filter((item) => item.tag === text);
      setData(findData);
    }
  };

  return (
    <>
      {/* Start portfolio items */}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {data.map((item) => (
          <div
            className="rounded-lg p-6 dark:border-[2px] border-[#212425]"
            style={{
              background: `${theme === "dark" ? "transparent" : item?.bg}`,
            }}
            key={item.id}
            onClick={() => handleModle(item?.id)}
          >
            <div className="overflow-hidden rounded-lg">
              <Image
                className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto "
                src={item.imgSmall}
                width={300}
                height={300}
                priority
                alt="portfolio Image"
              />
            </div>
            <span className="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]">
              {item.tag}
            </span>
            <h2 className="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2">
              {item.title}
            </h2>
          </div>
        ))}
      </Masonry>
      {/* End portfolio items */}



      {/* Start Modal for portfolio items */}
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        className=" outline-none flex items-center  p-4 md:p-8  rounded-2xl my-8"
      >
        <div className=" w-full md:w-10/12 flex items-center   lg:w-[850px] bg-white dark:bg-[#323232] mx-auto rounded-xl p-4 md:p-8 absolute left-1/2 top-1/2 transform -translate-x-[50%] -translate-y-[50%] shadow-lg ">
          <div className=" overflow-y-scroll max-h-[80vh] no-scrollbar ">
            {/* close button */}
            <BsXCircle
              onClick={() => setIsOpen(false)}
              className="text-7xl cursor-pointer  absolute right-2 -top-12 md:-right-10 md:-top-6 z-50  text-white transition transform hover:rotate-45 duration-300 ease-in-out "
            />
            <h2 className="text-[#ef4060] dark:hover:text-[#FA5252] text-4xl text-center font-bold">
              {singleData.tag} {singleData.title}
            </h2>
            <div className="grid grid-cols-1 my-6">
              <div className="space-y-2">
              <p className="dark:text-white flex items-center text-[15px] sm:text-lg ">
                  <FiExternalLink className="text-lg mr-2 hidden sm:block" />
                  Project Repository :&nbsp;
                  <span className="font-medium transition-all duration-300 ease-in-out hover:text-[#ef4060] ">
                    <a
                      href={singleData?.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {singleData?.linkText}
                    </a>
                  </span>
                </p>
                <p className="dark:text-white items-center text-[15px] lg:grid-cols-12 sm:text-lg ">
                  {/* <FiCode className="text-lg mr-2 hidden sm:block " /> */}
                  Skills :&nbsp;
                  <span className="font-medium ">{singleData?.langages}</span>
                </p>
              </div>
            </div>

            <p className="dark:text-white  text-2line font-normal text-[15px] sm:text-sm  ">
              {singleData?.description}
            </p>
            <Image
              className="w-full h-auto object-cover rounded-xl mt-6"
              src={singleData?.img}
              alt="blog details image"
              width={620}
              height={420}
              loading="lazy"
            />
          </div>
        </div>
      </Modal>
      {/* End Modal for portfolio items */}
    </>
  );
};

export default Works2;
