function FeedbackList({ feedbacks }) {
  return (
    <div className="feedback-list">
      <h2>Submitted Feedback ({feedbacks.length})</h2>
      
      {feedbacks.length === 0 ? (
        <div className="no-feedback">
          <p>No feedback submitted yet. Be the first to share your thoughts!</p>
        </div>
      ) : (
        <div className="feedback-items">
          {feedbacks.map((feedback) => (
            <div key={feedback.id} className="feedback-item-card">
              <div className="item-header">
                <h3 className="student-name">👤 {feedback.studentName}</h3>
                <span className="timestamp">{feedback.timestamp}</span>
              </div>
              
              <div className="item-meta">
                <span><strong>Email:</strong> {feedback.email}</span>
                <span><strong>Contact:</strong> {feedback.contactNo}</span>
              </div>
              
              <div className="item-message">
                <p>{feedback.feedbackMessage}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FeedbackList;