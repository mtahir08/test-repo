import React, { Component } from 'react';
import { FloatingActionButton, RaisedButton, FlatButton } from 'material-ui';

export class FloatingButton extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {

    }

    render() {

        const styles = {
            btn: {
                marginRight: '5px',
                marginLeft: '5px',

            }
        }

        return <FloatingActionButton
            backgroundColor={this.props.background || ''}
            style={styles.btn}>
            <i className={this.props.iconName}></i>
        </FloatingActionButton>
    }
}

export class FButton extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {

    }

    render() {

        const styles = {
            btn: {
                marginRight: '5px',
                marginLeft: '5px',

            }
        }

        return <FlatButton
            //                    href="https://github.com/callemall/material-ui"
            //                  target="_blank"
            label={this.props.label}
            icon={<i className={this.props.iconName} ></i>}
        />
    }
}
