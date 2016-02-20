import React, { Component, PropTypes, Children } from 'react'

class IntlableProvider extends Component {

    getChildContext() {
        return {
            messages: this.props.messages,
            locale: this.props.locale
        }
    }

    render() {
        const { children } = this.props

        return Children.only(children)
    }
}

IntlableProvider.childContextTypes = {
    messages: PropTypes.object.isRequired,
    locale: PropTypes.string.isRequired
}

export default IntlableProvider
