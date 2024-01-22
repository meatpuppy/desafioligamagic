import { Breadcrumbs, Container, Separator} from "./styles";
import { EditionSelector } from "./EditionSelector";
import { CardName } from "./CardName";
import { CardCart } from "../CardCart";
import { Details } from "../Details";
import { PricesChart } from "../Prices"

export const CardInfo = () => {


    return(
        <Container>
            <Breadcrumbs>Home <Separator/> Magic: The Gathering <Separator/> Busca <Separator/> Bazar - Lista de Desejos</Breadcrumbs>
            <EditionSelector/>
            <CardName />
            <CardCart />
            <Details />
            <PricesChart />
        </Container>
    )
}