import classnames from 'classnames';
import isString from 'lodash/isString';
import React, { Component } from 'react';
import isBoolean from 'lodash/isBoolean';
import isFunction from 'lodash/isFunction';

type MyProps = {
    theme: string,
    enabled: boolean | void
    className: string
    onStateChanged?: Function
    onClick?: Function
}

type MyState = {
    enabled: boolean | void
}

class ToggleSwitch extends Component<MyProps, MyState> {

state  = { enabled: this.enabledFromProps() }

isEnabled = () => this.state.enabled;

enabledFromProps() {
    console.log(this.props);
    let { enabled } = this.props;
    enabled = isFunction(enabled) ? enabled() : enabled;

    return isBoolean(enabled) && enabled;
}

toggleSwitch = (evt:any) => {
    evt.persist();
    evt.preventDefault();

    const { onClick, onStateChanged } = this.props;

    this.setState({enabled: !this.state.enabled}, () => {
        const state = this.state;

        const switchEvent = Object.assign(evt, {SWITCH_STATE: state});

        isFunction(onClick) && onClick(switchEvent);
        isFunction(onStateChanged) && onStateChanged(state);
    })
}

render() {
    const { enabled } = this.state;
    const { enabled: _enabled, theme, onClick, className, onStateChanged, ...restProps } = this.props;
    const switchTheme = (theme && isString(theme)) ? theme : 'default';
    const switchClasses = classnames(
        `switch switch--${switchTheme}`,
        className       
    );
    const togglerClasses = classnames(
        'switch-toggle',
        `switch-toggle--${enabled ? 'on' : 'off'}`
      )

      return (
        <div className={switchClasses} 
             onClick={this.toggleSwitch} {...restProps}>
          <div className={togglerClasses}></div>
        </div>
      )
}

}



export default ToggleSwitch;