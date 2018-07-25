import {re} from 're-template-tag'
// const re = require('re-template-tag')

const RE_YEAR = re`(?<year>[0-9]{4})`
const RE_MONTH = re`(?<month>[0-9]{2}`
const RE_DAY = re`(?<day>[0-9]{2}`
const RE_DATE = re`/${RE_YEAR}-${RE_MONTH}-${RE_DAY}/u`

const match = RE_DATE.exec('2018/02/19')
console.log(match.groups.year)
