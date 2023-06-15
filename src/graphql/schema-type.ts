export interface UserFilterInput {
  filter?: {
    alias?: StringQueryOperatorInput
    age?: IntervalQueryOperatorInput
    gender?: GenderInput
  }
}

interface StringQueryOperatorInput {
  eq?: string
  in?: string
}

interface IntervalQueryOperatorInput {
  min: number
  max: number
}

type GenderInput = "M" | "F"
