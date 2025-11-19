import React from "react";
import "./Courses.css";

export default function Courses() {
  const courses = [
    {
      id: 1,
      title: "Paper Trading Basics",
      img: "https://img.youtube.com/vi/xQikCdx67Ms/maxresdefault.jpg",
      instructor: "TradingView",
      description: "Learn paper trading from scratch using TradingView.",
      link: "https://www.youtube.com/watch?v=xQikCdx67Ms"
    },
    {
      id: 2,
      title: "Step-by-Step Paper Trading Tutorial",
      img: "https://img.youtube.com/vi/kaofQlooJug/maxresdefault.jpg",
      instructor: "Pushkar Raj Thakur",
      description: "Perfect for Indian market beginners. Learn proper trading practice.",
      link: "https://www.youtube.com/watch?v=kaofQlooJug"
    },
    {
      id: 3,
      title: "TradingView Setup & Basic Strategies",
      img: "https://img.youtube.com/vi/u-WxsvHVWN8/maxresdefault.jpg",
      instructor: "MoneyZG",
      description: "Setup, tools, and simple strategies for paper trading.",
      link: "https://www.youtube.com/watch?v=u-WxsvHVWN8"
    },
  ];

  return (
    <div className="courses-container">
      <h2 className="courses-title">Videos to Watch</h2>

      <div className="courses-grid">
        {courses.map((course) => (
          <div key={course.id} className="course-card">

            {/* IMAGE */}
            <img src={course.img} alt={course.title} className="course-img" />

            {/* TEXT */}
            <div className="course-info">
              <h3>{course.title}</h3>
              <p>{course.description}</p>

              <div className="course-footer">
                <span>By {course.instructor}</span>

                {/* YOUTUBE REDIRECT */}
                <button
                  className="course-btn"
                  onClick={() => window.open(course.link, "_blank")}
                >
                  Watch Now
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
