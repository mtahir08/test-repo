import React, { Component } from 'react';
import { TextField } from 'material-ui';

class TextInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val: null
        }
    }

    render() {

        const styles = {
            floatingLabelStyle: {
                color: '#9FA8DA'//'#e6ffcc',
            },
            floatingLabelFocusStyle: {
                color: '#C5CAE9'//blue500,
            },
            underlineStyle: {
                borderColor: '#9FA8DA',
            },
            underlineFocusStyle: {
                borderColor: '#C5CAE9',
            }
        }

        return (
            <TextField floatingLabelText={this.props.label} style={this.props.styles} type={this.props.textType}
                floatingLabelStyle={styles.floatingLabelStyle} key={this.props.keyName}
                underlineStyle={styles.underlineStyle} id={this.props.idName}
                underlineFocusStyle={styles.underlineFocusStyle}
                floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                onChange={this.props.getVal} value={this.props.value}
            />

        );
    }
}

TextInput.propTypes = {
    getVal: React.PropTypes.func,
    idName: React.PropTypes.string,
    keyName: React.PropTypes.string

}

export default TextInput;