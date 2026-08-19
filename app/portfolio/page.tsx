import { Metadata } from "next";
import Portfolio from "./Portfolio";

export const metadata: Metadata ={
   title :{
      default: "Portfolio",
      template: "%s | Rolux Media"
   },
   description: "Portfolio page"
}

export default function PortfolioPage(){
    return (
        <>
            <Portfolio/>
        </>
    )
}