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
      `@my-portfolio.com:~$ ${command}`
    ]);
    if (command.toLowerCase() === "whoami") {
      setOutput((prevOutput) => [
        ...prevOutput,
        "",
        <div className="container">
          <div>
            <img className="my-pic" src="portfolio_userimage.jpeg" alt="my-image" />
          </div>
          <div>
            <p className="text">
              Hello everyone! 😊 I'm Sheik Raseeth Ansar.A from Tirunelveli, currently pursuing my third year of B.Tech in Information Technology at National Engineering College, Kovilpatti. I maintain an excellent academic record with a CGPA of 9.2 up to my fourth semester.
            </p>
          </div>
        </div>
      ]);
    }
    else if (command.toLowerCase() === "help") {
      setOutput((prevOutput) => [
        ...prevOutput,
        "",
        <p className="output-data">
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
      </p>
      ]);
    }
    else if (command.toLowerCase() === "resume") {
      setOutput((prevOutput) => [
        ...prevOutput,
        "",
        "Download my resume:",
        <div key="resume-link" className="resume-link">
          <a href="sheik raseeth ansar-resume.pdf" download="sheik raseeth ansar-resume.pdf" target="_blank" rel="noopener noreferrer" className="download-link">
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
        <div>
          <a href="https://raseeth123.github.io/Restaurant/" target="_blank" rel="noopener noreferrer" className="download-link">
            ▪ Restaurant Website - Clean and responsive static restaurant webpage.
          </a><br/>
          <a href="https://raseeth123.github.io/Countdown/" target="_blank" rel="noopener noreferrer" className="download-link">
            ▪ New Year Countdown - Dynamic countdown timer to New Year.
          </a><br/>
          <a href="https://raseeth123.github.io/Password_Generator/" target="_blank" rel="noopener noreferrer" className="download-link">
            ▪ Password Generator - Secure random password generation tool.
          </a><br/>
          <a href="https://raseeth123.github.io/Weather_app/" target="_blank" rel="noopener noreferrer" className="download-link">
            ▪ Weather App - Real-time weather information using OpenWeatherMap API.
          </a><br/>
          <a href="https://streamax-sra-raseeth.vercel.app/" target="_blank" rel="noopener noreferrer" className="download-link">
            ▪ StreaMax - Modern video streaming platform with optimized content delivery.
          </a><br/>
          <a href="https://wall-e-6974f.web.app/" target="_blank" rel="noopener noreferrer" className="download-link">
            ▪ WALL-E - AI-powered SaaS platform with Firebase integration for development tools.
          </a>
        </div>,
        ""
      ]);
    }
    else if(command.toLowerCase()==="achievements"){
      setOutput((prevOutput) => [
        ...prevOutput,
        "",
        <p className="output-data">
          ▪ Secured 2nd rank in the academic year 2023–2024.<br/>
          ▪ Solved over 250 problems on LeetCode, demonstrating strong problem-solving skills.<br/>
          ▪ Completed more than 2,000 problems on SkillRack, showcasing a commitment to coding practice and algorithmic thinking.<br/>
        </p>
      ]);
    }
    else if(command.toLowerCase()==="techstack"){
      setOutput((prevOutput) => [
        ...prevOutput,
        "",
        <p className="output-data">
           ▪ Java<br/>
           ▪ HTML,CSS,Javascript<br/>
           ▪ React.JS,Node.JS<br/>
           ▪ SQL<br/>
        </p>
      ]);
    }
    else if(command.toLowerCase()==="linkedin"){
      setOutput((prevOutput) => [
        ...prevOutput,
        "Opening LinkedIn....",
        ""
      ]);
      setTimeout(() => {
        window.open('https://www.linkedin.com/in/raseeth2004/','_blank');
      }, 3000);
    }
    else if(command.toLowerCase()==="leetcode"){
      setOutput((prevOutput) => [
        ...prevOutput,
        "Opening Leetcode....",
        ""
      ]);
      setTimeout(() => {
        window.open('https://leetcode.com/u/raseeth/','_blank');
      }, 3000);
    }
    else if(command.toLowerCase()==="github"){
      setOutput((prevOutput) => [
        ...prevOutput,
        "Opening Github....",
        ""
      ]);
      setTimeout(() => {
        window.open('https://github.com/Raseeth123','_blank');
      }, 3000);
    }
    else if(command.toLowerCase() === "clear"){
      setOutput([]);
    }
    else {
      setOutput((prevOutput) => [
        ...prevOutput,
        `Unknown command: ${command}`
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
      <p className="text">
        Welcome to my interactive web terminal 🖥️<br />
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
        <br />
      </p>
      <p className="detroit">
        For a list of available commands, type <span className="highlight-cmd">'help'</span>.
        <br/>
      </p>
      <p className="text">--</p>
      <div className="output-data">
        {output.map((line, index) => (
          <div key={index} style={{ marginBottom: "0.5em" }}>
            <p>{line}</p>
          </div>
        ))}
      </div>
      <div className="input-data">
        <p className="in text">
          <span className="in-domain">@my-protfolio.com:</span>$ ~&nbsp;
        </p>
        <input type="text" id="input-box" className="text" value={input} onChange={handleInputChange} onKeyDown={handleKeyDown} autoFocus autoComplete="off"/>
      </div>
    </div>
  );
};

export default Terminal;
