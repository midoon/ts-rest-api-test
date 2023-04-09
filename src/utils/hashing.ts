import bcrypt from 'bcrypt'

// hashing
export const hashing = (password: String) => {
    return bcrypt.hashSync(`${password}`, 10)
}
