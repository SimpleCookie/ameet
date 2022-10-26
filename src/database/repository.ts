import { database } from "."
import type { User } from "./model"

export const repository: Repository = {
  findAllUsers: () => {
    return database.users
  },
  findUserByAge: (ageLow: number, ageHigh: number) => {
    return database.users.filter((u) => ageLow <= u.age && u.age <= ageHigh)
  },
  findUserByAlias: (alias: string) => {
    const tmp = alias.toLocaleLowerCase()
    return database.users.find((u) => u.alias.toLocaleLowerCase() === tmp)
  },
}

interface Repository {
  findAllUsers: () => User[]
  findUserByAge: (ageLow: number, ageHigh: number) => User[]
  findUserByAlias: (alias: string) => User | undefined
}
