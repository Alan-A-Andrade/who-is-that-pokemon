export interface themeType {
  shadow: string
  main: string
  secondary: string
  light: string
  select: string
  grey: string
  white: string
  redGrey: string
  fontSize: number
}

export function themeGenerator (red:number, green: number, blue: number, fontSize:number): themeType {
  const pallet = [red, green, blue];

  const mainColor = pallet.map(color => {
    if (color - 100 < 0) return 55;
    else return color;
  });
  const secondaryColor = pallet.map(color => {
    if (color - 100 < 0) return 5;
    else return color / 2;
  });
  const shadowColor = pallet.map(color => {
    if (color - 100 < 0) return 25;
    else return color - 60;
  });
  const lightColor = pallet.map(color => {
    if (color > 200) return 255;
    else return 220;
  });

  const redGrey = pallet.map(color => {
    if (color > 200) return color - 110;
    else return 85;
  });

  function transformIntoRGB (pallet: number[]) {
    return `rgb(${pallet[0]},${pallet[1]},${pallet[2]})`;
  }

  const generatedTheme = {
    shadow: transformIntoRGB(shadowColor),
    main: transformIntoRGB(mainColor),
    secondary: transformIntoRGB(secondaryColor),
    light: transformIntoRGB(lightColor),
    select: '#99B27C',
    grey: '#84807B',
    white: '#E9E1C1',
    redGrey: transformIntoRGB(redGrey),
    fontSize
  };

  return generatedTheme;
}
