import React, { Component } from "react";
import "./App.css";
import { Card, Input, Button, Icon } from "antd";

class App extends Component {
  constructor() {
    super();
    this.state = {
      disabledInput: false,
      urlText: "",
      showUrl: false,
    };
  }

  onClickGet = () =>{
    this.setState({
      showUrl:true
    })
  }

  onReturnGet = () =>{
    this.setState({
      showUrl:false
    })
  }

  render() {
    return (
      <div className="App">
        <h1 style={{flex:'10%', fontFamily: "Snell Roundhand, cursive"}}>URL SHORTENER</h1>
      <div className="Display-Center" style={{flex:'90%'}} >
      {!this.state.showUrl ? (
          <div className="Card-Center">
            <Input
              className="Input-Center"
              placeholder="Enter URL"
              onChange={urlText => this.setState({ urlText })}
              disabled={this.state.disabledInput}
            />
            <Button className="Button-Center" type="primary" onClick={()=>this.onClickGet()} >
              Click For Magic!
            </Button>
          </div>
        ) : null}
        {this.state.showUrl ? (
          <Card className="Card-Center" hoverable>
          <Input
            className="Input-Center"
            placeholder="URL will be shown shortly"
            onChange={urlText => this.setState({ urlText })}
            disabled
            addonAfter={<Icon type="copy" />}
          />
          <Button className="Button-Center" type="primary" onClick={()=>this.onReturnGet()} >
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
