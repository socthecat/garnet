import React, {Component} from "react";
import ReactDom from "react-dom";


export default class Table extends Component {


    render() {
        return (
            <div>
                <input
                    type="text"
                    value="Hello!"/>

                <table>
                    {
                        [  {d: '№', s:'Ustroystvo', a:'Model', aa:'IMEI', aaa: 'Client', aaaa:'Status'} ,{a: 'dad', z: 'dsd', x: 'dsd', c: 'dsd', v: 'dsd', b: 'dsd'},
                        ].map((tovR) => {
                            return (<tr>
                                {
                                    Object.keys(tovR).map((key) => {
                                        return (
                                            <td>{tovR[key]}</td>
                                        )
                                    })
                                }
                            </tr>)
                        })
                    })

                </table>
            </div>
        )
    }
}

