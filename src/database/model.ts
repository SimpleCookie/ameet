export interface Database {
  users: User[]
}

export interface User {
  alias: string
  ssn: string
  location: string
  age: number
  gender: Gender
  lookingFor: Gender[]
}
export type Gender = "M" | "F"
