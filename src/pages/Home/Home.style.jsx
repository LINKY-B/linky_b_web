import styled from "styled-components";

export const HomeWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 95%;
`

export const StyledHomeList = styled.section`
    
`

export const StyledButtonContainer = styled.div`
    display: flex;
    // border: 1px solid blue;
`

export const StyledIndicateButton = styled.button`
    border-bottom: 1px solid ${(props) => props.current ? props.theme.colors.mainGreen : 'none'};
    font-size: ${props => props.theme.fontSize.sm};
`