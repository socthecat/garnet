import React, {Component} from 'react';
import '../../App.css';

export default class Popup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
        this.changeValue = this.changeValue.bind(this)
    }

    changeValue(e) {
        this.setState({
            value: e.target.value
        })
    }

    render() {
        return (
            <div className='popup'>
                <div className='popup\_inner'>
                    <h1>vvedite dannye plz</h1>
                    <input type="text" onChange={this.changeValue}/>
                    <button onClick={() => {
                     this.props.closePopup(this.state.value)
                    }}>submit</button>
                </div>
            </div>
        );
    }
}

