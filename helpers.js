const dateFormat = require('dateformat')

const dateToString = date => {
  return dateFormat(date, 'yyyymmdd')
}

const todayString = () => {
  return dateToString(new Date)
}

module.exports = {
  dateToString: dateToString,
  todayString: todayString
}
