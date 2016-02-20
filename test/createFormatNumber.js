import expect from 'expect'

import createFormatNumber from '../src/createFormatNumber'

describe(`react-intlable`, () => {

    describe(`createFormatNumber()`, () => {

        it(`should format number with provided options`, () => {
            const locale = `en`
            const context = {
                locale
            }

            const number = 100

            const formatDate = createFormatNumber(context)

            expect(formatDate(number, {
                style: `currency`,
                currency: `USD`,
                currencyDisplay: `symbol`,
                minimumFractionDigits: 0
            }))
                .toEqual(`$100`)
        })

    })

})