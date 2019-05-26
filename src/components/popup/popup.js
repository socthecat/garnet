import React, {Component} from 'react';
import './popup.css';

export default class Popup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dara: {
                num: '',
                device: '',
                model: '',
                imei: '',
                client: '',
                status: '',
                name: ''
            },

        }
    }
    changeNum = (e) => {
        this.setState({
            dara: {...this.state.dara, num: e.target.value}
        })
    };
    changeDevice = (e) => {
        this.setState({
            dara: {...this.state.dara, device: e.target.value}
        })
    };
    changeModel = (e) => {
        this.setState({
            dara: {...this.state.dara, model: e.target.value}
        })
    };
    changeImei = (e) => {
        this.setState({
            dara: {...this.state.dara, imei: e.target.value}
        })
    };
    changeClient = (e) => {
        this.setState({
            dara: {...this.state.dara, client: e.target.value}
        })
    };
    changeStatus = (e) => {
        this.setState({
            dara: {...this.state.dara, status: e.target.value}
        })
    };

    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <div><label>#</label>
                        <input type="text" onChange={this.changeNum}/></div>
                    <div><label>Device</label>
                        <input type="text" onChange={this.changeDevice}/></div>
                    <div><label>Model</label>
                    <input type="text" onChange={this.changeModel}/></div>
                        <div><label>IMEI</label>
                    <input type="text" onChange={this.changeImei}/></div>
                            <div><label>Client</label>
                    <input type="text" onChange={this.changeClient}/></div>
                                <div><label className="status">Status</label>
                                    <div className="inline">
                    <input type="radio" name="status" value="active" onChange={this.changeStatus}/> Active<br/>
                    <input type="radio" name="status" value="done" onChange={this.changeStatus}/> Done<br/>
                                        <input type="radio" name="status" value="canceled" onChange={this.changeStatus}/> Canceled<br/></div></div>
                    <button onClick={() => {
                        console.log(this.props)
                     this.props.closePopup(this.state.dara)
                    }}>submit</button>
                </div>
            </div>
        );
    }
}

