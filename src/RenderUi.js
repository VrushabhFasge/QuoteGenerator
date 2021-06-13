import { useState, useEffect } from "react";
import "./RenderUi.css";
import { Tooltip } from "react-tippy";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const RenderUi = () => {
  const [quotes, setQuotes] = useState("Talk is CHEAP. Show me the CODE");
  const [author, setAuthor] = useState("Linus Torvalds");
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  var num = Math.floor(Math.random() * 1000);

  function ClickHandler() {
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((json) => {
        setQuotes(json[num].text);
        setAuthor(json[num].author);
      });
  }

  return (
    <div>
      <div
        className="Center TimeShow"
        style={{
          backgroundColor: "blue",
          paddingTop: "10px",
          fontSize: "20px"
        }}
      >
        {time}
      </div>
      <div className="wrapper Center">
        <div className="GlassMorphism">
          <div className="QuoteTxt">"{quotes}"</div>
          <div className="AuthorTxt">-{author}</div>
          <div className="btn">
            <button onClick={ClickHandler}>generate</button>
          </div>
        </div>
        <div className="footer">
          <ul>
            <li>
              <a href="https://www.instagram.com/_dope_indian_dude_/">
                <Tooltip title="Instagram" className="paddingTop">
                  <InstagramIcon />
                </Tooltip>
              </a>
            </li>

            <li>
              <a href="https://twitter.com/VrushabhFasge">
                <Tooltip title="Twitter">
                  {" "}
                  <TwitterIcon />
                </Tooltip>
              </a>
            </li>

            <li>
              <a href="https://www.linkedin.com/in/vrushabh-fasge-1b39a4190/?originalSubdomain=in">
                <Tooltip title="LinkedIn" class="paddingTop">
                  <LinkedInIcon />
                </Tooltip>
              </a>
            </li>

            <li>
              <a href="https://github.com/vrushabhFasge/">
                <Tooltip title="GitHub" class="paddingTop">
                  {" "}
                  <GitHubIcon />
                </Tooltip>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RenderUi;
