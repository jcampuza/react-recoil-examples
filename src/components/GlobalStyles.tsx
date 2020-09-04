import { createGlobalStyle, css } from 'styled-components';

export const RootStyles = createGlobalStyle`
  *,*::before,*::after {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    ${(props) => css`
      background-color: ${props.theme.background};
      color: ${props.theme.text};
    `}

    transition: background-color ease-out 150ms;
    line-height: 1.5;
  }

  body {
    min-height: 100vh;
  }

  code, pre {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    white-space: pre-line;
  }

  h1, h2, h3, h4, h5, h6, p, li, ul {
    margin: 0;
    padding: 0;
  }
`;
