import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import TelegramIcon from "@material-ui/icons/Telegram";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import Link from "@material-ui/core/Link";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Rostyk</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <Link href="https://t.me/RostBiletskyy" target="_blank">
            <TelegramIcon />
          </Link>
          <Link
            href="https://www.linkedin.com/in/rostyk-biletskyy-25bb28203/"
            target="_blank"
          >
            <LinkedInIcon />
          </Link>
          <Link
            href="https://mail.google.com/mail/u/0/?fs=1&to=bilka2001@gmail.com&su=Hello%20Rostyk&body=This%20is%20my%20message&tf=cm"
            target="_blank"
          >
            <EmailIcon />
          </Link>
          <Link href="https://github.com/rost-biletskyy" target="_blank">
            <GithubIcon />
          </Link>
          <Link href="https://drive.google.com/file/d/18iXgDKzx56oMEsuUgu767eC1xFrRn5c5/view?usp=sharing" target="_blank">
            <AssignmentIndIcon />
          </Link>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Angular, Redux, HTML, CSS, React Native, Flutter, NPM,
              Ionic, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, Java Spring, .NET, ExpressJS, GraphQL, ApolloServer,
              MySQL, MongoDB, DynamoDB, DigitalOcean, AWS S3, MS SQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C#, C, C++, TypeScript, Go</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
