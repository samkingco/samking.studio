import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import "../styles/globals.css";
import { trpc } from "../utils/trpc";

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const title = "Sam King Studio—";
  const description =
    "A solo software engineering and design studio with a focus on web3. Currently available for new projects.";

  const baseUrl = "https://samking.studio";
  const url = `${baseUrl}${router.asPath}`;
  const ogImage = `${baseUrl}/og-image.jpg`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={title} />

        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@samkingco" />
      </Head>

      <Script
        defer
        data-domain="samking.studio"
        src="https://plausible.io/js/plausible.js"
        strategy="afterInteractive"
      />
      <Component {...pageProps} />
    </>
  );
}

export default trpc.withTRPC(App);
