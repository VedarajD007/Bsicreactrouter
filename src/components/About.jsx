import React from 'react';

const About = () => {
  return (
    <div>
      <h2>About This Application</h2>
      <p>
        This project is a simple React-based Single Page Application (SPA) that demonstrates the core concepts of routing using <strong>React Router</strong>. 
        It’s designed to help beginners understand how to create and manage navigation in modern web apps.
      </p>
      <p>
        The app consists of a navigation bar and multiple pages like About, Contact, and Details. When a link is clicked, the browser URL changes and the corresponding component is rendered — all without reloading the page.
      </p>
      <p>
        This app uses:
        <ul>
          <li>React 18+</li>
          <li>React Router DOM v6+</li>
          <li>Vite for fast development and build</li>
        </ul>
      </p>
      <p>
        It's also a good starter template for small projects or portfolios where you want to build a multi-page feel using a single-page React app.
      </p>
    </div>
  );
};

export default About;
