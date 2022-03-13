import React, { Component } from "react";
import "./App.css";

class App extends Component {
    state = {
        helloMessage: "영화 소개 프로젝트",
        count:0
    };
    buttonC = () => {
        this.setState({helloMessage: "Button Click"});
    };
    countUp = () => {
        this.setState({
            count:this.state.count + 1
        });
    };
    countDown = () => {
        this.setState({
            count:this.state.count - 1
        });
    }
    render() {
        return (
            <div className="App">
                <PropsTestClass count={this.state.count} />
                <div><span style={{color:"red"}}>{this.state.helloMessage}</span></div>
                <div>
                    <button onClick={this.buttonC}>Click Me</button>
                </div>
                <div>
                    <button onClick={this.countUp}>count up</button>
                </div>
                <div>
                    <button onClick={this.countDown}>count down</button>
                </div>
            </div>

        );
    }
}

class PropsTestClass extends Component {
  render() {  
    return (
      <div>
        <div><span>Hello I am PropsTestClass</span></div>
        <div>받은 Props의 데이터는 {this.props.count}</div> 
      </div>
    );

  };
}

export default App;
