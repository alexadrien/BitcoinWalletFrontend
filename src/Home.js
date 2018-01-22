import { Paper } from 'material-ui';
import React, { Component } from 'react';

import BuyOrSell from './BuyOrSell';
import LatestTransactions from './LatestTransactions';
import Wallet from './Wallet';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            maxRecords: 100,
            records : [],
            btcusd: null,
            nickname: ""
        };
        this.handleNicknameClick = this.handleNicknameClick.bind(this);
        this.refreshRecords = this.refreshRecords.bind(this);
    }

    async componentDidMount() {

        var request = new Request(`https://api.coindesk.com/v1/bpi/currentprice/USD.json`, {
            method: 'get'
        });
        var resp = await fetch(request).catch(err => {console.log(err)})
        if(resp.status >= 200 && resp.status < 300) {
            var json = await resp.json()
            this.setState({ btcusd: json.bpi.USD.rate_float });
        }
    }

    async refreshRecords(){
        var url = "http://acube.tech:8080/bitcoinAPI/transaction/"+this.state.nicknameValue+"/";
        var request = new Request(url, {
            method: 'get',
            headers: new Headers({
                'Accept': `application/json`
            })
        });
        var resp = await fetch(request).catch(err => {console.log(err)})
        if(resp.status >= 200 && resp.status < 300) {
            var json = await resp.json()
            console.log(json);
            this.setState({ records: json});
        }

        request = new Request(`https://api.coindesk.com/v1/bpi/currentprice/USD.json`, {
            method: 'get'
        });
        resp = await fetch(request).catch(err => {console.log(err)})
        if(resp.status >= 200 && resp.status < 300) {
            json = await resp.json()
            this.setState({ btcusd: json.bpi.USD.rate_float });
        }
    }

    async handleNicknameClick() {
        this.setState({nickname: this.state.nicknameValue});
        await this.refreshRecords();
    }
    handleChange(e) {
      this.setState({ nicknameValue : e.target.value });
    }

    render() {
        const style = {
            maxWidth: "800px",
            margin: "20px auto"
        };
        var nicknameStyle = {
            textAlign: "center",
        }
        var hiddenRestOfPage = {}
        console.log(this.state.nickname);
        if (this.state.nickname != ""){
            nicknameStyle = {
                "display": "none",
                textAlign: "center"
            }
        } else {
            hiddenRestOfPage = {
                "display": "none"
            }
        }
        return (
            <div className="Home">
                <Paper style={style}>
                    <div style={nicknameStyle}>
                        Enter your nickname : <input type="text" placeholder="nickname"
                                onChange={this.handleChange.bind(this)}/>
                        <input type="submit" value="Submit" onClick={this.handleNicknameClick}/>
                    </div>
                    <div style={hiddenRestOfPage}>
                        <BuyOrSell btcusd={this.state.btcusd}
                                nickname={this.state.nickname}
                                refreshTrigger={this.refreshRecords}/>
                        <Wallet transactions={this.state.records} btcusd={this.state.btcusd}/>
                        <LatestTransactions transactions={this.state.records}
                                btcusd={this.state.btcusd}
                                nickname={this.state.nickname}/>
                    </div>
                </Paper>
            </div>
        );
    }
}

export default Home;
