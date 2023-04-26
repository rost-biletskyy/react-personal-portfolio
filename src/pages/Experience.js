import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="AUG 2022 - ..."
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            FRONT-END DEVELOPER AT SOMBRA
          </h3>
          <p>
            {" "}
            Front end implementation: React, Redux Toolkit, Type Script, SCSS,
            Chakra UI, AWS, JIRA UI part implementation: React, using React
            hooks, React routs, Axios, Redux, SCSS, TS, JS
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="JUN 2022 - AUG 2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            FRONT-END DEVELOPER AT RED ROCKET
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            FRONT-END DEVELOPER AT GRID DYNAMICS
          </h4>

          <p>
            {" "}
            Mentoring Course Web application for a private IT course. Front end
            implementation: React, Redux Toolkit, Type Script, SCSS, Material UI
            UI part implementation: React, using React hooks, React routs,
            Axios, Redux, SCSS, TS, JS
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="FEB 2021 - MAR 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            FRONT-END DEVELOPER AT GRID DYNAMICS
          </h3>
          <p>
            Web application for a private warehouse with goods and the ability
            to manipulate them. Front end implementation: React, Redux Toolkit,
            Type Script, SCSS, Nest JS, MySQL. UI part implementation: React,
            using React hooks, React routs, Axios, Redux, SCSS, TS, JS, MySQL
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            NATIONAL UNIVERSITY LVIV POLITECHNIC
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Lviv, Ukraine</h4>
          <p>BACHELOR'S DEGREE IN СOMPUTER TECHNOLOGIES 2018 - 2022</p>
          <p>MAGISTERDEGREE IN СOMPUTER TECHNOLOGIES 2022 - 2023</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
