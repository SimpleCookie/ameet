export interface Database {
  users: User[]
}

export interface User {
  alias: string
  id: UUID
  ssn?: string
  location: string
  age: number
  gender: Gender
  lookingFor: Gender[]
}
export type Gender = "M" | "F"

export type UUID = string
