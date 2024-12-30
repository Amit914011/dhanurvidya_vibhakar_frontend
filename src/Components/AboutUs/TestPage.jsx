import React, { useState, useEffect, useRef } from "react";

const TestPage = () => {
  const [activeSection, setActiveSection] = useState(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold for visibility
    );

    sectionsRef.current.forEach((section) => observer.observe(section));

    return () => {
      sectionsRef.current.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div>
      <div className="sticky top-0 bg-gray-800 text-white p-4">
        <div className="flex space-x-4">
          <span
            className={`${
              activeSection === "section1" ? "text-white" : "text-gray-400"
            }`}
          >
            Section 1
          </span>
          <span
            className={`${
              activeSection === "section2" ? "text-white" : "text-gray-400"
            }`}
          >
            Section 2
          </span>
          <span
            className={`${
              activeSection === "section3" ? "text-white" : "text-gray-400"
            }`}
          >
            Section 3
          </span>
        </div>
      </div>
      <div
        id="section1"
        ref={(el) => (sectionsRef.current[0] = el)}
        className="h-screen bg-gray-100 flex items-center justify-center text-2xl"
      >
        Section 1 Content
      </div>
      <div
        id="section2"
        ref={(el) => (sectionsRef.current[1] = el)}
        className="h-screen bg-gray-200 flex items-center justify-center text-2xl"
      >
        Section 2 Content
      </div>
      <div
        id="section3"
        ref={(el) => (sectionsRef.current[2] = el)}
        className="h-screen bg-gray-300 flex items-center justify-center text-2xl"
      >
        Section 3 Content
      </div>
    </div>
  );
};

export default TestPage;
