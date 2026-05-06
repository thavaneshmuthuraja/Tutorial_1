import { useState } from 'react';

function FeedbackForm({ onFeedbackSubmit }) {
  const [formData, setFormData] = useState({
    studentName: '',
    email: '',
    contactNo: '',
    feedbackMessage: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.studentName || !formData.email || !formData.contactNo || !formData.feedbackMessage) {
      alert('Please fill in all fields');
      return;
    }

    const feedback = {
      ...formData,
      id: Date.now(),
      timestamp: new Date().toLocaleString()
    };

    onFeedbackSubmit(feedback);

    // Clear form
    setFormData({
      studentName: '',
      email: '',
      contactNo: '',
      feedbackMessage: ''
    });
  };

  return (
    <div className="feedback-form-container">
      <h2>Submit Your Feedback</h2>
      <form onSubmit={handleSubmit} className="custom-form">
        <div className="form-group">
          <label>Student Name</label>
          <input
            type="text"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            placeholder="Full Name"
            required
          />
        </div>

        <div className="form-group">
          <label>Email ID</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="email@university.edu"
            required
          />
        </div>

        <div className="form-group">
          <label>Contact No.</label>
          <input
            type="tel"
            name="contactNo"
            value={formData.contactNo}
            onChange={handleChange}
            placeholder="10-digit number"
            required
          />
        </div>

        <div className="form-group">
          <label>Feedback Message</label>
          <textarea
            name="feedbackMessage"
            value={formData.feedbackMessage}
            onChange={handleChange}
            placeholder="Share your experience..."
            rows="5"
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Post Feedback
        </button>
      </form>
    </div>
  );
}

export default FeedbackForm;