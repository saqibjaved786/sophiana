import { Link } from "react-router-dom";
import { Cross } from "../../assets/icons";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { scrollToTop } from "../../utils";
interface IProps {
  setSidebarOpen?: Function;
  sidebarOpen?: boolean;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: IProps) => {
  let navigate = useNavigate();
  useEffect(() => {
    const body = document.body;
    if (sidebarOpen) {
      body.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");
    }

    return () => {
      body.classList.remove("overflow-hidden");
    };
  }, [sidebarOpen]);

  const handleNavigation = () => {
    navigate("/#partner");
    setSidebarOpen && setSidebarOpen(false);
  };

  const handleClose = () => {
    setSidebarOpen && setSidebarOpen(false);
    scrollToTop();
  };
  return (
    <>
      <div
        onClick={() => setSidebarOpen && setSidebarOpen(false)}
        className={`${
          sidebarOpen ? "block" : "hidden"
        } absolute h-screen bg-black/70 z-30 top-0 left-0 w-full lg:hidden`}
      ></div>
      <div
        className={`${
          sidebarOpen ? "left-0" : "-left-[100%]"
        } flex h-screen grow flex-col bg-white fixed z-40 top-0 lg:hidden duration-500 pb-10 xs:w-full w-[393px] sm:w-[620px] md:w-[750px]`}
      >
        <nav className="h-full duration-0 bg-white relative ">
          <Link to="/" onClick={handleClose}>
            <h1 className="text-black mt-16 sm:mt-[109px] ml-11 sm:ml-[93px] text-lg sm:text-2xl font-inter-regular">
              HOME
            </h1>
          </Link>
          <div className="max-w-[393px] sm:max-w-[650px] mt-7 pl-6 relative">
            <hr className="absolute inset-0 w-[80%] border-primary" />
            <h2 className="text-[#030303] font-cormorant-garamond-italic text-2xl sm:text-3xl pt-8">
              Dealers
            </h2>
            <ul className="pl-6 sm:ml-16">
              <a href="/#partner">
                <li
                  onClick={handleNavigation}
                  className="text-black mt-8 text-lg sm:text-2xl font-inter-regular cursor-pointer"
                >
                  PARTNERSHIP PROGRAM
                </li>
              </a>
              <Link to="/contact-us">
                <li
                  onClick={handleClose}
                  className="text-black mt-5 text-lg sm:text-2xl font-inter-regular italic"
                >
                  SIGN UP NOW
                </li>
              </Link>
            </ul>

            <h2 className="text-[#030303] font-cormorant-garamond-italic text-2xl sm:text-3xl pt-11">
              Personal Shoppers
            </h2>
            <ul className="pl-6 sm:ml-16">
              <Link to="/coming-soon">
                <li
                  onClick={handleClose}
                  className="text-black  mt-8 text-lg sm:text-2xl font-inter-regular"
                >
                  PRODUCT LISTINGS
                </li>
              </Link>
              <Link to="/contact-us">
                <li
                  onClick={handleClose}
                  className="text-black mt-5 text-lg sm:text-2xl font-inter-regular italic"
                >
                  GET ACCESS
                </li>
              </Link>
            </ul>
          </div>
          <div className="max-w-[393px] relative sm:max-w-[650px] mt-7 pl-7 ">
            <hr className="absolute inset-0 w-[80%] border-primary" />
            <h2 className="text-[#030303] font-cormorant-garamond-italic text-2xl sm:text-3xl pt-7">
              Concierge Area
            </h2>
            <ul className="pl-6 sm:ml-16">
              <Link to="/contact-us">
                <li
                  onClick={handleClose}
                  className="text-black mt-8 text-lg sm:text-2xl font-inter-regular"
                >
                  PERSONAL SHOPPER SERVICE
                </li>
              </Link>
              <Link to="/about-us">
                <li
                  onClick={handleClose}
                  className="text-black mt-5 text-lg sm:text-2xl font-inter-regular"
                >
                  ABOUT <span className="italic">SOPHIANA</span>
                </li>
              </Link>
              <Link to="/contact-us">
                <li
                  onClick={() => setSidebarOpen && setSidebarOpen(false)}
                  className="text-black mt-5 text-lg sm:text-2xl font-inter-regular"
                >
                  CONTACT US
                </li>
              </Link>
            </ul>
          </div>
        </nav>
        <div
          className="absolute right-10 sm:right-[90px] top-8 sm:top-[62px]"
          onClick={() => {
            if (setSidebarOpen) {
              setSidebarOpen(false);
            }
          }}
        >
          <Cross />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
