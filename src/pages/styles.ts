import styled from 'styled-components';
import Typography from '../components/Typography';

export const PagesContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.red()};
    border-radius: ${({ theme }) => theme.decorations.borderRadius?.base}px;
`;

export const CheckboxLabelText = styled(Typography).attrs({ variant: 'regular12' })``;
