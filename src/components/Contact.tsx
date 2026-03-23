import React from 'react';
import { User, Mail, MessageSquare, Send, Grid3X3 } from 'lucide-react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="heading-container">
        <h2 className="heading-main">GET IN TOUCH</h2>
        <hr className="heading-divider" />
      </div>

      <div className="contact-card-container">
        <div className="contact-card">
          <div className="contact-dots">
            <Grid3X3 size={24} className="dots-icon" />
          </div>
          
          <p className="contact-subtitle">Let's start a conversation about your next project</p>
          
          <form 
            className="contact-form" 
            action="mailto:alfredbiju7@gmail.com" 
            method="post" 
            encType="text/plain"
          >
            <div className="form-row">
              <div className="input-group">
                <User size={20} className="input-icon" />
                <input type="text" name="name" placeholder="Your name" required />
              </div>
              <div className="input-group">
                <Mail size={20} className="input-icon" />
                <input type="email" name="email" placeholder="your@email.com" required />
              </div>
            </div>
            
            <div className="input-group textarea-group">
              <MessageSquare size={20} className="input-icon" />
              <textarea 
                name="message"
                placeholder="Tell me about your project, ideas, or just say hello..." 
                rows={5}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">
              <Send size={18} />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
