import React, { useEffect, useState } from "react";
import "./HomePage.css";
import Platform from "../Platform/Platform";
import { Spinner } from "react-bootstrap";
import homePageTitle from "../../../data/homePageTitle";
import CustomButton from "../Common/CustomButton";
import { FaRegFileAlt } from "react-icons/fa";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import codeLines from "../../../data/codeLine";
import Stats from "../Common/stats";
const HomePage = () => {
  const [currentTitle, setCurrentTitle] = useState(homePageTitle[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentTitle((prevTitle) => {
          const currentIndex = homePageTitle.findIndex(
            (item) => item.id === prevTitle.id,
          );
          const nextIndex = (currentIndex + 1) % homePageTitle.length;
          return homePageTitle[nextIndex];
        });
        setIsAnimating(false);
      }, 300);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="plaid-background">
        <div className="multi_blur_circles">
          <div>
            <div className="d-flex flex-column">
              <div className="homepage_header_part">
                <div className="trusted_by_badge">
                  <span>
                    <Spinner size="sm" animation="grow" variant="success" />
                  </span>
                  <span className="trusted_by_badge_dot"></span>
                  <span>Trusted by 10,000+ developers worldwide</span>
                </div>
              </div>
              <div className="homepage_title container">
                <h1>
                  <span className="d-block">Build Autonomous</span>
                  <span
                    className={`rotating-text ${isAnimating ? "animate-out" : "animate-in"}`}
                  >
                    {currentTitle.name}
                  </span>
                </h1>
                <div className="d-flex justify-content-center align-center mt-4">
                  <p className="text-center container">
                    Design, deploy, and orchestrate intelligent AI agents that
                    automate complex tasks. <br /> From single-purpose bots to
                    multi-agent teams, AgentForge gives <br /> you the building
                    blocks to ship AI-powered automation at scale.
                  </p>
                </div>
                <div className="d-grid d-sm-flex justify-content-center align-content-center pt-5 gap-3">
                  <CustomButton
                    fontSize="clamp(10px, 4vw, 16px)"
                    to={"/"}
                    fontWeight={"300"}
                    bootstrapClass=" px-4 py-2 gap-2"
                    variant="primary"
                  >
                    <span>Start Building Free</span>
                    <span>
                      <HiOutlineArrowNarrowRight />
                    </span>
                  </CustomButton>
                  <CustomButton
                    fontSize="clamp(10px , 4vw , 16px)"
                    to={"/"}
                    fontWeight={"300"}
                    bootstrapClass="px-4 py-2 gap-2"
                    variant="secondary"
                  >
                    <span>
                      <FaRegFileAlt color="#22d3ee" />
                    </span>
                    <span>View Documantaion</span>
                  </CustomButton>
                </div>
              </div>
            </div>
            <Stats/>
            <div className="d-flex justify-content-center align-items-center">
              <div className="agent_py rounded-4 col-11 col-sm-10 col-md-8 col-xxl-5">
                <div className="agent_py_header d-flex justify-content-start px-4 py-2 align-items-center gap-2">
                  <div className="rounded_full_red"></div>
                  <div className="rounded_full_yellow"></div>
                  <div className="rounded_full_green"></div>
                  <span className="text-secondary">agent.py</span>
                </div>

                <div className="agent_py_body p-4">
                  {codeLines.map((tokens, lineIndex) => (
                    <div key={lineIndex} className="code_line">
                      {tokens.map((token, tokenIndex) => (
                        <span key={tokenIndex} className={token.color}>
                          {token.text}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <Platform />
            </div>
          </div>
          <div className="circle_1 d-flex"></div>
          <div className="circle_2 d-flex d-none d-lg-flex"></div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
