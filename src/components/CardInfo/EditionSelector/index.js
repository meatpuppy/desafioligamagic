import { Rarity, CardNumber, EditionName, OptionContainer, Separator, EditionAbreviation, AbreviationContainer, EditionContainer, Arrow } from "./styles";
import { Icons as i } from "../../../models/Icons"

export const EditionSelector = () => {

    return(

                <OptionContainer>
                    <EditionContainer>
                        <Rarity src={ i.common }></Rarity>
                        <CardNumber>#45</CardNumber>
                        <EditionName>Dominaria Remastered</EditionName>
                    </EditionContainer>
                    <AbreviationContainer>
                        <Separator />
                        <EditionAbreviation>DMR</EditionAbreviation>
                        <Arrow src={i.arrow}/>
                    </AbreviationContainer>
                </OptionContainer>

    )
}