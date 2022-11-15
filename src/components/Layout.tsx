import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  children: React.ReactNode;
}

export function Layout({ children }: Props) {
  const router = useRouter();

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
          <ul>
            <li>
              <Link href="/">
                <a className={router.pathname === "/" ? "active" : ""}>
                  studio index
                </a>
              </Link>
            </li>

            <li>
              <Link href="/working-together">
                <a
                  className={
                    router.pathname.startsWith("/working-together")
                      ? "active"
                      : ""
                  }
                >
                  working together
                </a>
              </Link>
            </li>

            <li>
              <Link href="/contact">
                <a
                  className={
                    router.pathname.startsWith("/contact") ? "active" : ""
                  }
                >
                  contact
                </a>
              </Link>
            </li>
          </ul>
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
