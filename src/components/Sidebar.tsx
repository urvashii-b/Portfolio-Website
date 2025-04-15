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
            <li><a href='https://urvashi-terminal.vercel.app/' className='terminal-link' target='_blank'>Terminal</a></li>
            <li><a href='https://urvashi-about.vercel.app/' className='about-link' target='_blank'>About</a></li>
            <li><a href="#projects" className='projects-link'>Projects</a></li>
            <li><a href="https://leetcode.com/u/urvashiiibh/" className='lc-link' target='_blank'>LeetCode</a></li>
            <li><a href='https://counsel-ai.vercel.app/' className='counselai-link' target='_blank'>Counsel.AI</a></li>
          </ul>
        </nav>
        <hr />
        <div className="contact">
          <div className="contact-title">
            Contact
          </div>
          <ul>
            <li><a href="mailto:urvashi.officialcse@gmail.com">Email</a></li>
            <li><a href="https://github.com/urvashii-b" target='_blank'>GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/urvashi-bhargava-b66100262/" target='_blank'>LinkedIn</a></li>
            <li><a href="https://x.com/urvashiicodes" target='_blank'>Twitter</a></li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
