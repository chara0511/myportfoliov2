export interface DataModel {
  apps: {
    appName: string
    appDescription: string
    appLink: string
    repositoryLink: string
    technologies: { name: string }[]
  }[]
  body: string
  bodyAfter: string
  bodyBefore: string
  bodyPrev: string
  footer: string
  footerPrev: string
  headerAfter: string
  headerBefore: string
  header: string
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
