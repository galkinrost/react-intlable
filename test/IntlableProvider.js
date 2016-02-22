import React, {Component, PropTypes} from 'react'

import IntlableProvider from '../src/IntlableProvider'
import TestUtils from 'react-addons-test-utils'

import expect from 'expect'
import jsdom from 'mocha-jsdom'

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

})