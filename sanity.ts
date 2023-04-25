import { createClient } from "next-sanity"
import createImageUrlBuilder from "@sanity/image-url"
import imageUrlBuilder from '@sanity/image-url'


export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: "iuiebir3",
    apiVersion: "2021-03-25",
    useCdn: process.env.NODE_ENV === "production",
};

export const sanityClientMain = createClient(config); 

const builder = imageUrlBuilder(sanityClientMain)



export function urlFor (source:any) {
    return builder.image(source)
  }

//export const urlFor = (source: any) => createImageUrlBuilder(sanityClientMain).image(source);