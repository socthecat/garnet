import React, {Component} from 'react';
import Popup from '../popup/popup'
import '../../table.css';

export default class MainComponent extends Component {
    constructor(props){
        super(props);
        this.state = { showPopup: false, value: 'tut budet text' };
        this.togglePopup = this.togglePopup.bind(this)
    }

    togglePopup(value) {
        console.log('sadasdasdsa', value)

        this.setState({
            showPopup: !this.state.showPopup,
            value
        });
        if (value) {
            this.props.func(value)
        }

    }

    render() {
        return (
            <div>
                <button className="data-button" onClick={() => {this.togglePopup()}}> Add data </button>
                {this.state.showPopup ?
                    <Popup

                        closePopup={this.togglePopup}
                    />

                    : null
                }

            </div>

        )
    }
};
