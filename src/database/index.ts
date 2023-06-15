import type { Database } from "./model"

export const database: Database = {
  users: [
    {
      id: "d8ef0175-7d2a-4993-b23f-adb3f2d61840",
      alias: "Pizzan",
      age: 30,
      gender: "M",
      location: "Sundsvall",
      lookingFor: ["F"],
      ssn: "19920101-1121",
    },
    {
      id: "6a72bc5b-e77b-4b1e-8cb9-7eaaf12ceeac",
      alias: "Citrusfrukten",
      age: 25,
      gender: "F",
      location: "Sundsvall",
      lookingFor: ["M"],
      ssn: "19970601-1241",
    },
    {
      id: "6a72bc5b-e77b-4b1e-8cb9-7eaaf12ceeac",
      alias: "Hope",
      age: 21,
      gender: "F",
      location: "Sundsvall",
      lookingFor: ["M"],
      ssn: "19970412-1311",
    },
  ],
}
