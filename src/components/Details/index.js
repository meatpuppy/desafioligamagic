import { Icons as i } from "../../models/Icons";
import { DetailsContainer, DetailsHeader, HeaderOrangeText, InfoColorText, InfoContainer, InfoContentContainer, InfoTypeText, ManaCostIcon} from "./styles";

export const Details = () => {

    return(
        <DetailsContainer>
            <DetailsHeader>
                <p>Detalhes da Carta</p>
                <HeaderOrangeText>Ver Tudo</HeaderOrangeText>
            </DetailsHeader>

            <InfoContainer>
                <InfoContentContainer>
                    <p>Cor</p>
                </InfoContentContainer> 
                <InfoContentContainer> 
                    <InfoColorText>Azul</InfoColorText>
                </InfoContentContainer> 
            </InfoContainer>

            <InfoContainer>
                <InfoContentContainer>
                    <p>Custo de Mana</p>
                </InfoContentContainer> 
                <InfoContentContainer> 
                        <ManaCostIcon src={ i.blue } />
                        <ManaCostIcon src={ i.blue } />
                    </InfoContentContainer> 
            </InfoContainer>

            <InfoContainer>
                <InfoContentContainer>
                    <p>Tipo</p>
                </InfoContentContainer> 
                <InfoContentContainer> 
                    <InfoTypeText>
                        Mágica Instantânea
                    </InfoTypeText>
                </InfoContentContainer> 
            </InfoContainer>
        </DetailsContainer>
    )
}