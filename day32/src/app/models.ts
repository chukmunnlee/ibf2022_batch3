export interface Friend {
  name: string
  email: string
  age: number
  gender: string
  facts: Fact[]
}

export interface Fact {
  fact: string
  value: string
}
