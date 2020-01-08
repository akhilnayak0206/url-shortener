import React, { Component } from 'react';
import './App.css';
import { Card, Input, Button, Tooltip } from 'antd';
import { CopyToClipboard } from 'react-copy-to-clipboard';

class App extends Component {
  constructor() {
    super();
    this.state = {
      urlText: '',
      showUrl: false,
      urlFinal: '',
      visibleTooltip: false
    };
  }

  onClickGet = () => {
    const originalUrl = this.state.urlText;
    fetch('http://localhost:7000/api/item', {
      method: 'post',
      body: JSON.stringify({ originalUrl }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(function(response) {
        if (response.status === 200) {
          return response.json();
        } else {
          alert('Please Enter Valid Url');
        }
      })
      .then(data => {
        if (JSON.stringify(data)) {
          this.setState({
            showUrl: true
          });
          this.setState({ urlFinal: data.shortUrl });
        }
      })
      .catch(err => {
        alert('Error from our side. Please try again');
        console.log('error', err);
      });
  };

  onReturnGet = () => {
    this.setState({
      showUrl: false,
      urlText: '',
      visibleTooltip: false,
      urlFinal: ''
    });
  };

  render() {
    return (
      <div className='App'>
        <h1 style={{ flex: '10%', fontFamily: 'Snell Roundhand, cursive' }}>
          URL SHORTENER
        </h1>
        <div className='Display-Center' style={{ flex: '90%' }}>
          {!this.state.showUrl ? (
            <div className='Card-Center'>
              <Input
                className='Input-Center'
                placeholder='Enter URL'
                onChange={e => this.setState({ urlText: e.target.value })}
              />
              <Button
                className='Button-Center'
                type='primary'
                onClick={() => this.onClickGet()}
              >
                Click For Magic!
              </Button>
            </div>
          ) : null}
          {this.state.showUrl ? (
            <Card className='Card-Center' hoverable>
              <Input
                className='Input-Center'
                placeholder='URL will be shown shortly'
                value={this.state.urlFinal}
                disabled
                addonAfter={
                  <Tooltip
                    placement='top'
                    title={'Copied to Clipboard'}
                    visible={this.state.visibleTooltip}
                  >
                    <CopyToClipboard
                      text={this.state.urlFinal}
                      onCopy={() =>
                        this.setState({ copied: true, visibleTooltip: true })
                      }
                    >
                      <Button icon='copy' />
                    </CopyToClipboard>
                  </Tooltip>
                }
              />
              <Button
                className='Button-Center'
                type='primary'
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
