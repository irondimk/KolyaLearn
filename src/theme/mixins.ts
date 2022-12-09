import { css } from 'styled-components';
import { TTypography } from './typography';

const start = `
    display: flex;
    align-items: flex-start;
`;

const end = `
    display: flex;
    align-items: flex-end;
`;

const center = `
    display: flex;
    align-items: center;
`;

const mixins = {
    flexStart: css`
        ${start}
    `,
    flexEnd: css`
        ${end}
    `,
    flexCenter: css`
        ${center}
    `,
    flexStartCenter: css`
        ${start};
        justify-content: center;
    `,
    flexCenterCenter: css`
        ${center};
        justify-content: center;
    `,
    flexEndCenter: css`
        ${end};
        justify-content: center;
    `,
    getTypography: (typographyType: keyof TTypography) => css`
        ${({ theme }) => theme.helpers.getTypography(typographyType)}
    `,
};

export default mixins;
