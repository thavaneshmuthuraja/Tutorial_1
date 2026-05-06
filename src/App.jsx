import { useState } from 'react'
import FeedbackForm from './components/FeedbackForm'
import FeedbackList from './components/FeedbackList'
import './App.css'

function App() {
  const [feedbacks, setFeedbacks] = useState([]);

  const handleFeedbackSubmit = (newFeedback) => {
    // Adding the new feedback to the top of the list
    setFeedbacks(prevFeedbacks => [newFeedback, ...prevFeedbacks]);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Student Feedback System</h1>
        <p>Your voice matters. Help us improve the learning experience.</p>
      </header>
      
      <main className="app-main">
        <div className="container">
          <div className="feedback-section form-sticky">
            <FeedbackForm onFeedbackSubmit={handleFeedbackSubmit} />
          </div>
          
          <div className="feedback-section list-scroll">
            <FeedbackList feedbacks={feedbacks} />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
