import React from "react";
import { BsHexagonFill } from "react-icons/bs";
import { IoIosFlash } from "react-icons/io";
import "./Header.css";
const Header = () => {
  return (
    <>
      <div>
        <div className="header_parent_division">
          <div className="page_logo_division">
            <div className="page_logo">
              <BsHexagonFill color="#47d7a3" size={35} className="BsHexagonFill" />
              <span>
                <IoIosFlash color="white" size={25} />
              </span>
            </div>
            <div className="page_logo_name">
              <span
                style={{
                  color: "white",
                  fontWeight: "bolder",
                  fontSize: "22px",
                }}
              >
                Agengt
              </span>
              <span
                style={{
                  color: "#47d7a3",
                  fontWeight: "bolder",
                  fontSize: "22px",
                }}
              >
                Forge
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
