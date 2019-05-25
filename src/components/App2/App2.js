import React, {Component} from 'react';
import Admission from '../Admission/Admission';
import Links from '../Links/Links';
import Orders from '../Orders/Orders';
import Warranty from '../Warranty/Warranty';
class App2 extends Component {
    constructor() {
        super();
        this.state = {menuItem: 0}
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
                <div>
                    <header>
                        <ul>
                            <li onClick={this.setMenuItem1.bind(this)}>Ssilki</li>
                            <li onClick={this.setMenuItem2.bind(this)}>Zakazi</li>
                            <li onClick={this.setMenuItem3.bind(this)}>Talon na edu</li>
                            <li onClick={this.setMenuItem4.bind(this)}>Akt pizdeca</li>
                        </ul>
                    </header>
                    <Links />
                </div>
            );
        }
        if (this.state.menuItem === 2) {
            return(
                <div>
                    <header>
                        <ul>
                            <li onClick={this.setMenuItem1.bind(this)}>Ssilki</li>
                            <li onClick={this.setMenuItem2.bind(this)}>Zakazi</li>
                            <li onClick={this.setMenuItem3.bind(this)}>Talon na edu</li>
                            <li onClick={this.setMenuItem4.bind(this)}>Akt pizdeca</li>
                        </ul>
                    </header>
                    <Orders />
                </div>
            );
        }
        if (this.state.menuItem === 3) {
            return(
                <div>
                    <header>
                        <ul>
                            <li onClick={this.setMenuItem1.bind(this)}>Ssilki</li>
                            <li onClick={this.setMenuItem2.bind(this)}>Zakazi</li>
                            <li onClick={this.setMenuItem3.bind(this)}>Talon na edu</li>
                            <li onClick={this.setMenuItem4.bind(this)}>Akt pizdeca</li>
                        </ul>
                    </header>
                    <Warranty />
                </div>
            );
        }
        if (this.state.menuItem === 4) {
            return(
                <div>
                    <header>
                        <ul>
                            <li onClick={this.setMenuItem1.bind(this)}>Ssilki</li>
                            <li onClick={this.setMenuItem2.bind(this)}>Zakazi</li>
                            <li onClick={this.setMenuItem3.bind(this)}>Talon na edu</li>
                            <li onClick={this.setMenuItem4.bind(this)}>Akt pizdeca</li>
                        </ul>
                    </header>
                    <Admission />
                </div>
            );
        }
    }
}

export default App2;