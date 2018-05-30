
const pg = require('./knexConfig')

function getProfiles() {
    return pg('redditServer').select().from('profile').orderBy('id', 'desc')
}

module.exports = {
getProfiles
}
