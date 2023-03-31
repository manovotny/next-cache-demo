import styles from "./page.module.css";

export default async function DynamicComponent(): Promise<JSX.Element> {
  const url = "http://worldtimeapi.org/api/timezone/America/Chicago";
  const revalidate = 5;
  const response = await fetch(url, { next: { revalidate } });
  const dynamicData = await response.json();
  const date = new Date(dynamicData.datetime);

  return (
    <div className={styles.dynamicSection}>
      <pre className={styles.dynamicContent}>
        <p>
          ✨ Fresh Data: {date.toLocaleDateString()} {date.toLocaleTimeString()}
        </p>
        <p>(revalidate {revalidate})</p>
      </pre>
    </div>
  );
}
