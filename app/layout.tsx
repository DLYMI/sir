import type { Metadata } from "next";
import Script from 'next/script';
import { auth } from "@/auth";
import { Gloock, Roboto, Bitter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

import HubspotTracking from "@/app/components/Hubspot/embed";

import "./globals.css";

import {
  Experimental_CssVarsProvider as CssVarsProvider,
  StyledEngineProvider,
} from "@mui/material/styles";
import { theme } from "./theme";

const gloock = Gloock({
  weight: "400",
  variable: "--font-gloock",
  preload: false,
});

const bitter = Bitter({
  weight: "400",
  variable: "--font-bitter",
  preload: false,
});

const roboto = Roboto({
  weight: "400",
  variable: "--font-roboto",
  preload: false,
});

export const metadata: Metadata = {
  title: "SIR",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	const session = await auth();

  return (
    <StyledEngineProvider injectFirst>
      <CssVarsProvider theme={theme}>
        <html lang="en">
          <body
            className={`${gloock.variable} ${roboto.variable} ${bitter.variable}`}
          >
            {children}
          </body>
          <GoogleAnalytics gaId="G-MMYG827PJL" />
					<Script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/44439799.js" strategy="beforeInteractive" />
					<HubspotTracking session={session} />
        </html>
      </CssVarsProvider>
    </StyledEngineProvider>
  );
}
