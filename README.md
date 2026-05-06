# Student Feedback System

A React web application that enables students to submit their feedback and view all submitted responses in real-time.

## Features

- **FeedbackForm Component**: Controlled form with validation for:
  - Student Name
  - Email ID
  - Contact Number
  - Feedback Message
  
- **FeedbackList Component**: Displays submitted feedback with:
  - Student information
  - Timestamp
  - Feedback message
  - Responsive design with animations

- **State Management**: Centralized state in App component
- **Form Validation**: Email format and contact number validation
- **Dynamic Updates**: Real-time feedback list updates
- **Modern UI**: Gradient backgrounds, hover effects, and smooth animations

## Project Structure

```
src/
├── components/
│   ├── FeedbackForm.jsx    # Form component with controlled inputs
│   └── FeedbackList.jsx    # List component for displaying feedback
├── App.jsx                 # Main app component with state management
├── App.css                 # Styling for the application
└── main.jsx               # React entry point
```

## How It Works

1. **Controlled Form**: The FeedbackForm uses React state to control all input fields
2. **State Management**: App component manages the feedback array state
3. **Data Flow**: 
   - User submits feedback → Form validates → Data sent to App → App updates state → FeedbackList re-renders
4. **Form Reset**: After successful submission, form fields are automatically cleared
5. **Real-time Updates**: New feedback appears immediately in the list

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173`

## Technologies Used

- **React 19**: Functional components with hooks
- **Vite**: Fast development tool
- **CSS3**: Modern styling with gradients and animations
- **JavaScript ES6+**: Modern JavaScript features

## Key React Concepts Demonstrated

- **useState Hook**: Managing component state
- **Controlled Components**: Form inputs controlled by React state
- **Props Drilling**: Passing data between components
- **Event Handling**: Form submission and input changes
- **Conditional Rendering**: Showing empty state when no feedback exists
- **Component Composition**: Building UI from reusable components
