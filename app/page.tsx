import DynamicContent from "./dynamic-component";
import styles from "./page.module.css";

export default async function Page(): Promise<JSX.Element> {
  const url = "http://worldtimeapi.org/api/timezone/America/Chicago";
  const response = await fetch(url);
  const cachedData = await response.json();
  const date = new Date(cachedData.datetime);

  return (
    <main className={styles.main}>
      <pre>
        💵 Cached Data: {date.toLocaleDateString()} {date.toLocaleTimeString()}
      </pre>
      <div className={styles.container}>
        {/* @ts-expect-error Async Server Component */}
        <DynamicContent />
      </div>
    </main>
  );
}
