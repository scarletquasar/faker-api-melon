import { faker } from '@faker-js/faker'

const users = []

let index = 0

while(index < 10) {
    users.push({
        userId: faker.datatype.uuid(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        password: faker.internet.password(),
        birthdate: faker.date.birthdate(),
        registeredAt: faker.date.past(),
    })
    index++
}

export { users }
