import createFormatMessage, {traverseMessages} from '../src/createFormatMesage'

import expect from 'expect'

describe(`react-intlable`, () => {

    describe(`createFormatMessage()`, () => {

        it(`should find message by path`, () => {
            const messages = {
                foo: {
                    bar: `baz`
                }
            }

            expect(traverseMessages(messages, `foo.bar`))
                .toEqual(`baz`)

        })

        it(`should format message with params`, () => {
            const messages = {
                views: {
                    welcome: {
                        title: `Hello {name}!`
                    }
                }
            }
            const locale = `en`
            const context = {
                messages,
                locale
            }

            const formatMessage = createFormatMessage(context)

            expect(formatMessage(`views.welcome.title`, { name: `World` }))
                .toEqual(`Hello World!`)
        })
    })

})