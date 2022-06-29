import * as bcrypt from 'bcrypt'
import { promisify } from 'util'

export async function encryptPassword (password: string) {
  const hashPromise = promisify(bcrypt.hash)
  const passwordHash = await hashPromise(password, 10)
  return passwordHash
}
