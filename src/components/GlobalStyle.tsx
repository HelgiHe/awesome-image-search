import React from "react";
import { Global, css } from "@emotion/react";
import { Theme, useTheme } from "@emotion/react";

const GlobalStyle = () => {
  const theme: Theme = useTheme();
  return (
    <Global
      styles={css`
        *,
        *::after,
        *::before {
          box-sizing: border-box;
        }
        body {
          background: ${theme.color.background};
          padding: ${theme.spacing.single};
        }
        main {
          min-height: 90vh;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        label {
          margin: 0px;
          color: ${theme.color.text};
          font-family: -apple-system, Segoe UI, Roboto, Noto Sans, Ubuntu,
            Cantarell, Helvetica Neue;
        }
      `}
    />
  );
};

export { GlobalStyle };
