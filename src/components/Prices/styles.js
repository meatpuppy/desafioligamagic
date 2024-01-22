import styled from "styled-components";

export const PricesContainer = styled.div`
display: flex;
flex-direction: column;
gap: 8px;
`

export const PricesHeader = styled.div`
display: flex;
justify-content: space-between;
font-weight: bold;
font-size: 16px;
margin: 0px;
padding: 0px 20px 0px 20px;
`

export const HeaderOrangeText = styled.p`
color: #FF5921;
`

export const InfoContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
font-size: 16px;
color: #727270;
margin: 0px;
padding: 0px 12px 0px 12px;
background-color: rgba( 150, 150, 150, 0.1 );
`

export const InfoContentContainer = styled.div`
display: flex;
align-items: center;
margin: 0px;
padding: 0px;
`

export const InfoTypeText = styled.p`
display flex;
color: #474745;
font-weight: bold;
`

export const ConditionIcon = styled.img`
display: flex;
width: 20px;
height: 20px;
margin: 0px 8px 0px 0px;
`

export const QuestionBlockIcon = styled.img`
display: flex;
width: 16px;
height: 16px;
margin: 0px 0px 0px 8px;
`

export const LowestPriceSeparator = styled.div`
display: flex;
align-items: center;
width: 4px;
height: 20px;
margin: 0px 8px 0px 12px;
background-color: #69BC40;
`
export const AveragePriceSeparator = styled.div`
display: flex;
align-items: center;
width: 4px;
height: 20px;
margin: 0px 8px 0px 12px;
background-color: #DDC80B;
`
export const HighestPriceSeparator = styled.div`
display: flex;
align-items: center;
width: 4px;
height: 20px;
margin: 0px 8px 0px 12px;
background-color: #FF8B64;
`

export const PricesText = styled.p`
display: flex;
font-weight: 600;
color: #727270;
`