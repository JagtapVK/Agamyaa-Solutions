import React from 'react';
import './Courses.css'; // Assuming you are using an external CSS file

const courses = [
  {
    title: 'Automation',
    description: 'Explore automation technologies and their applications across various industries.',
    backgroundColor: '#f9b234'
  },
  {
    title: 'Insurance',
    description: 'Learn about insurance products, policies, and the industry’s latest trends.',
    backgroundColor: '#3ecd5e'
  },
  {
    title: 'HealthCare',
    description: 'Understand the healthcare system, medical practices, and health technology advancements.',
    backgroundColor: '#e44002'
  },
  {
    title: 'BFSI',
    description: 'Gain insights into the Banking, Financial Services, and Insurance sector.',
    backgroundColor: '#952aff'
  },
  {
    title: 'Customer Durables',
    description: 'Study the market for durable goods, including electronics and home appliances.',
    backgroundColor: '#cd3e94'
  },
  {
    title: 'Media and Entertainment',
    description: 'Explore the media industry, including film, television, and digital entertainment.',
    backgroundColor: '#4c49ea'
  },
  {
    title: 'E-commerce',
    description: 'Learn about online commerce, digital transactions, and the e-commerce ecosystem.',
    backgroundColor: '#f9b234'
  },
  {
    title: 'Education',
    description: 'Understand various educational systems, methods, and advancements in learning technologies.',
    backgroundColor: '#3ecd5e'
  },
  {
    title: 'Telecommunication',
    description: 'Study telecommunications technologies, infrastructure, and industry developments.',
    backgroundColor: '#e44002'
  },
  {
    title: 'Logistics & Supply Chain',
    description: 'Gain knowledge about logistics management and supply chain optimization.',
    backgroundColor: '#952aff'
  }
];

const Courses = () => {
  return (
    <div className="ag-format-container">
      <div className="ag-courses_box">
        {courses.map((course, index) => (
          <div className="ag-courses_item" key={index}>
            <a href="#" className="ag-courses-item_link">
              <div
                className="ag-courses-item_bg"
                style={{ backgroundColor: course.backgroundColor }}
              ></div>
              <div className="ag-courses-item_title">{course.title}</div>
              <div className="ag-courses-item_description">{course.description}</div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
