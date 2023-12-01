import knex from 'knex'

const db = knex({
    client: 'mysql',
    connection: {
        host: 'localhost',
        port: 3306,
        user: 'groundwater_lms',
        password: 'B?g5iy950',
        database: 'honda_checkin_2023'
    }
})

export default db
