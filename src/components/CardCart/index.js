import { CartContainer, CartTitle, CartTitleContainer, CartTooltip, HelpButton, CartCountContainer, ItemCounterContainer, ManageCartContainer, PlusMinusIcon, CountCartText, FilterContainer, FilterIcon, AddToListContainer, AddToListIcon, AddToListText } from "./styles"
import { Icons as i} from "../../models/Icons";

export const CardCart = () => {


    return(
        <CartContainer>
            <CartTitleContainer>
                <CartTitle>Lista de Compras</CartTitle>
                <HelpButton src={ i.questionblock }/>
            </CartTitleContainer>
            <CartTooltip>Add a carta aqui e deixe que a Liga calcule o melhor preço para você!</CartTooltip>
            <CartCountContainer>
                <ItemCounterContainer>
                    <ManageCartContainer>
                        <PlusMinusIcon src={ i.plus }/>
                        <CountCartText>1</CountCartText>
                        <PlusMinusIcon src={ i.minus }/>
                    </ManageCartContainer>   
                    <FilterContainer>
                        <FilterIcon src={ i.statelayer }/>
                    </FilterContainer>                 
                </ItemCounterContainer>
                <AddToListContainer>
                    <AddToListIcon src={ i.greenplus }/>
                    <AddToListText>adicionar na lista</AddToListText>
                </AddToListContainer>
            </CartCountContainer>
        </CartContainer>
    )
}