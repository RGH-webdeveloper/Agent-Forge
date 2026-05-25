import React, { useEffect, useState } from "react";
import "./HomePage.css";
import Platform from "../Platform/Platform";
import { Spinner } from "react-bootstrap";
import homePageTitle from "./homePageTitle";

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
                  <p className="text-center col-6">
                    Design, deploy, and orchestrate intelligent AI agents that
                    automate complex tasks. From single-purpose bots to
                    multi-agent teams, AgentForge gives you the building blocks
                    to ship AI-powered automation at scale.
                  </p>
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
