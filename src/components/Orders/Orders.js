import React from 'react';
import MainComponent from "../MainComponent/MainComponent"
import Table from '../../table';
import api from 'axios'


class Orders extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        api.get('http://localhost:4000/api/data').then((res) => {
            this.setState({
                data: res.data
            })
        })
    }



    addData = (data) => {
        console.log('addDAta', data, [...this.state.data, data])
        this.setState({
            data: [...this.state.data, data]
        }, () => {
            api.post('http://localhost:4000/api/data', this.state.data).then((res) => {
                console.log(res);
            })
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

export default Orders;
