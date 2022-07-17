// Environment and Twilio Configuration
require('dotenv').config()
const TWILIO = {
    ACCOUNT_SID: process.env.TWILIO_ACCOUNT_SID,
    AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN
}
const TWILIO_CLIENT = require('twilio')(
    TWILIO.ACCOUNT_SID,
    TWILIO.AUTH_TOKEN
)