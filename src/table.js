import React, {Component} from "react";
import ReactDom from "react-dom";
import "./table.css";

export default class Table extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log('come', this.props)
    }
    render() {
        const { data } = this.props
        return (
            <div className="table-component">
                <table className="zakazi">
                    <tbody>
                    {
                        data && data.map((item, index) => {
                            return (
                                <tr key={index}>
                                    {
                                        Object.keys(item).map((key, index) => {
                                            return (
                                                <td key={index}>{item[key]}</td>
                                            )
                                        })
                                    }
                                </tr>)
                        })

                        // this.props.data.map((tovR, index) => {

                        // })
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

