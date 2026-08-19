import { type Metadata } from "next"
import Contact from "./ContactPage"

export const metadata: Metadata ={
   title :{
      default: "Contact us",
      template: "%s | Rolux Media"
   },
   description: "Rolux media's contact page"
}
export default function ContactPage(){
    return (
        <>
            <Contact/>
        </>
    )
}