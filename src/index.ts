import { users } from "./users"

const fakerApi = http.app({
    name: "fakerApi",
    host: "localhost",
    port: "3000"
})

fakerApi.get("/users", () => http.result(200, users))
fakerApi.run()

