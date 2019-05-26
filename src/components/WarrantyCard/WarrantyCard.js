import React, {Component} from 'react';
import './WarrantyCard.css';
import logo from './logo.png';

class WarrantyCard extends Component {
    render() {
        return (
            <div className="WarrantyCard">
                <header>
                    <div className="tools">
                        <div className="block"><img src={logo} className='logotype'/></div>
                        <div className="block2">
                            <h1>Гарантийный талон</h1>
                            <p className="header_text"><b>ID:</b> 0001</p>
                            <p className="header_text"><b>Дата:</b> 23.05.2019</p>
                        </div>
                    </div>
                </header>
                <table className="table1" >
                    <tr><td><b>Номер заказа:</b></td><td colSpan="2">0001</td></tr>
                    <tr><td><b>Устройство:</b></td><td colSpan="2">iPhone</td></tr>
                    <tr><td><b>Модель:</b></td><td colSpan="2">6S, Silver, 32GB</td></tr>
                    <tr><td><b>Серийный номер:</b></td><td colSpan="2">FK1RVB3UHFLT</td></tr>
                    <tr><td><b>IMEI:</b></td><td colSpan="2">353800088609991</td></tr>
                    <tr><td><b>Гарантийный период:</b></td><td>23.05.2019</td><td>06.06.2019</td></tr>
                </table>
                <div className="list-wrapper">
                <ul className="small_list">
                    <li>Гарантия распространяется только на компоненты и запчасти установленные Garnet Service</li>
                    <li>Гарантия не распространяется в случае отсутствия гарантийных пломб, в случае попадание влаги и/или механических повреждений</li>
                </ul>
                </div>
                <table className="table2">
                    <tr>
                        <td>№</td>
                        <td>Наименование работ и запчастей</td>
                        <td>Цена, грн</td>
                        <td>Сумма, грн</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Восстановление платы (контроллер питания)</td>
                        <td>500</td>
                        <td>500</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Рофлян замена</td>
                        <td>1488</td>
                        <td>1488</td>
                    </tr>
                    <tr className="roflan">
                        <td colSpan="3">Итого</td>
                        <td></td>
                    </tr>
                    <tr className="roflan">
                        <td colSpan="3">К оплате</td>
                        <td></td>
                    </tr>
                </table>
                <div className="roflanwrapper">
                    <div>Менеджер _______________ Владислав Петренко</div>
                    <div>_______________ Тестовый Клиент</div>
                </div>
                <div className="roflan-border"></div>
                <header>
                    <div className="tools">
                        <div className="block"><img src={logo} className='logotype'/></div>
                        <div className="block2">
                            <h1>Гарантийный талон</h1>
                            <p className="header_text"><b>ID:</b> 0001</p>
                            <p className="header_text"><b>Дата:</b> 23.05.2019</p>
                        </div>
                    </div>
                </header>
                <table className="table1" >
                    <tr><td><b>Номер заказа:</b></td><td colSpan="2">0001</td></tr>
                    <tr><td><b>Устройство:</b></td><td colSpan="2">iPhone</td></tr>
                    <tr><td><b>Модель:</b></td><td colSpan="2">6S, Silver, 32GB</td></tr>
                    <tr><td><b>Серийный номер:</b></td><td colSpan="2">FK1RVB3UHFLT</td></tr>
                    <tr><td><b>IMEI:</b></td><td colSpan="2">353800088609991</td></tr>
                    <tr><td><b>Гарантийный период:</b></td><td>23.05.2019</td><td>06.06.2019</td></tr>
                </table>
                <div className="list-wrapper">
                    <ul className="small_list">
                        <li>Гарантия распространяется только на компоненты и запчасти установленные Garnet Service</li>
                        <li>Гарантия не распространяется в случае отсутствия гарантийных пломб, в случае попадание влаги и/или механических повреждений</li>
                    </ul>
                </div>
                <table className="table2">
                    <tr>
                        <td>№</td>
                        <td>Наименование работ и запчастей</td>
                        <td>Цена, грн</td>
                        <td>Сумма, грн</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Восстановление платы (контроллер питания)</td>
                        <td>500</td>
                        <td>500</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Рофлян замена</td>
                        <td>1488</td>
                        <td>1488</td>
                    </tr>
                    <tr className="roflan">
                        <td colSpan="3">Итого</td>
                        <td></td>
                    </tr>
                    <tr className="roflan">
                        <td colSpan="3">К оплате</td>
                        <td></td>
                    </tr>
                </table>
                <div className="roflanwrapper">
                    <div>Менеджер _______________ Владислав Петренко</div>
                    <div>_______________ Тестовый Клиент</div>
                </div>
            </div>
        );
    }
}

export default WarrantyCard;