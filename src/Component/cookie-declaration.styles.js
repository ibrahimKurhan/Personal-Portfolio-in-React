import styled from "styled-components";

export const CookieDeclarationContainer = styled.div`
  grid-column: 1/13;
  width: auto;
  margin: 30px 16px;
  @media (min-width: ${({ theme }) => theme.size.tablet}) {
    grid-column: 2/12;
    margin: 50px 0px;
    margin-bottom: 30px;
  }

  a {
    color: ${({ theme }) => theme.colors.azureBlue} !important;
  }
  .CookieDeclarationType {
    border: none;
  }
`;
