import React from 'react';

const Details = () => {
  return (
    <div>
      <h2>Project Details</h2>
      <p>
        This application showcases the fundamental usage of React Router. Below are the key implementation details:
      </p>

      <h4>Routing Setup</h4>
      <p>
        React Router's `createBrowserRouter` and `RouterProvider` are used to define the navigation structure. Each route is linked to a specific component, such as `About`, `Contact`, or `Details`.
      </p>

      <h4>Component-Based Architecture</h4>
      <p>
        Each page is built as a standalone React component. This promotes reusability and clean code structure. The Navbar component is reused across pages.
      </p>

      <h4>Styling</h4>
      <p>
        Basic CSS is used to style the app through `App.css` and `index.css`. You can also integrate TailwindCSS or Bootstrap to improve UI/UX.
      </p>

      <h4>Navigation Experience</h4>
      <p>
        Thanks to React Router, page navigation is fast and seamless without full page reloads. This improves user experience and performance.
      </p>
    </div>
  );
};

export default Details;
