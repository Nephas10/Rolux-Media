import { Metadata } from "next";
import Service from "./ServicePage";

export const metadata: Metadata ={
   title :{
      default: "Services",
      template: "%s | Rolux Media"
   },
   description: "Services page"
}
export default function ServicePages(){
    return (
        <>
       <Service/>
        </>
    )
}
