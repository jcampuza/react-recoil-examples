import React from 'react';
import styled, { css } from 'styled-components';

export type TextVariant = 'title' | 'subtitle' | 'body';

export interface TextProps {
  variant?: TextVariant;
  invert?: boolean;
  white?: boolean;
  gutter?: boolean;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'strong';
}

export type StyledTextProps = Omit<TextProps, 'tag'>;

const defaultColorStyles = css`
  color: ${(props) => props.theme.text};
`;

const invertedColorStyles = css`
  color: ${(props) => props.theme.textInvert};
`;

const whiteColorStyles = css`
  color: ${(props) => props.theme.white};
`;

const getTextColorStyles = (props: StyledTextProps) => {
  if (props.invert) {
    return invertedColorStyles;
  }

  if (props.white) {
    return whiteColorStyles;
  }

  return defaultColorStyles;
};

const bodyTextStyles = css`
  font-size: 1rem;
  font-weight: 400;
`;

const subtitleTextStyles = css`
  font-size: 1.5rem;
  font-weight: 600;
`;

const titleTextStyles = css`
  font-size: 1.7rem;
  font-weight: 300;
`;

const getTextVariantStyles = (props: StyledTextProps) => {
  switch (props.variant) {
    case 'title':
      return titleTextStyles;
    case 'body':
      return bodyTextStyles;
    case 'subtitle':
      return subtitleTextStyles;
    default:
      return titleTextStyles;
  }
};

const getTextGutterForVariant = (props: StyledTextProps) => {
  switch (props.variant) {
    case 'title': {
      return css`
        margin-bottom: ${(props) => props.theme.unit * 8}px;
      `;
    }
    case 'subtitle': {
      return css`
        margin-bottom: ${(props) => props.theme.unit * 6}px;
      `;
    }
    case 'body': {
      return css`
        margin-bottom: ${(props) => props.theme.unit * 4}px;
      `;
    }
    default: {
      return null;
    }
  }
};

const getTextGutterStyles = (props: StyledTextProps) => {
  if (props.gutter) {
    return getTextGutterForVariant(props);
  }

  return null;
};

const StyledText = styled.p<StyledTextProps>`
  ${getTextColorStyles};
  ${getTextVariantStyles}
  ${getTextGutterStyles}
`;

export const Text: React.FC<TextProps> = ({
  tag = 'p',
  variant = 'body',
  invert = false,
  white = false,
  gutter = false,
  children,
}) => {
  return (
    <StyledText as={tag} variant={variant} invert={invert} white={white} gutter={gutter}>
      {children}
    </StyledText>
  );
};
