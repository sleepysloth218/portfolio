import React from "react";
import "./Popup.css";
import { Close } from "@mui/icons-material";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { content: "" };
    this.getMarkdownFile();
  }
  // FILE READER CODE REFERENCE: https://stackoverflow.com/questions/55830414/how-to-read-text-file-in-react

  // FILE BLOB REFERENCE: https://stackoverflow.com/questions/11876175/how-to-get-a-file-or-blob-from-an-object-url

  getMarkdownFile = async () => {
    const reader = new FileReader();
    let text = "";
    reader.onload = async (e) => {
      text = e.target.result;
      this.setState({ content: text });
    };
    reader.readAsText(
      await fetch(
        process.env.PUBLIC_URL + "/md-pages/" + this.props.data.page
      ).then((result) => result.blob())
    );
  };

  render() {
    return (
      <div
        className={`Popup ${this.props.shown ? "show" : "hidden"}`}
        onPointerDown={(e) => {
          e.stopPropagation();
          this.props.togglePopup(false);
        }}
        onPointerOver={(e) => e.stopPropagation()}
      >
        <div
          className="popup-window"
          onPointerDown={(e) => e.stopPropagation()}
        >
          <div
            className="close-button"
            onPointerDown={(e) => {
              e.stopPropagation();
              e.preventDefault();
              this.props.togglePopup(false);
            }}
          >
            <Close />
          </div>
          <div className="popup-content-wrapper">
            <div className="popup-content">
              <div className="popup-header">
                <h1>{this.props.data.title}</h1>
              </div>

              <ReactMarkdown
                children={this.state.content}
                remarkPlugins={[remarkGfm]}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
