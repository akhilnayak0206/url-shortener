import React, { Component } from "react";
import "./App.css";
import { Card, Input, Button, Icon, Tooltip } from "antd";
import { CopyToClipboard } from "react-copy-to-clipboard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      urlText: "",
      showUrl: false,
      urlFinal: "",
      visibleTooltip: false
    };
  }

  onClickGet = () => {
    console.log("state", this.state.urlText);
    const vinay = this.state.urlText;
    fetch("http://localhost:7000/api/item", {
      method: "post",
      body: JSON.stringify({ originalUrl: vinay }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(function(response) {
        console.log("response", response);
        console.log("responseJson", response);
        if (response.status === 200) {
          return response.json();
        } else {
          alert("Wrong Url");
        }
      })
      .then(data => {
        if (JSON.stringify(data)) {
          this.setState({
            showUrl: true
          });
          console.log("look", JSON.stringify(data));
          this.setState({ urlFinal: data.shortUrl });
        }
      })
      .catch(err => {
        console.log("error", err);
      });
  };

  onReturnGet = () => {
    this.setState({
      showUrl: false,
      urlText: "",
      visibleTooltip: false,
      urlFinal: ""
    });
  };

  render() {
    console.log(this.state, "jelklnlssf");
    return (
      <div className="App">
        <h1 style={{ flex: "10%", fontFamily: "Snell Roundhand, cursive" }}>
          URL SHORTENER
        </h1>
        <div className="Display-Center" style={{ flex: "90%" }}>
          {!this.state.showUrl ? (
            <div className="Card-Center">
              <Input
                className="Input-Center"
                placeholder="Enter URL"
                onChange={e => this.setState({ urlText: e.target.value })}
              />
              <Button
                className="Button-Center"
                type="primary"
                onClick={() => this.onClickGet()}
              >
                Click For Magic!
              </Button>
            </div>
          ) : null}
          {this.state.showUrl ? (
            <Card className="Card-Center" hoverable>
              <Input
                className="Input-Center"
                placeholder="URL will be shown shortly"
                value={this.state.urlFinal}
                disabled
                addonAfter={
                  <Tooltip
                    placement="top"
                    title={"Copied to Clipboard"}
                    visible={this.state.visibleTooltip}
                  >
                    <CopyToClipboard
                      text={this.state.urlFinal}
                      onCopy={() =>
                        this.setState({ copied: true, visibleTooltip: true })
                      }
                    >
                      <Button icon="copy" />
                    </CopyToClipboard>
                  </Tooltip>
                }
              />
              <Button
                className="Button-Center"
                type="primary"
                onClick={() => this.onReturnGet()}
              >
                Click To Do Magic Again!
              </Button>
            </Card>
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
