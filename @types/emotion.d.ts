import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    color: {
      text: string;
      background: string;
      primary: string;
      secondary: string;
      border: string;
    };
    spacing: {
      single: string;
      double: string;
    };
  }
}
