import { RaisedButton } from 'material-ui';
import React, { Component } from 'react';
import axios from 'axios';

class BuyOrSell extends Component {

    constructor(props) {
        super(props);
        this.state = {
            btcusd: 123,
            value :1,
            maxRecords: 100
        };
        this.handleBuy = this.handleBuy.bind(this);
        this.handleSell = this.handleSell.bind(this);
        this._onChange = this._onChange.bind(this);
        this.sendPost = this.sendPost.bind(this);
    }

    async handleBuy() {
        // var amount = document.getElementById("amount-input").value;
        var amount = 1;
        await this.sendPost("BUY", amount);
    }

    async sendPost(type, amount) {
        var btcAmount = amount;
        var usdAmount = this.props.btcusd*amount;
        var url = `http://acube.tech:8080/bitcoinAPI/transaction/`;
        var booleanType = false;
        if (type==="BUY"){
            booleanType = true;
        } else {
            booleanType = false;
        }
        var theDate = new Date();
        theDate = theDate.toUTCString();
        axios({
            method: "POST",
            url: url,
            headers:{
                "Accept": "application/json",
                "Content-type": "application/json"
            },
            data: {
                "owner": this.props.nickname,
                "timestamp": theDate,
                "usd": 1.0*usdAmount,
                "type": booleanType,
                "btc": 1.0*btcAmount
            }
        })
    }

    async handleSell() {
        // var amount = document.getElementById("amount-input").value;
        var amount = 1;
        await this.sendPost("SELL", amount);
    }

    _onChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        const style={
            width: "48%",
            display: "inline-block",
            margin: "0 1% 0 1%",
            position: "relative"
        }
        const buttonStyle={
            margin: "10px"
        }
        const wrapperStyle={
        }
        return (
            <div className="BuyOrSell" style={style}>
                <div style={wrapperStyle}>
                    {/*<input id="amount-input" value={this.state.value} onChange={this._onChange}/>*/}
                    <RaisedButton style={buttonStyle} fullWidth={true} id="buy-btn" primary={true} label="Buy" onClick={this.handleBuy} />
                    <RaisedButton style={buttonStyle} fullWidth={true} id="sell-btn" label="Sell" secondary={true} onClick={this.handleSell} />
                </div>
            </div>
        );
    }
}

export default BuyOrSell;
