import { css, Interpolation, CSSProp } from "styled-components";

const fontCreator = (fontSize: string, fontWeight: number, lineHeight: string) => {
  return css`
    font-size: ${fontSize};
    font-weight: ${fontWeight};
    line-height: ${lineHeight};
  `;
};

interface Theme {
  color: {
    bg1: "#43618F";
    bg2: "#3F445C";
    bg3: "#2A2F4A";

    blueBg3: "#2A2F4A";
    blueBg2: "#3F445C";
    blueBg1: "#43618F";

    blue800: "#2565CB";
    blue700: "#3A7BDF";
    blue600: "#6195E6";
    blue500: "#9DBDEF";
    blue400: "#A9CBFF";
    blue300: "#C8DEFF";
    blue200: "#E5F0FF";
    blue100: "#F4F9FF";

    pink800: "#EB4F27";
    pink700: "#ED774D";
    pink600: "#F1A187";

    gray900: "#000000";
    gray800: "#414447";
    gray700: "#5C656C";
    gray600: "#9199A4";
    gray500: "#B4BCC6";
    gray400: "#D0DAE3";
    gray300: "#E5E9ED";
    gray200: "#F1F5F8";
    gray100: "#F9F9FA";

    white: "#FFFFFF";
    navy: "#161C3A";
    error: "#EE5151";
    success: "#0CBC72";
  };
  font: {
    subtitle1: Interpolation<object>[];
    subtitle2: Interpolation<object>[];
    subtitle3: Interpolation<object>[];
    subtitle4: Interpolation<object>[];
    subtitle5b: Interpolation<object>[];
    subtitle5r: Interpolation<object>[];

    body1b: Interpolation<object>[];
    body1r: Interpolation<object>[];
    body2b: Interpolation<object>[];
    body2r: Interpolation<object>[];
    body3b: Interpolation<object>[];
    body3r: Interpolation<object>[];

    caption1b: Interpolation<object>[];
    caption1l: Interpolation<object>[];
    caption2b: Interpolation<object>[];
    caption2r: Interpolation<object>[];
  };
  scroll: CSSProp;
  unableToDrag: CSSProp;
  grabbable: CSSProp;
  textOverflow: CSSProp;
  borderInset: CSSProp;
  borderOutset: CSSProp;
}

export const theme: Theme = {
  color: {
    bg1: "#43618F",
    bg2: "#3F445C",
    bg3: "#2A2F4A",

    blueBg3: "#2A2F4A",
    blueBg2: "#3F445C",
    blueBg1: "#43618F",

    blue800: "#2565CB",
    blue700: "#3A7BDF",
    blue600: "#6195E6",
    blue500: "#9DBDEF",
    blue400: "#A9CBFF",
    blue300: "#C8DEFF",
    blue200: "#E5F0FF",
    blue100: "#F4F9FF",

    pink800: "#EB4F27",
    pink700: "#ED774D",
    pink600: "#F1A187",

    gray900: "#000000",
    gray800: "#414447",
    gray700: "#5C656C",
    gray600: "#9199A4",
    gray500: "#B4BCC6",
    gray400: "#D0DAE3",
    gray300: "#E5E9ED",
    gray200: "#F1F5F8",
    gray100: "#F9F9FA",

    white: "#FFFFFF",
    navy: "#161C3A",
    error: "#EE5151",
    success: "#0CBC72",
  },
  font: {
    subtitle1: fontCreator("40px", 700, "150%"),
    subtitle2: fontCreator("32px", 700, "150%"),
    subtitle3: fontCreator("28px", 700, "150%"),
    subtitle4: fontCreator("24px", 700, "150%"),
    subtitle5b: fontCreator("20px", 700, "150%"),
    subtitle5r: fontCreator("20px", 400, "150%"),

    body1b: fontCreator("18px", 700, "150%"),
    body1r: fontCreator("18px", 400, "150%"),
    body2b: fontCreator("16px", 700, "150%"),
    body2r: fontCreator("16px", 400, "150%"),
    body3b: fontCreator("14px", 700, "160%"),
    body3r: fontCreator("14px", 500, "160%"),

    caption1b: fontCreator("12px", 700, "150%"),
    caption1l: fontCreator("12px", 300, "150%"),
    caption2b: fontCreator("10px", 700, "160%"),
    caption2r: fontCreator("10px", 400, "160%"),
  },
  scroll: css`
    overflow-y: scroll;

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
  `,
  unableToDrag: css`
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  `,
  grabbable: css`
    cursor: move; /* fallback if grab cursor is unsupported */
    cursor: grab;
    cursor: -moz-grab;
    cursor: -webkit-grab;
  `,
  textOverflow: css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,
  borderInset: css`
    border: 3px inset white;
  `,
  borderOutset: css`
    border: 2px outset white;
  `,
};

export type fontKeys = keyof typeof theme.font;
export type ColorKeys = keyof typeof theme.color;
