import React from 'react';
import './App.css' ;
import MainComponent from "./components/MainComponent/MainComponent"
import Table from './table';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {d: '№', s:'Ustroystvo', a:'Model', aa:'IMEI', aaa: 'Client', aaaa:'Status'} ,
                {a: 'dad', z: 'dsd', x: 'dsd', c: 'dsd', v: 'dsd', b: 'dsd'},
            ]};
    }
    addData = (data) => {
        this.setState({
            data: [...this.state.data, data],
        });
    }

    render() {
        return (
            <div>
                <Table data={this.state.data}/>
                <MainComponent func={this.addData}/>
            </div>
        );
    }
}

export default App;
