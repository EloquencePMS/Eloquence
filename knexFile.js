/**
 * Created by MichaelLeffert on 2/11/16.
 */

module.exports = {
    development: {
        client: 'mysql',

        connection: {
            host: '127.0.0.1',
            user: 'manager',
            password: 'Marlin60a',
            database: 'Eloquence'

        },
        seeds:{
            directory: './seeds/serverStart'
        }
    },
    prod: {
        client: 'mysql',
        connection: {
            host: '127.0.0.1',
            user: 'manager',
            password: 'Marlin60a',
            database: 'EloquenceProd'

        },
        seeds:{
            directory: './seeds/serverStart'
        }
    }
}