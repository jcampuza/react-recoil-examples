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

  input {
    border-radius: 3px;
    border: 1px solid #333;
    padding: 0.5rem 0.5rem;
  }

  label {
    display: flex;
    flex-direction: column;

    span {
      margin-bottom: 0.5rem;
    }
  }

  button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 2px;
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.white};
    min-width: 80px;
    cursor: pointer;

    + button {
      margin-left: 1rem;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  hr {
    border-color: ${(props) => props.theme.text};
    margin: 1rem 0 ;
  }
`;
