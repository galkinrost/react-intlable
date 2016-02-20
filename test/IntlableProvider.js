import expect from 'expect'
import React, {Component, PropTypes} from 'react'
import jsdom from 'mocha-jsdom'
import TestUtils from 'react-addons-test-utils'

import IntlableProvider from '../src/IntlableProvider'

describe(`react-intlable`, () => {
    jsdom()

    describe(`IntlableProvider`, () => {

        it(`should provide messages and locale in the context`, () => {
            const messages = {
                foo: `bar`
            }

            const locale = `en`

            class Wrapped extends Component {
                render() {
                    return <div />
                }
            }
            Wrapped.contextTypes = {
                messages: PropTypes.object,
                locale: PropTypes.string
            }

            const tree = TestUtils.renderIntoDocument(
                <IntlableProvider messages={messages} locale={locale}>
                    <Wrapped />
                </IntlableProvider>
            )

            const wrapped = TestUtils.findRenderedComponentWithType(tree, Wrapped)

            expect(wrapped.context.messages).toEqual(messages)
            expect(wrapped.context.locale).toEqual(locale)
        })

    })

});