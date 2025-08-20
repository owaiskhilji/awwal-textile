import Hero from "../Components/Home/Hero"
import CardSlide from "../Components/Home/CardSlide"
import About from "../Components/Home/About"
import Cards from "../Components/Home/Cards"
import Policy from "../Components/Home/Policy"

export default function Landing(){
    return(
        <div className="mt-20  ">
        <Hero/>
        <CardSlide/>
        <About/>
        <Cards/>
        <Policy/>
        </div>
    )
}