export interface projectData {
   [key: number]: any,
   name: string,
   techStack: string[],
   category: string,
   content: string,
   link: string,
   thumbnail: string,
   images: image[]
}

export interface image{
   image:string
}