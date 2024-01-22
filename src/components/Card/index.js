import { CardInfo } from "../CardInfo";
import { DisplayCard } from "../DisplayCard";
import { Container, Separator } from "./styles";

export const Card= () => {


    return(
        <Container>
            <DisplayCard/>
            <Separator />
            <CardInfo/>
        </Container>
    )
}