export type TTypographyItem = {
    fontSize: number;
    lineHeight: number;
    fontWeight?: number;
    textTransform?: string;
};

export type TTypography = {
    regular10: TTypographyItem;
    regular12: TTypographyItem;
    medium12: TTypographyItem;
    regular14: TTypographyItem;
    medium14: TTypographyItem;
    bold14: TTypographyItem;
    subheading: TTypographyItem;
    subheading2: TTypographyItem;
    title: TTypographyItem;
    bigTitle: TTypographyItem;
    headline: TTypographyItem;
    medium34: TTypographyItem;
    medium54: TTypographyItem;
};

const typography: TTypography = {
    regular10: {
        fontSize: 10,
        lineHeight: 12,
    },
    regular12: {
        fontSize: 12,
        lineHeight: 14,
    },
    medium12: {
        fontSize: 12,
        lineHeight: 14,
        fontWeight: 500,
    },
    regular14: {
        fontSize: 14,
        lineHeight: 16,
    },
    medium14: {
        fontSize: 14,
        lineHeight: 16,
        fontWeight: 500,
    },
    bold14: {
        fontSize: 14,
        lineHeight: 16,
        fontWeight: 600,
    },
    subheading: {
        fontSize: 16,
        lineHeight: 19,
    },
    subheading2: {
        fontSize: 16,
        lineHeight: 19,
        fontWeight: 500,
    },
    title: {
        fontSize: 18,
        lineHeight: 21,
    },
    bigTitle: {
        fontSize: 20,
        lineHeight: 23,
    },
    headline: {
        fontSize: 24,
        lineHeight: 28,
    },
    medium34: {
        fontWeight: 500,
        fontSize: 34,
        lineHeight: 42,
    },
    medium54: {
        fontWeight: 500,
        fontSize: 52,
        lineHeight: 62,
    },
};

export default typography;
