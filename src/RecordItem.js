import { TableRow, TableRowColumn } from 'material-ui';
import React, { Component } from 'react';

import {FormattedRelative,FormattedNumber} from 'react-intl';

class RecordItem extends Component {

    constructor(props){
        super(props);
        this.checkColor = this.checkColor.bind(this);
        this.checkComment = this.checkComment.bind(this);
        this.checkType = this.checkType.bind(this);
    }

    checkColor(type) {
        var color = "";
        if (type){
            color = "green";
        } else {
            color = "red";
        }
        return {backgroundColor: color};
    }

    checkComment() {
        if (this.props.type==="BUY"){
            if (this.props.btcusd > this.props.usdValue){
                return "Instant value is superior !! Sell one";
            }
        } else if (this.props.type==="SELL"){
            if (this.props.btcusd < this.props.usdValue){
                return "Instant value is inferior !! Buy One";
            }
        }
        return "Nothing to say";
    }

    checkType(){
        if (this.props.type){
            return "BUY";
        } else {
            return "SELL";
        }
    }

    render() {
        var style = this.checkColor(this.props.type);
        return (
            <TableRow className="RecordItem">
                <TableRowColumn className="date">
                    <FormattedRelative value={new Date(this.props.date)}/>
                </TableRowColumn>
                <TableRowColumn className="usd-value">
                    <FormattedNumber value={this.props.usdValue}/>
                </TableRowColumn>
                <TableRowColumn className="btc-value">
                    <FormattedNumber value={this.props.btcValue}/>
                </TableRowColumn>
                <TableRowColumn className="type" style={style}>{this.checkType()}</TableRowColumn>
                <TableRowColumn className="comment">
                    {this.checkComment()}
                </TableRowColumn>

            </TableRow>
        );
    }
}

export default RecordItem;
