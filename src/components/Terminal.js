import React, { useState } from "react";

const Terminal = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      processCommand(input);
      setInput("");
    }
  };

  const processCommand = (command) => {
    setOutput((prevOutput) => [
      ...prevOutput,
      <span className="command-text">@my-portfolio.com:~$ {command}</span>
    ]);

    if (command.toLowerCase() === "whoami") {
      setOutput((prevOutput) => [
        ...prevOutput,
        "",
        <div className="container">
          <div className="image-container">
            <img className="my-pic" src="portfolio_userimage.jpeg" alt="my-image" />
          </div>
          <div className="text-container">
            <p className="text">
             Hello everyone! 😊 I'm Sheik Raseeth Ansar A., an aspiring Full Stack Developer from Tirunelveli. Currently pursuing my B.Tech in Information Technology at National Engineering College, Kovilpatti, I maintain a strong academic standing with a CGPA of 9.2 through my fourth semester. I specialize in Full Stack Development, focusing on building scalable web applications and creating innovative solutions.
            </p>
          </div>
        </div>
      ]);
    }
    else if (command.toLowerCase() === "help"){
      setOutput((prevOutput) => [
        ...prevOutput,
        "",
        <div className="output-data">
          whoami - A quick introduction about me.<br />
          resume - To take a look at my resume.<br />
          projects - To know & view my recent projects.<br />
          achievements - To know my accomplishments till now.<br />
          techstack - To take a look at my skillset.<br />
          linkedin - To view my LinkedIn profile.<br />
          github - To view my GitHub profile.<br />
          leetcode - To check out my LeetCode profile.<br />
          help - To view all the available commands.<br />
          clear - To clear the terminal window.<br />
          Note: The Commands are Case Insensitive.<br />
        </div>
      ]);
    }
    else if (command.toLowerCase() === "resume") {
      setOutput((prevOutput) => [
        ...prevOutput,
        "",
        "Download my resume:",
        <div key="resume-link" className="resume-link">
          <a 
            href="sheik raseeth ansar-resume.pdf" 
            download="sheik raseeth ansar-resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="download-link"
          >
            sheik raseeth ansar-resume.pdf
          </a>
        </div>,
        ""
      ]);
    }
    else if (command.toLowerCase() === "projects") {
      setOutput((prevOutput) => [
        ...prevOutput,
        "",
        <div className="projects-list">
          <a href="https://raseeth123.github.io/Restaurant/" target="_blank" rel="noopener noreferrer" className="project-link">
            ▪ Restaurant Website - Clean and responsive static restaurant webpage.
          </a><br/>
          <a href="https://raseeth123.github.io/Countdown/" target="_blank" rel="noopener noreferrer" className="project-link">
            ▪ New Year Countdown - Dynamic countdown timer to New Year.
          </a><br/>
          <a href="https://raseeth123.github.io/Password_Generator/" target="_blank" rel="noopener noreferrer" className="project-link">
            ▪ Password Generator - Secure random password generation tool.
          </a><br/>
          <a href="https://raseeth123.github.io/Weather_app/" target="_blank" rel="noopener noreferrer" className="project-link">
            ▪ Weather App - Real-time weather information using OpenWeatherMap API.
          </a><br/>
          <a href="https://streamax-sra-raseeth.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-link">
            ▪ StreaMax - Modern video streaming platform with optimized content delivery.
          </a><br/>
          <a href="https://wall-e-6974f.web.app/" target="_blank" rel="noopener noreferrer" className="project-link">
            ▪ WALL-E - AI-powered SaaS platform with Firebase integration for development tools.
          </a>
        </div>,
        ""
      ]);
    }
    else if (command.toLowerCase() === "achievements") {
      setOutput((prevOutput) => [
        ...prevOutput,
        "",
        <div className="output-data">
          ▪ Secured 2nd rank in the academic year 2023–2024.<br/>
          ▪ Solved over 250 problems on LeetCode, demonstrating strong problem-solving skills.<br/>
          ▪ Completed more than 2,000 problems on SkillRack, showcasing a commitment to coding practice and algorithmic thinking.<br/>
        </div>
      ]);
    }
    else if (command.toLowerCase() === "techstack") {
      setOutput((prevOutput) => [
        ...prevOutput,
        "",
        <div className="output-data">
          ▪ Java<br/>
          ▪ HTML, CSS, Javascript<br/>
          ▪ React.JS, Node.JS<br/>
          ▪ SQL<br/>
        </div>
      ]);
    }
    else if (command.toLowerCase() === "linkedin") {
      setOutput((prevOutput) => [
        ...prevOutput,
        <span className="output-data">Opening LinkedIn....</span>,
        ""
      ]);
      setTimeout(() => {
        window.open('https://www.linkedin.com/in/raseeth2004/', '_blank');
      }, 1500);
    }
    else if (command.toLowerCase() === "leetcode") {
      setOutput((prevOutput) => [
        ...prevOutput,
        <span className="output-data">Opening Leetcode....</span>,
        ""
      ]);
      setTimeout(() => {
        window.open('https://leetcode.com/u/raseeth2593/', '_blank');
      }, 1500);
    }
    else if (command.toLowerCase() === "github") {
      setOutput((prevOutput) => [
        ...prevOutput,
        <span className="output-data">Opening Github....</span>,
        ""
      ]);
      setTimeout(() => {
        window.open('https://github.com/Raseeth123', '_blank');
      }, 1500);
    }
    else if (command.toLowerCase() === "clear") {
      setOutput([]);
    }
    else {
      setOutput((prevOutput) => [
        ...prevOutput,
        <span className="error-text">Unknown command: {command}</span>
      ]);
    }
  };

  return (
    <div className="app">
      <pre className="hulk">
        {`
███╗   ███╗██╗   ██╗    ██████╗  ██████╗ ██████╗ ████████╗███████╗ ██████╗ ██╗     ██╗ ██████╗ 
████╗ ████║╚██╗ ██╔╝    ██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝██╔═══██╗██║     ██║██╔═══██╗
██╔████╔██║ ╚████╔╝     ██████╔╝██║   ██║██████╔╝   ██║   █████╗  ██║   ██║██║     ██║██║   ██║
██║╚██╔╝██║  ╚██╔╝      ██╔═══╝ ██║   ██║██╔══██╗   ██║   ██╔══╝  ██║   ██║██║     ██║██║   ██║
██║ ╚═╝ ██║   ██║       ██║     ╚██████╔╝██║  ██║   ██║   ██║     ╚██████╔╝███████╗██║╚██████╔╝
╚═╝     ╚═╝   ╚═╝       ╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝ 
        `}
      </pre>
      <div className="terminal-content">
        <p className="text welcome-text">
          Welcome to my interactive web terminal, Best viewed in Desktop/Laptop. 🖥️
        </p>
        <div className="command-list">
          <p className="text">
            whoami - A quick introduction about me.<br />
            resume - To take a look at my resume.<br />
            projects - To know & view my recent projects.<br />
            achievements - To know my accomplishments till now.<br />
            techstack - To take a look at my skillset.<br />
            linkedin - To view my LinkedIn profile.<br />
            github - To view my GitHub profile.<br />
            leetcode - To check out my LeetCode profile.<br />
            help - To view all the available commands.<br />
            clear - To clear the terminal window.<br />
            Note: The Commands are Case Insensitive.
          </p>
        </div>
        <p className="detroit">
          For a list of available commands, type <span className="highlight-cmd">'help'</span>.
        </p>
        <p className="text">--</p>
        <div className="output-container">
          {output.map((line, index) => (
            <div key={index} className="output-line">
              {line}
            </div>
          ))}
        </div>
        <div className="input-container">
          <span className="prompt">
            <span className="in-domain">@my-portfolio.com:</span>
            <span className="in">$ ~</span>&nbsp;
          </span>
          <input
            type="text"
            className="command-input"
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            autoFocus
            autoComplete="off"
          />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
