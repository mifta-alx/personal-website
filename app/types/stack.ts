export interface StackItem {
  name: string
  icon: string
  href?: string | "#"
}

export interface Stack {
  title: string
  description: string
  stacks: StackItem[]
}