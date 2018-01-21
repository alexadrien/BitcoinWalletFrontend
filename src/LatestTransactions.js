import 'whatwg-fetch';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
} from 'material-ui';
import React, { Component } from 'react';

import {IntlProvider} from 'react-intl';

import RecordItem from './RecordItem';

class LatestTransactions extends Component {

    render() {
        const records = this.props.transactions;
        const btcusd = this.props.btcusd ? this.props.btcusd : 0;
        const tableStyle = {
            width: "100%"
        }
        return (
            <div className="LatestTransactions">
                <IntlProvider locale="en-GB">
                    <Table style={tableStyle}>
                        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                            <TableRow>
                                <TableHeaderColumn className="date">DATE</TableHeaderColumn>
                                <TableHeaderColumn className="usd-value">USD</TableHeaderColumn>
                                <TableHeaderColumn className="btc-value">BTC</TableHeaderColumn>
                                <TableHeaderColumn className="type">TYPE</TableHeaderColumn>
                                <TableHeaderColumn className="comment">Comment</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {records.map(function(name, index){
                                return <RecordItem key={index} date={records[index].timestamp} usdValue={records[index].usd} btcValue={records[index].btc} type={records[index].type} btcusd={btcusd}/>;
                            })}
                        </TableBody>
                    </Table>
                </IntlProvider>
            </div>
        );
    }
}

export default LatestTransactions;
