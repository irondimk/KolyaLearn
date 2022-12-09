import styled from 'styled-components';

export const PagesContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.red(0.4)};
    border-radius: ${({ theme }) => theme.decorations.borderRadius.base}px;
`;
