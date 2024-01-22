import { Icons as i } from "../../models/Icons";
import { PricesContainer, PricesHeader, HeaderOrangeText, InfoContainer, InfoContentContainer, QuestionBlockIcon, ConditionIcon, LowestPriceSeparator, AveragePriceSeparator, HighestPriceSeparator, PricesText } from "./styles";

export const PricesChart = () => {

    return(
        <PricesContainer>

            <PricesHeader>
                <InfoContentContainer>
                    <p>Preço Médio no Marketplace</p>
                    <QuestionBlockIcon src={ i.questionblock } />
                </InfoContentContainer>    
                <HeaderOrangeText>Ver Tudo</HeaderOrangeText>
            </PricesHeader>

            <InfoContainer>
                <InfoContentContainer>
                    <ConditionIcon src={ i.cardstate }/>
                    <p>Normal</p>
                </InfoContentContainer> 
                <InfoContentContainer> 
                    <InfoContentContainer>
                        <LowestPriceSeparator />
                        <PricesText>R$ 6,28</PricesText>
                    </InfoContentContainer> 
                    <InfoContentContainer> 
                        <AveragePriceSeparator />
                        <PricesText>R$ 9,39</PricesText>
                    </InfoContentContainer> 
                    <InfoContentContainer>
                        <HighestPriceSeparator />
                        <PricesText>R$ 14,00</PricesText>
                    </InfoContentContainer> 
                </InfoContentContainer> 
            </InfoContainer>
        </PricesContainer>
    )
}