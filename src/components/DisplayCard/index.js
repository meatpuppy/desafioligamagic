import { DisplayBody, HighlightCard, Separator } from "./styles"
import counterspell from "../../assets/counterspell.jpg"
import { Carousel } from "../Carousel"

export const DisplayCard = () => {



    return(
        <DisplayBody>
            <HighlightCard src={ counterspell }></HighlightCard>
            <Separator />
            <Carousel />
        </DisplayBody>
    )

}