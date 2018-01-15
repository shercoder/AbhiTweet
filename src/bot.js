const Twit = require('twit')
const config = require('./config')

const bot = new Twit(config);

const users = ['63852823'];
// const users = ['705306976977158145'];
const stream = bot.stream('statuses/filter', {follow: users});
stream.on('tweet', function (tweet) {
    if (users.indexOf(tweet.user.id_str) > -1) {
        console.log(tweet.user.name + ": " + tweet.text);
        bot.post('statuses/update', {
            status: '@' + tweet.user.screen_name + ' @sunnydsunnys taali bajao koi  isne tweet kia hae!',
            in_reply_to_status_id: tweet.id_str
        }, (err, data, response) => {
            if (err) {
                console.log(err)
            } else {
                console.log(`${data.text} tweeted!`)
            }
        })
        //bot.post('statuses/retweet/:id', { id: tweet.id_str }, function (err, data, response) {
        //    console.log(data)
        //})
    }
})
//bot.post('statuses/update', {
//    status: 'hello world! @heypardeep'
//}, (err, data, response) => {
//    if (err) {
//        console.log(err)
//    } else {
//        console.log(`${data.text} tweeted!`)
//    }
//})
