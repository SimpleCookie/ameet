export const database: Database = {
  users: [
    {
      alias: "Pizzan",
      age: 30,
      gender: "M",
      location: "Sundsvall",
      lookingFor: ["F"],
      ssn: "19920101-1121",
    },
    {
      alias: "Citrusfrukten",
      age: 25,
      gender: "F",
      location: "Sundsvall",
      lookingFor: ["M"],
      ssn: "19970601-1241",
    },
  ]
}

interface Database {
  users: User[]
}

interface User {
  alias: string
  ssn: string
  location: string
  age: number
  gender: Gender
  lookingFor: Gender[]
}
type Gender = "M" | "F"
