import styled from "styled-components";

export const CartContainer = styled.div`
display: flex;
flex-direction: column;
margin: 0px;
padding: 14px 20px 18px 20px;
background-color: rgba( 150, 150, 150, 0.1 );
box-shadow: 0px 4px 8px 0px rgba(51, 51, 51, 0.5);
`

export const CartTitleContainer = styled.div`
display: flex;
margin: 0px;
padding: 0px;
gap: 8px;
`

export const CartTitle = styled.p`
display: flex;
font-weight: bold;
font-size: 24px;
margin: 0px;
padding: 0px;
`

export const HelpButton = styled.img`
display: flex;
width: 24px;
height:24px;
margin: 3px;
padding: 0px;
`

export const CartTooltip = styled.p`
display: flex;
font-size: 16px;
color: #727270;
`

export const CartCountContainer = styled.div`
display: flex;
flex-direction: row;
margin: 0px;
padding: 0px;
gap: 24px;
`

export const ItemCounterContainer = styled.div`
display: flex;
gap: 8px;
margin: 0px;
padding: 0px;
`

export const ManageCartContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
width: 102px;
height: 40px;
margin: 0px;
padding: 0px 3px 0px 3px;
justify-content:  space-between;
border: 0.8px solid rgba(150, 150, 150, 0.4);
background-color: #FFFFFF;
`

export const PlusMinusIcon = styled.img`
display: flex;
width: 12px;
height: 12px;
margin: 0px;
padding: 0px;
`

export const CountCartText = styled.p`
display: flex;
margin: 0px;
padding: 0px;
color: black;
font-size: 16px;
font-weight: bold;
`

export const FilterContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 40px;
height: 40px;
margin: 0px;
padding: 0px;
border: 0.8px solid rgba(150, 150, 150, 0.4);
background-color: white;
`

export const FilterIcon = styled.img`
display: flex;
`

export const AddToListContainer = styled.div`
display: flex;
align-items: center;
background-color: #127119;
padding: 0px 12px 0px 12px;
margin: 0px;
height: 40px;
color: white;
gap: 8px;
`

export const AddToListIcon = styled.img`
display: flex;
width: 18px;
height: 18px;
`

export const AddToListText = styled.p`
display: flex;
text-transform: uppercase;
font-size: 16px;
`
