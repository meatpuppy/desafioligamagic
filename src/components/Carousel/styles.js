import styled from "styled-components"

export const CarouselBody = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-items: evenly;
gap: 10px;
`

export const ArrowLeft = styled.img`
width: 15px;
height: 18px;
transform: rotate( 90deg );
`

export const ArrowRight = styled.img`
width: 15px;
height: 18px;
transform: rotate( 270deg );
`


export const MiniCardDisplay = styled.img`
display: flex;
width: 106px;
`

export const GrayedOutMiniCard = styled.img`
display: flex;
width: 106px;
filter: grayscale(100%);
opacity: 50%;
`