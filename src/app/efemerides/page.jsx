import { HorizonsContent } from "../ui/Ephemeris/HorizonsContent";
import Sidebar from "../ui/Ephemeris/Sidebar";
import styles from "./ephemeris.module.css";

export const metadata = {
  title: "Efemérides | DINACE",
  description: "",
};
export default function Page() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className="w-full">
        <HorizonsContent />
      </div>
    </div>
  );
}
