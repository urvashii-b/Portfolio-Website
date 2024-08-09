import React from 'react';
import { Link } from 'react-router-dom'; 
import './Sidebar.css';

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        <div className="title">
          <Link to="/" className='title-link'>उर्वशी</Link>
        </div>
        <nav>
          <ul>
            <li><a href="https://leetcode.com/u/urvashiiibh/">LeetCode ↗</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href='https://urvashi-about.vercel.app/'>^_^ About</a></li>
            <li><a href='https://counsel-ai.vercel.app/'>Counsel AI</a></li>
          </ul>
        </nav>
        <hr />
        <div className="contact">
          <div className="contact-title">
            Contact
          </div>
          <ul>
            <li><a href="mailto:urvashi.officialcse@gmail.com">Email</a></li>
            <li><a href="https://github.com/urvashii-b">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/urvashi-bhargava-b66100262/">LinkedIn</a></li>
            <li><a href="https://x.com/urvashiicodes">Twitter</a></li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
