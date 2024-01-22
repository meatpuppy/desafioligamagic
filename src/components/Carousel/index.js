import { ArrowLeft, ArrowRight, CarouselBody, GrayedOutMiniCard, MiniCardDisplay } from "./styles"
import { Icons as i } from "../../models/Icons"
import counterspell from "../../assets/counterspell.jpg"
import counterspell2 from "../../assets/counterspell2.jpg"
import counterspell3 from "../../assets/counterspell3.jpg"

export const Carousel = () => {

return(
    <CarouselBody>
        <ArrowLeft src={ i.arrow }/>
        <GrayedOutMiniCard src={ counterspell3 }></GrayedOutMiniCard>
        <GrayedOutMiniCard src={ counterspell2 }></GrayedOutMiniCard>
        <MiniCardDisplay src={ counterspell }></MiniCardDisplay>
        <ArrowRight src={ i.arrow }/>
    </CarouselBody>
)
}