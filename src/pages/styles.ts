import styled from 'styled-components';

export const PagesContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.mainBackground()};
    border-radius: ${({ theme }) => theme.decorations.borderRadius.base}px;
    box-shadow: ${({ theme }) => theme.decorations.boxShadow.default.xs};
`;
