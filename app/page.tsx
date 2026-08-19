import { Metadata } from "next"
import Home from "@/components/HomePage"

export const metadata: Metadata = {
  title: {
  default: "Rolux Media",
  template: "%s | Rolux Media"
  },
  description: "Rolux Media Home page" 
}
export default function HomePage(){
  return (
    <>
      <Home />
    </>
  )
}