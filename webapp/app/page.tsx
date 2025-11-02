import styles from "./page.module.css";

export default function Home() {
  const hour = new Date().getHours();
  const timeOfDay =
    hour < 5
      ? "late night"
      : hour < 12
        ? "morning"
        : hour < 17
          ? "afternoon"
          : hour < 21
            ? "evening"
            : "night";

  const highlights = [
    {
      title: "Readable layout",
      description:
        "A clean hero section keeps the focus on your message and makes it easy to extend.",
    },
    {
      title: "Responsive by default",
      description:
        "The design adapts gracefully across devices, so your greeting always lands well.",
    },
    {
      title: "Ready for launch",
      description:
        "Ships with sensible defaults so you can deploy to Vercel in minutes.",
    },
  ];

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <span className={styles.badge}>Hi!</span>
          <h1>Welcome to your friendly Next.js greeting.</h1>
          <p>
            Good {timeOfDay}! This lightweight starter gives you a polished,
            production-ready “hello” that you can deploy to Vercel without
            touching a single config file.
          </p>
          <div className={styles.actions}>
            <a className={styles.primary} href="#highlights">
              See highlights
            </a>
            <a
              className={styles.secondary}
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
            >
              Next.js docs
            </a>
          </div>
        </section>

        <section id="highlights" className={styles.highlights}>
          {highlights.map((item) => (
            <article key={item.title} className={styles.card}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </article>
          ))}
        </section>
      </main>
      <footer className={styles.footer}>
        <p>
          Crafted with Next.js • Deploy on{" "}
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vercel
          </a>
        </p>
      </footer>
    </div>
  );
}
