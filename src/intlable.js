import React, { Component, PropTypes } from 'react'

import createFormatDate from './createFormatDate'
import createFormatMessage from './createFormatMesage'
import createFormatNumber from './createFormatNumber'
import hoist from 'hoist-non-react-statics'

const intlable = (WrappedComponent) => {

    class Intlable extends Component{
        render() {
            const intlProps= {
                formatDate: createFormatDate(this.context),
                formatMessage: createFormatMessage(this.context),
                formatNumber: createFormatNumber(this.context)
            }

            return <WrappedComponent {...intlProps} {...this.props} />
        }
    }

    Intlable.contextTypes = {
        locale: PropTypes.string.isRequired,
        messages: PropTypes.object.isRequired
    }

    return hoist(Intlable, WrappedComponent)
}

export default intlable