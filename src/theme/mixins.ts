import { css } from 'styled-components';

import { TTypography } from './typography';
import { COLOR_BRIGHTNESS } from './utils';

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
    fieldStyles: css`
        color: ${({ theme }) => theme.colors.base()};
        font-size: 14px;
        line-height: 18px;
        border-radius: ${({ theme }) => theme.decorations.borderRadius?.base}px;
        outline: none;
        padding: 13px 18px;
        width: 100%;
        background-color: ${({ theme }) => theme.colors.white()};
        transition: ${({ theme }) => theme.decorations.transition.base};

        &::placeholder {
            color: ${({ theme }) => theme.colors.base(COLOR_BRIGHTNESS.LIGHT)};
        }
    `,
    fieldLabelStyles: css`
        position: absolute;
        top: 0;
        left: 8px;
        background-color: ${({ theme }) => theme.colors.white()};
        padding: 0 10px;
        z-index: 2;
        transition: ${({ theme }) => theme.decorations.transition.base};
    `,
    mainGrid: css`
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        max-width: 1388px;
        padding: 0 24px;
        display: grid;
        grid-template-columns: 390px 1fr;
        grid-column-gap: 68px;

        @media ${({ theme }) => theme.breakpoints.sm} {
            padding: 0 15px;
        }
    `,
    dropdownItem: css`
        padding: 20px 16px 20px 19px;
        width: 100%;
        ${center};
        justify-content: space-between;
    `,
    textOverflowDots: css`
        width: 100%;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    `,
    modalHeader: css`
        height: 100px;
        background-color: ${({ theme }) => theme.colors.lightGrey()};
        display: flex;
        padding: 40px 50px 0;

        @media ${({ theme }) => theme.breakpoints.sm} {
            height: 80px;
            padding: 30px 20px 0;
        }
    `,
    getTypography: (typographyType: keyof TTypography) => css`
        ${({ theme }) => theme.helpers.getTypography(typographyType)}
    `,
};

export default mixins;
