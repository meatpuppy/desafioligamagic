import { Icons as i} from "../../../models/Icons";
import { ButtonsContainer, EnNameContainer, FavoriteButton, NameContainer, OptionsButton, PtNameContainer, SectionContainer } from "./styles";

export const CardName = () => {

    return(
            <SectionContainer>
                <NameContainer>
                    <PtNameContainer>Contramágica</PtNameContainer>   
                    <ButtonsContainer>
                        <FavoriteButton src={i.favorite} />
                        <OptionsButton src={i.options} />
                    </ButtonsContainer>
                </NameContainer>
                <EnNameContainer>Counterspell</EnNameContainer>
            </SectionContainer>
    )
}