import { transparentize } from 'polished';

export enum COLOR_BRIGHTNESS {
    'LIGHTEST' = 10,
    'LIGHT' = 30,
    'PRE_MEDIUM' = 40,
    'MEDIUM' = 50,
    'HARD' = 87,
}

type TColorsWithOpacity<C> = { [I in keyof C]: (grade?: COLOR_BRIGHTNESS) => I };

export function createPalette<C>(colors: C): TColorsWithOpacity<C> {
    const result: TColorsWithOpacity<C> = {} as TColorsWithOpacity<C>;

    Object.keys(colors).forEach((color) => {
        Object.defineProperty(result, color, {
            enumerable: true,
            get: () => (grade?: COLOR_BRIGHTNESS) => {
                // @ts-ignore colors[color]
                if (!grade) return colors[color];

                const hashMap = {
                    [COLOR_BRIGHTNESS.HARD]: 0.13,
                    [COLOR_BRIGHTNESS.MEDIUM]: 0.5,
                    [COLOR_BRIGHTNESS.PRE_MEDIUM]: 0.6,
                    [COLOR_BRIGHTNESS.LIGHT]: 0.7,
                    [COLOR_BRIGHTNESS.LIGHTEST]: 0.9,
                };

                // @ts-ignore colors[color]
                return transparentize(hashMap[grade], colors[color]);
            },
        });
    });

    return result;
}
