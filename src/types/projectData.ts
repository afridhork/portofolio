import { StaticImageData } from "next/image"
export interface projectData {
  name: string
  techStack: string[]
  category: string
  content: string
  link: string
  thumbnail: string | StaticImageData
  images: ImageItem[]
}


export interface ImageItem {
  image: StaticImageData
}