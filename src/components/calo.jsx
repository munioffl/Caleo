import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calendar.css";

function Caleo() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <div>
        <div style={{ marginRight: "75%", marginTop: "3%", color: "white" }}>
          20&#8451; | Cloudy 🌥️
          <br />
        </div>
        <div
          style={{
            marginRight: "78.5%",
            marginTop: "2%",
            fontSize: 25,
            color: "white",
          }}
        >
          Sunday
        </div>
        <div
          style={{
            fontSize: 57,
            fontWeight: "bold",
            color: "white",
            marginTop: "2%",
            marginRight: "70%",
          }}
        >
          {new Intl.DateTimeFormat("en-US", {
            day: "numeric",
          }).format(Date.now())}{" "}
          {new Intl.DateTimeFormat("en-US", {
            month: "short",
          }).format(Date.now())}
        </div>
        <Calendar onChange={onChange} value={value} />
      </div>
      <div
        style={{ marginTop: "-40%", marginLeft: "65%", textAlign: "initial" }}
      >
        <div
          style={{
            position: "absolute",
            width: 18,
            height: 18,
            // left: 1447.85,
            top: 204,
            background: "#FF4268",
            marginTop: "-15%",
            marginLeft: "25%",
            borderRadius: 4,
            transform: "rotate(60.5deg)",
            clipPath: " polygon(0 0, 100% 0, 100% 100%)",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            width: 18,
            height: 18,
            // left: 1447.85,
            top: 204,
            background: "#FF4268",
            marginTop: "-15%",
            marginLeft: "27%",
            borderRadius: 4,
            transform: "rotate(60.5deg)",
            clipPath: " polygon(0 0, 100% 0, 100% 100%)",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            width: 18,
            height: 18,
            // left: 1447.85,
            top: 204,
            background: "#FF4268",
            marginTop: "-15%",
            marginLeft: "29%",
            borderRadius: 4,
            transform: "rotate(60.5deg)",
            clipPath: " polygon(0 0, 100% 0, 100% 100%)",
          }}
        ></div>
        <div>
          <h1 style={{ color: "#FF2CAD" }}>EVENTS TODAY</h1>
          <h5
            style={{
              color: "rgba(29, 29, 29, 0.5)",
              marginTop: -10,
              letterSpacing: 3,
              fontWeight: "normal",
            }}
          >
            3 TASKS
          </h5>
        </div>
        <div
          style={{
            position: "absolute",
            width: 4,
            height: 70,
            left: 770,
            top: 280,
            background: "#FFDB20",
            borderRadius: 76,
          }}
        >
          <h5
            style={{
              color: "rgba(29, 29, 29, 0.5)",
              marginLeft: 25,
              marginTop: "unset",
              letterSpacing: 2.5,
              fontWeight: "normal",
              position: "fixed",
            }}
          >
            09:00 AM
          </h5>
          <h3
            style={{
              position: "fixed",
              marginLeft: 27,
              marginTop: "2%",
              fontWeight: 500,
            }}
          >
            Catchup With Product Design Team
          </h3>
        </div>
        <div
          style={{
            position: "absolute",
            width: 4,
            height: 70,
            left: 770,
            top: 380,
            background: "rgba(182, 255, 170, 1)",
            borderRadius: 76,
          }}
        >
          <h5
            style={{
              color: "rgba(29, 29, 29, 0.5)",
              marginLeft: 25,
              marginTop: "unset",
              letterSpacing: 2.5,
              fontWeight: "normal",
              position: "fixed",
            }}
          >
            12:10 PM
          </h5>
          <h3
            style={{
              position: "fixed",
              marginLeft: 27,
              marginTop: "2%",
              fontWeight: 500,
            }}
          >
            Project Paradox Discussion
          </h3>
        </div>
        <div
          style={{
            position: "absolute",
            width: 4,
            height: 70,
            left: 770,
            top: 480,
            background: "rgba(170, 178, 255, 1)",
            borderRadius: 76,
          }}
        >
          <h5
            style={{
              color: "rgba(29, 29, 29, 0.5)",
              marginLeft: 25,
              marginTop: "unset",
              letterSpacing: 2.5,
              fontWeight: "normal",
              position: "fixed",
            }}
          >
            07:00 PM
          </h5>
          <h3
            style={{
              position: "fixed",
              marginLeft: 27,
              marginTop: "2%",
              fontWeight: 500,
            }}
          >
            Daily Dev Challenge
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Caleo;
