import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const faqData = [
  {
    question: "How does PhisGuard protect me?",
    answer:
      "PhisGuard uses advanced AI to detect and block malicious websites, phishing attempts, and harmful downloads in real-time. It also enhances your privacy by blocking trackers and preventing unauthorized access to your browsing data."
  },
  {
    question: "Is PhisGuard compatible with all browsers?",
    answer:
      "PhisGuard works best with Chrome-based browsers. You can manually install it as a developer extension. Support for other browsers is coming soon."
  },
  {
    question: "How do I update PhisGuard?",
    answer:
      "Currently, updates are released as downloadable ZIP files. You’ll need to remove the old version and upload the new one manually through your browser’s extensions page."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section" id="faq">
      <h2>FAQ</h2>
      <div className="faq-container">
        {faqData.map((item, index) => (
          <div
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            key={index}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <h3>{item.question}</h3>
              <FontAwesomeIcon
                icon={activeIndex === index ? faChevronDown : faChevronRight}
                className="faq-icon"
              />
            </div>
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
