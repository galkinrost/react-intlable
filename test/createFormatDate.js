import createFormatDate from '../src/createFormatDate'

import expect from 'expect'

describe(`react-intlable`, () => {

    describe(`createFormatDate()`, () => {

        it(`should format date with provided options`, () => {
            const locale = `en`
            const context = {
                locale
            }

            const year = 2016
            const month = 2
            const day = 14
            const hours = 12
            const minutes = 12
            const seconds = 12

            const date = new Date(year, month, day, hours, minutes, seconds)

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