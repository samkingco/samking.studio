import Link from "next/link";

interface Props {
  children: React.ReactNode;
}

export function Layout({ children }: Props) {
  return (
    <main className="wrapper">
      <header>
        <h1>
          <Link href="/">
            <a>
              Sam King
              <br />
              Studio—
            </a>
          </Link>
        </h1>

        <h3 className="mono small">
          solo software studio with a focus on web3
        </h3>

        <nav className="top-nav mono small">
          <Link href="/working-together">
            <a>working together</a>
          </Link>

          <span className="subdued separator">|</span>

          <Link href="/contact">
            <a>get in touch</a>
          </Link>
        </nav>
      </header>

      <hr />

      <section className="content">{children}</section>

      <footer>
        <p className="subdued small">
          Sam King Studio Ltd.
          <br />
          Registered in England &amp; Wales. Company No. 13775597.
          <br />
          Registered Office Only: 7 Bell Yard, London, WC2A 2JR
        </p>
      </footer>
    </main>
  );
}
