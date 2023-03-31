import styles from "./page.module.css";

export default async function DynamicComponent(): Promise<JSX.Element> {
  const url = "http://worldtimeapi.org/api/timezone/America/Chicago";
  const revalidate = 5;
  const response = await fetch(url, { next: { revalidate } });
  const dynamicData = await response.json();
  const timestamp = JSON.stringify(dynamicData.datetime);

  return (
    <div className={styles.dynamicSection}>
      <pre
        className={styles.dynamicContent}
      >{`✨ Fresh Data (revalidate ${revalidate}): ${timestamp}`}</pre>
    </div>
  );
}
