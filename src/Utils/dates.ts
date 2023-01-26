import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
dayjs.extend(customParseFormat)

const _dayjs = (date: any, c: any) => {
    return dayjs(date, c).format();
}

export default _dayjs
