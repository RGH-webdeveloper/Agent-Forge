import React, { useEffect, useState } from "react";
import { BsFillHexagonFill } from "react-icons/bs";
import { IoIosFlash } from "react-icons/io";
import { Link } from "react-router";
import "./Header.css";
import { LuSunMedium } from "react-icons/lu";
import { IoMenu, IoMoonOutline } from "react-icons/io5";
import Offcanvas from "react-bootstrap/Offcanvas";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomButton from "./CustomButton";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.setAttribute("data-theme", "dark");
    } else if (savedTheme === "light") {
      setIsDarkMode(false);
      document.documentElement.setAttribute("data-theme", "light");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDarkMode(true);
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);
  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.setAttribute(
      "data-theme",
      newMode ? "dark" : "light",
    );
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };
  const OffCanvasExample = ({ name, ...props }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <button className="btn d-sm-flex d-lg-none" onClick={handleShow}>
          {name}
        </button>
        <Offcanvas
          scroll={false}
          style={{ height: "410px" }}
          show={show}
          onHide={handleClose}
          {...props}
          className="custom_offcanvas"
        >
          <Offcanvas.Header closeButton closeVariant="white"></Offcanvas.Header>
          <Offcanvas.Body>
            <nav className="d-flex flex-column gap-4">
              <Link to="/Platform">Platform</Link>
              <Link to="/Pricing">Pricing</Link>
              <Link to="/Integrations">Integrations</Link>
              <Link to="/About">About</Link>
              <Link to="/Blog">Blog</Link>
              <Link to="/Contact">Contact</Link>
              <CustomButton
                fontSize={"14px"}
                fontWeight={"300"}
                variant="success"
                bootstrapClass="d-sm-none"
              >
                Start Building
              </CustomButton>
            </nav>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  };
  return (
    <>
      <header className="header_wrappper">
        <div className="header_division p-3 container">
          <div className="header_logo">
            <Link to="/" className="gap-2">
              <div className="header_logo_svg_division position-relative">
                <BsFillHexagonFill color="#47d7a3" size={30} />
                <IoIosFlash
                  color="#e8e6e3"
                  className="position-absolute top-50 start-50 translate-middle"
                />
              </div>
              <div className="header_logo_text_division">
                <span>Agent</span>
                <span>Forge</span>
              </div>
            </Link>
          </div>
          <div className="header_nav d-none d-lg-flex p-0">
            <nav className="navbar navbar-expand-lg">
              <Link to="/Platform">Platform</Link>
              <Link to="/Pricing">Pricing</Link>
              <Link to="/Integrations">Integrations</Link>
              <Link to="/About">About</Link>
              <Link to="/Blog">Blog</Link>
              <Link to="/Contact">Contact</Link>
            </nav>
          </div>
          <div className="header_right_part gap-1">
            <div className="theme_togle d-flex justify-content-center align-center">
              <button className="btn" type="button" onClick={toggleTheme}>
                {isDarkMode ? (
                  <LuSunMedium size={20} />
                ) : (
                  <IoMoonOutline size={20} />
                )}
              </button>
            </div>
            <div className="start_building_button text-nowrap d-none d-sm-flex ">
              <CustomButton
                fontSize={"14px"}
                fontWeight={"300"}
                variant="success"
              >
                Start Building
              </CustomButton>
            </div>
            <div className="hamburger_menue">
              {["top"].map((placement, idx) => (
                <OffCanvasExample
                  key={idx}
                  placement={placement}
                  name=<IoMenu size={20} color="#afa99e" />
                />
              ))}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
