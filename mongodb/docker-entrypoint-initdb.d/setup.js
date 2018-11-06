db = db.getSiblingDB('admin')
db.auth({
    user: 'root',
    pwd: 'secret'
})

db = db.getSiblingDB('loopback-db')
db.createUser({
    user: 'loopback-user',
    pwd: 'secret',
    roles: [
        { role: 'clusterAdmin', db: 'admin' },
        { role: 'readWriteAnyDatabase', db: 'admin' },
        'readWrite'
    ]
})

db.createCollection('log')
db.log.insertOne({
    message: 'Initialized collection.'
})
