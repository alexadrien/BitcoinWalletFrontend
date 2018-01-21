import { Card, CardText, CardTitle } from 'material-ui';
import React, { Component } from 'react';

import {IntlProvider,FormattedNumber} from 'react-intl';

class CurrentValue extends Component {

    render() {
        const style = {
            width: "48%",
            "display": "inline-block",
            margin: "0 1% 0 1%",
            textAlign: "center"
        };
        const cardStyle = {
            margin: "0 auto 0 auto",
            width: "50%"
        };
        var value = 0
        if (this.props.btcusd){
            value = this.props.btcusd;
        }
        return (
            <IntlProvider locale="en-GB">
                <div className="CurrentValue" style={style}>
                    <Card style={cardStyle}>
                        <CardTitle>
                            BTC/USD
                        </CardTitle>
                        <CardText>
                            $<FormattedNumber value={value}/>
                        </CardText>
                    </Card>
                </div>
            </IntlProvider>
        );
    }
}

export default CurrentValue;
