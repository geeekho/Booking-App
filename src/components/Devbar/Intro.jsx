import { Separator } from "../ui";

export const Intro = () => {
  return (
    <div>
      <h2>Welcome to EazyBook Demo!</h2>
      <Separator className="mb-2" />
      <p>
        Discover your next adventure with ease. EazyBook is your go-to booking
        app for unique stays, whether you’re planning a weekend getaway or a
        long vacation. Browse a variety of accommodations that fit your style
        and budget, all in one convenient place.
      </p>
      <p>
        Our user-friendly interface makes finding and booking the perfect spot a
        breeze. With EazyBook, enjoy seamless searches, secure payments, and
        trusted reviews from fellow travelers. Let us help you create
        unforgettable memories!
      </p>
      <p>Happy travels!</p>

      <h3>Credentials</h3>
      <p>
        The email is <code>test@test.com</code> and the password is{" "}
        <code>12345678</code>. We can sign in tosee the <code>listings</code>.
      </p>

      <h3>Description</h3>
      <Separator className="mb-2" />
      <p>
        Welcome to the EazyBook project Demo! Our development journey begins
        with a solid foundation in React, leveraging its powerful features to
        build a seamless booking experience. The project covers essential
        aspects including:
      </p>
      <ul>
        <li>
          <strong>Setup & Dependencies:</strong> Establishing the project
          environment with necessary libraries and tools.
        </li>
        <li>
          <strong>API Integration:</strong> Connecting to a mock service for
          data retrieval and management.
        </li>
        <li>
          <strong>UI Components:</strong> Designing reusable components for an
          intuitive user interface.
        </li>
        <li>
          <strong>State Management:</strong> Implementing state management
          solutions using React Hooks and Redux for efficient data handling.
        </li>
        <li>
          <strong>Navigation & Routing:</strong> Setting up smooth navigation
          through client-side routing.
        </li>
        <li>
          <strong>Performance Optimization:</strong> Ensuring a responsive
          experience with best practices for performance.
        </li>
        <li>
          <strong>Forms & Authentication:</strong> Creating user-friendly forms
          and secure authentication methods.
        </li>
        <li>
          <strong>Deployment:</strong> Finalizing the app and deploying it to
          Vercel for public access.
        </li>
      </ul>
    </div>
  );
};
