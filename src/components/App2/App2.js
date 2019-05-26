import React, {Component} from 'react';
import Admission from '../Admission/Admission';
import Links from '../Links/Links';
import Orders from '../Orders/Orders';
import Warranty from '../Warranty/Warranty';
import './App2.css';
class App2 extends Component {
    constructor() {
        super();
        this.state = {menuItem: 2}
    }
    setMenuItem1 () {
        this.setState({menuItem: 0});
    }
    setMenuItem2 () {
        this.setState({menuItem: 2});
    }
    setMenuItem3 () {
        this.setState({menuItem: 3});
    }
    setMenuItem4 () {
        this.setState({menuItem: 4});
    }
    render() {
        if (this.state.menuItem === 0) {
            return(
                <div className="app-wrapper">
                    <header>
                        <ul className="nav-list">
                            <div>
                            <li onClick={this.setMenuItem1.bind(this)}>Links</li>
                            <li onClick={this.setMenuItem2.bind(this)}>Orders</li>
                            <li onClick={this.setMenuItem3.bind(this)}>Warranty Cards</li>
                            <li onClick={this.setMenuItem4.bind(this)}>Admission Act</li>
                            </div>
                        </ul>
                    </header>
                    <Links />
                </div>
            );
        }
        if (this.state.menuItem === 2) {
            return(
                <div className="app-wrapper">
                    <header>
                        <ul className="nav-list">
                            <div>
                            <li onClick={this.setMenuItem1.bind(this)}>Links</li>
                            <li onClick={this.setMenuItem2.bind(this)}>Orders</li>
                            <li onClick={this.setMenuItem3.bind(this)}>Warranty Cards</li>
                            <li onClick={this.setMenuItem4.bind(this)}>Admission Act</li>
                            </div>
                        </ul>
                    </header>
                    <Orders />
                </div>
            );
        }
        if (this.state.menuItem === 3) {
            return(
                <div className="app-wrapper">
                    <header>
                        <ul className="nav-list">
                            <div>
                            <li onClick={this.setMenuItem1.bind(this)}>Links</li>
                            <li onClick={this.setMenuItem2.bind(this)}>Orders</li>
                            <li onClick={this.setMenuItem3.bind(this)}>Warranty Cards</li>
                            <li onClick={this.setMenuItem4.bind(this)}>Admission Act</li>
                            </div>
                        </ul>
                    </header>
                    <Warranty />
                </div>
            );
        }
        if (this.state.menuItem === 4) {
            return(
                <div className="app-wrapper">
                    <header>
                        <ul className="nav-list">
                            <div>
                            <li onClick={this.setMenuItem1.bind(this)}>Links</li>
                            <li onClick={this.setMenuItem2.bind(this)}>Orders</li>
                            <li onClick={this.setMenuItem3.bind(this)}>Warranty Cards</li>
                            <li onClick={this.setMenuItem4.bind(this)}>Admission Act</li>
                            </div>
                        </ul>
                    </header>
                    <Admission />
                </div>
            );
        }
    }
}

export default App2;