import React, { useState, useEffect } from "react";
import "../assets/css/usecase.css";

function Usecase() {
  const [activeTab, setActiveTab] = useState("singleApp");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleTab = (tabName) => {
    setActiveTab((prevTab) => (prevTab === tabName ? "" : tabName));
  
    setTimeout(() => {
      document.getElementById(tabName)?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 500); 
  };
  
  

  const content = {
    singleApp: {
      heading: "Powerful Single-App Kiosk solutions for enhanced control",
      list: [
        "Provision the devices to run one specialized application, with limited functionality.",
        "Customize the device settings to cater to a specific use case.",
        "Use Advanced Kiosk settings for additional restrictions or expanded functionalities.",
        "Empower administrators with full control over kiosk devices.",
      ],
      image:
        "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fhexnode-kiosk%2Fsingle-app-kios-image.jpg&w=1200&q=100",
    },
    MultipleApp: {
      heading: "Elevate efficiency with Multi-App Kiosk",
      list: [
        "Limit device access to approved apps, ensuring focus and productivity.",
        "With default phone and settings app inclusion, reduce distractions by providing users access to essential functions only.",
        "With Hexnode's peripheral settings admins can allow necessary device settings while retaining control.",
        "Simplify device management while empowering user productivity by deploying Multi-App Kiosk Mode.",
      ],
      image:
        "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fhexnode-kiosk%2Fmulti-app-kiosk-image.jpg&w=1200&q=100",
    },
    WebApp: {
      heading: "Explore the new way to manage web apps and websites",
      list: [
        "Let users access essential and approved web apps, website and files only.",
        "Make the best use of website kiosk with Hexnode's advanced settings.",
        "Tailor your experience to match your unique use case.",
        "From configuring toolbar options to scheduling page refresh, remote debugging, and limiting incognito tabs, take full control of your website kiosk experience.",
      ],
      image:
        "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fhexnode-kiosk%2Fweb-based-kiosk-image.jpg&w=1200&q=100",
    },
    DigitalApp: {
      heading: "Capture attention with Digital Signage Kiosks",
      list: [
        "Transform your devices into captivating digital signage kiosks that grab attention.",
        "Engage your audience with vibrant images and seamless video streaming.",
        "Customize media files with trimming, muting, and background music.",
        "Advertise and show off your brand aesthetics to attract customers in different ways.",
        "Take control with Hexnode to reestablish your brand's presence."
      ],
      image:
        "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fhexnode-kiosk%2Fdigital-signage-kiosk-image.jpg&w=1200&q=100",
    },
    AsamApp: {
      heading: "Unlock the power of Autonomous Single App Mode (ASAM)",
      list: [
        "A feature that empowers your iOS app to seamlessly secure itself in the foreground.",
        "Transform tablets or devices into dedicated point-of-sale (POS) systems by preventing interruptions from other applications or notifications.",
        "Create focused, efficient and secure digital environments to match your requirements.",
        "Configure ASAM effortlessly and elevate your user experience like never before."
      ],
      image:
        "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fhexnode-kiosk%2Fasam-kiosk-image.jpg&w=1200&q=100",
    },
  };

  return (
    <div className="usecase-parent">
      <div className="usecase-heading">Specific kiosk modes for unique use cases</div>

      {isMobile ? (
        <div className="usecase-mobile-view">
          {Object.keys(content).map((tab) => (
            <div key={tab} className="usecase-card">
              <div className={`usecase-card-header ${activeTab === tab ? "selected-tab" : ""}`} onClick={() => handleTab(tab)}>
                {tab === "singleApp" && "Single App Kiosk"}
                {tab === "MultipleApp" && "Multiple App Kiosk"}
                {tab === "WebApp" && "Web-based Kiosk"}
                {tab === "DigitalApp" && "Digital Signages"}
                {tab === "AsamApp" && "Asam Kiosk"}

                <div className={`arrow-icon ${activeTab === tab ? "rotate-up" : "rotate-down"}`}>

                  <svg className={`arrow-icon ${activeTab === tab ? "rotate-up" : "rotate-down"}`}
                    width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1.5L6 6.5L11 1.5" stroke="#96979E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              </div>

              <div key={tab} className={`usecase-card ${activeTab === tab ? "expanded" : ""}`}>

                {activeTab === tab && (
                  <>
                    <div className="usecase-image">
                      <img src={content[tab].image} alt={content[tab]?.heading} />
                    </div>
                    <div className="usecase-description">
                      <div className="usecase-view-head">{content[tab]?.heading}</div>
                      <ul className="usecase-list">
                        {content[activeTab]?.list?.map((item, index) => (
                          <li key={index}>
                            <span className="checkmark">✔</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (


        <div>

          <div className="usecase-header-tabs">
            {Object.keys(content)?.map((tab) => (
              <div
                key={tab}
                className={`usecase-tab ${activeTab === tab ? "usecase-tab-active" : ""}`}
                onClick={() => handleTab(tab)}
              >
                {tab === "singleApp" && "Single App Kiosk"}
                {tab === "MultipleApp" && "Multiple App Kiosk"}
                {tab === "WebApp" && "Web-based Kiosk"}
                {tab === "DigitalApp" && "Digital Signages"}
                {tab === "AsamApp" && "Asam Kiosk"}
              </div>
            ))}
          </div>
          <div className="usecase-detial-view">
            <div className="usecase-description">
              <div className="usecase-view-head">{content[activeTab]?.heading}</div>
              <div className="usecase-list">
                <ul className="usecase-list">
                  {content[activeTab]?.list.map((item, index) => (
                    <li key={index}>
                      <span className="checkmark">✔</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="usecase-image">
              <img src={content[activeTab]?.image} alt={content[activeTab]?.heading} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Usecase;
