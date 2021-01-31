export interface AppModel {
  appName: string
  appDescription: string
  appLink: string
  createdAt: string
  repositoryLink: string
  technologies: { name: string }[]
  types: string[]
}
export interface DataModel {
  apps: AppModel[]
  body: string
  bodyAfter: string
  bodyBefore: string
  bodyPrev: string
  bodyPart1: string
  bodyPart2: string
  bodyPart3: string
  footer: string
  footerPrev: string
  headerAfter: string
  headerBefore: string
  header: string
  headerPrev: string
  keyword1: string
  keyword2: string
  keyword3: string
  keyword4: string
  keyword5: string
  link: string
  linkPrev: string
  technologies: { name: string }[]
}

// ?https://www.typescriptlang.org/docs/handbook/utility-types.html
export type Section = 'about' | 'contact' | 'hero' | 'projects'

export interface Data {
  myData: Record<Section, DataModel>
}
