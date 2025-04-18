import React from 'react';
import { Link } from 'react-router-dom';
import { FaTerminal, FaUser, FaProjectDiagram, FaCode, FaRobot, FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        <div className="title">
          <Link to="/" className="title-link">उर्वशी</Link>
        </div>

        <nav>
          <ul className="nav-links">
            <li>
              <a href="https://urvashi-terminal.vercel.app/" target="_blank" rel="noopener noreferrer">
                <FaTerminal className="icon" /> Terminal
              </a>
            </li>
            <li>
              <a href="https://urvashi-about.vercel.app/" target="_blank" rel="noopener noreferrer">
                <FaUser className="icon" /> About
              </a>
            </li>
            <li>
              <a href="#projects">
                <FaProjectDiagram className="icon" /> Projects
              </a>
            </li>
            <li>
              <a href="https://leetcode.com/u/urvashiiibh/" target="_blank" rel="noopener noreferrer">
                <FaCode className="icon" /> LeetCode
              </a>
            </li>
            <li>
              <a href="https://counsel-ai.vercel.app/" target="_blank" rel="noopener noreferrer">
                <FaRobot className="icon" /> Counsel.AI
              </a>
            </li>
          </ul>
        </nav>

        <hr />

        <div className="contact">
          <div className="contact-title">Contact</div>
          <ul className="contact-links">
            <li><a href="mailto:urvashi.officialcse@gmail.com"><FaEnvelope className="icon" /> Email</a></li>
            <li><a href="https://github.com/urvashii-b" target="_blank" rel="noopener noreferrer"><FaGithub className="icon" /> GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/urvashi-bhargava-b66100262/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="icon" /> LinkedIn</a></li>
            <li><a href="https://x.com/urvashiicodes" target="_blank" rel="noopener noreferrer"><FaTwitter className="icon" /> Twitter</a></li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
