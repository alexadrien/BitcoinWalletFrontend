import { AppBar } from 'material-ui';
import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <AppBar title="Bitcoin Virtual Wallet" iconClassNameRight="muidocs-icon-navigation-expand-more" />
            </div>
        );
    }
}

export default Header;
