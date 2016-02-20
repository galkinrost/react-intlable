import expect from 'expect'

import createFormatDate from '../src/createFormatDate'

describe(`react-intlable`, () => {

    describe(`createFormatDate()`, () => {

        it(`should format date with provided options`, () => {
            const locale = `en`
            const context = {
                locale
            }

            const date = new Date(2016, 2, 14, 12, 12, 12, 12)

            const formatDate = createFormatDate(context)

            expect(formatDate(date, {
                year: `2-digit`,
                month: `numeric`,
                day: `numeric`,
                hour: `numeric`,
                minute: `numeric`,
                seconds: `numeric`
            }))
                .toEqual(`3/14/16, 12:12 PM`)
        })

    })

})