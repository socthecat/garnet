import React, {Component} from 'react';
import logo from '../../logo.svg';
import './App.css';
import App2 from  '../App2/App2.js';
class App extends Component {
    constructor() {
        super();
        this.state = {
            login: true
        };
    }
    showLayout(){
        this.setState({login:false});
    }
    render() {
        if (this.state.login){
            return (
                <div className="greeting" id="greeting">
                    <div className="greeting-inner">
                    <h1>Garnet.</h1>
                    <button onClick={this.showLayout.bind(this)} id="importantButton">Log in</button>
                    </div>
                </div>
            );
        }
        else {
            return (
                <App2 />
            );
        }
    }
}

export default App;
