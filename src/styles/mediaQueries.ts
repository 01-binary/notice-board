export const breakpoints = {
  sm: [0, 576],
  md: [576, 768],
  xl: [768, 1280],
  xxl: [1280, 3840],
};

export const mediaQueries = (key: keyof typeof breakpoints) => {
  return (style: TemplateStringsArray | string) => {
    const [minWidth, maxWidth] = breakpoints[key];
    return `@media screen and (min-width: ${minWidth}px) and (max-width: ${maxWidth}px) { ${style} }`;
  };
};

/** Example
 * const Box = styled.div<Box>`
 *   ${mediaQueries("md")`
 *     background-color: green;
 *   `};
 *   ${props => mediaQueries("md")(`width: ${props.width}px`)}
 * `
 */
