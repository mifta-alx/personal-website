export interface Role {
  name: string
  period: string
  location: string
  contract: string
  mode?: 'Hybrid' | 'Remote' | 'On-site'
  responsibilities: string[]
}

export interface Company {
  logo: string
  name: string
  url?: string
  roles: Role[]
}

export interface Experience {
  title: string
  description: string
  companies: Company[]
}