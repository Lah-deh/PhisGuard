import React, { useState } from 'react';


const Feed = () => {
  const [link, setLink] = useState('');
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState('');

  const handleCheckSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://phishguard-api-0nyx.onrender.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: link })
      });

      const data = await response.json();

      if (data.prediction === "Phishing") {
        alert(`⚠️ Warning: This link is flagged as phishing!\nSeverity: ${data.severity}\nConfidence: ${Math.round(data.confidence)}%`);
      } else if (data.prediction === "Legitimate") {
        alert(`✅ This link is safe.\nConfidence: ${Math.round(data.confidence)}%`);

      } else {
        alert('❓ Could not determine the link status.');
      }


    } catch (error) {
      console.error('Error checking link:', error);
      alert('❌ Error checking the link. Please try again later.');
    } finally {
      setLoading(false);
      setLink('');
    }
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    alert(`✅ Feedback submitted: ${feedback}`);
    setFeedback('');
  };

  return (
    <div className="Feed">
      <div className="Check">
        <h3>Check Any Link Instantly</h3>
        <form onSubmit={handleCheckSubmit}>
          <input
            type="url"
            placeholder="Paste link here"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            required
          /><br/>
          <button type="submit" disabled={loading}>
            {loading ? 'Checking...' : 'Check link'}
          </button>
        </form>
      </div>

      <div className="feedd">
        <h3>Feedback</h3>
        <form onSubmit={handleFeedbackSubmit}>
          <input
            type="text"
            placeholder="Your feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          /><br/>
          <button type="submit">Submit Feedback</button>
        </form>
      </div>
    </div>
  );
};

export default Feed;
