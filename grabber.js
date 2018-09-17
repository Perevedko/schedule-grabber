const request = require('request')
const cheerio = require('cheerio')
const helpers = require('./helpers')
const config = require('./config')

const scheduleUrl = date => `${config.BASE_URL}${date}/`

let todayScheduleUrl = scheduleUrl(helpers.todayString())

const getScheduleForToday = callback => {
  request(todayScheduleUrl, (error, response, body) => {
    if (error) return
    const $ = cheerio.load(body)
    const table = $('main#content .table-responsive').html()
    callback(table)
  })
}

module.exports = {
  getScheduleForToday: getScheduleForToday
}
