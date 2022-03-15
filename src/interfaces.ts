
export interface TagInterface {
  value: string
  totalCount: number
}

export interface TagsGroupInterface {
  tags: {
    group: TagInterface[]
  }
}