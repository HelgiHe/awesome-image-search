import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    color: {
      text: string;
      background: string;
      primary: string;
      secondary: string;
      accent: string;
      border: string;
      error: string;
    };
    spacing: {
      single: string;
      double: string;
    };
  }
}
