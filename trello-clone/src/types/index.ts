export type Status = 'toDo' | 'inProgress' | 'done'

export type Task = {
  id: number
  title: string
  description: string
  status: Status
}

export type BoardSections = {
  [name: string]: Task[]
}
