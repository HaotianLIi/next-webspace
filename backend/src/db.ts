// require('dotenv').config()

// const pgp = require('pg-promise')({
//     error: (err, e) => {
//         console.log('Error Occrued: ', err.message || err)
//         if(e.cn){
//             console.error('Connection Error: ', e.cn)
//         }
//     }
// })
// const db = pgp(`postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`)

// module.exports = db


import pgPromise from 'pg-promise'
import dotenv from 'dotenv'
dotenv.config()

const pgp = pgPromise({
    error: (err, e) => {
        console.log('Error Occured: ', err.message || err)
        if(e.cn){
            console.error('Connection Error: ', e.cn)
        }
    }
})

const db = pgp(`postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`)
// postgres://postgres:1234@localhost:5432/next_p
export default db;