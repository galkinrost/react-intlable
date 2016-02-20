import expect from 'expect'
import React, {Component, PropTypes} from 'react'
import jsdom from 'mocha-jsdom'
import TestUtils from 'react-addons-test-utils'

import intlable from '../src/intlable'
import IntlableProvider from '../src/IntlableProvider'

describe(`react-intlable`, () => {
    jsdom()

    describe(`intlable`, () => {

        class Passthrough extends Component {
            
            render() {
                return <div />
            }
        }
        
        it(`should provide format methods`, () => {
            const messages = {
            }

            const locale = `en`

            @intlable
            class Wrapped extends Component {
                render() {
                    return <Passthrough {...this.props} />
                }
            }

            const tree = TestUtils.renderIntoDocument(
                <IntlableProvider messages={messages} locale={locale}>
                    <Wrapped />
                </IntlableProvider>
            )

            const passthrough = TestUtils.findRenderedComponentWithType(tree, Passthrough)


            expect(passthrough.props.formatMessage).toExist()
            expect(passthrough.props.formatDate).toExist()
            expect(passthrough.props.formatNumber).toExist()
        })


        it(`should format message from the provided messages collection`, () => {
            const messages = {
                foo: `bar`
            }

            const locale = `en`

            @intlable
            class Wrapped extends Component {
                render() {
                    return <Passthrough {...this.props} />
                }
            }

            const tree = TestUtils.renderIntoDocument(
                <IntlableProvider messages={messages} locale={locale}>
                    <Wrapped />
                </IntlableProvider>
            )

            const passthrough = TestUtils.findRenderedComponentWithType(tree, Passthrough)

            expect(passthrough.props.formatMessage(`foo`)).toEqual(`bar`)
        })

        it(`should preserve own components's props`, () => {

            @intlable
            class Wrapped extends Component {
                render() {
                    return <Passthrough {...this.props} />
                }
            }

            const tree = TestUtils.renderIntoDocument(
                <IntlableProvider messages={{}} locale={`en`}>
                    <Wrapped foo="bar" />
                </IntlableProvider>
            )

            const passthrough = TestUtils.findRenderedComponentWithType(tree, Passthrough)

            expect(passthrough.props.foo).toEqual(`bar`)
        })

    })

});