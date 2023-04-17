import bcrypt from 'bcrypt'

// hashing
export const hashing = (password: String) => {
    return bcrypt.hashSync(`${password}`, 10)
}

// dedocde
export const checkPassword = (password: string, userPasswordDB: string) => {
    return bcrypt.compareSync(password, userPasswordDB)
}
