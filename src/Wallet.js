import {
  Table,
  TableBody,
  TableRow,
  TableRowColumn,
} from 'material-ui';
import React, { Component } from 'react';

import {IntlProvider,FormattedNumber} from 'react-intl';

class Wallet extends Component {

    constructor(props){
        super(props);
        this.state = {initialUSD: 1000000};
        this.getInstantValue = this.getInstantValue.bind(this);
        this.calculateSum = this.calculateSum.bind(this);
    }

    getInstantValue(){
        return this.calculateSum("USD") + this.props.btcusd*this.calculateSum("BTC");
    }

    calculateSum(type){
        var sum = type==="USD" ? this.state.initialUSD : 0;

        for (var i in this.props.transactions){
            var currentTrans = this.props.transactions[i];
            sum += currentTrans.type==="BUY" ? (type==="USD" ? (-1)*currentTrans.usd : currentTrans.btc) : (type==="USD" ? currentTrans.usd : (-1)*currentTrans.btc);
        }

        return sum;
    }

    render() {
        const style = {
            width: "48%",
            "display": "inline-block",
            margin: "0 1% 0 1%"
        };
        return (
            <IntlProvider locale="en-GB">
                <div className="Wallet" style={style}>
                    <Table>
                        <TableBody displayRowCheckbox={false}>
                            <TableRow>
                                <TableRowColumn>
                                    Bitcoins
                                </TableRowColumn>
                                <TableRowColumn>
                                    <FormattedNumber value={this.calculateSum("BTC")}/> BTC.
                                </TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn>
                                    Cash
                                </TableRowColumn>
                                <TableRowColumn>
                                    <FormattedNumber value={this.calculateSum("USD")}/> USD.
                                </TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn>
                                    Current Capital
                                </TableRowColumn>
                                <TableRowColumn>
                                    <FormattedNumber value={this.getInstantValue()}/> USD.
                                </TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn>
                                    BTC/USD
                                </TableRowColumn>
                                <TableRowColumn>
                                    <FormattedNumber value={this.props.btcusd}/>
                                </TableRowColumn>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </IntlProvider>
        );
    }
}

export default Wallet;
