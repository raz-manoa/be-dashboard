import Card from "@/Components/Display/Card/Card";
import Text from "@/Components/General/Text/Text";
import styles from "./SettingPage.module.scss";
import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";
import { Link } from "react-router-dom";

const data = [
  {
    user: "John Smith",
    email: "johnsmith@company.com",
    path: "#",
  },
  {
    user: "Jane Doe",
    email: "johndoe@company.com",
    path: "#",
  },
  {
    user: "Tim Armstrong",
    email: "timarmstrong@company.com",
    path: "#",
  },
];

const SettingPage = () => {
  useSetAppLayoutTitle("Settings");
  return (
    <Card className={styles.card}>
      <Text tag="h2" type="h2" size={19} className={styles.card__title}>
        Access
      </Text>
      {data.map((d, index) => (
        <div className={styles.card__list} key={`d-${index}`}>
          <Text tag="span" type="span" variant="grey" size={12}>
            {d.user}
          </Text>
          <Link to={d.path}>
            <Text tag="p" type="p" variant="red" className={styles.company}>
              {d.email}
            </Text>
          </Link>
        </div>
      ))}
    </Card>
  );
};
export default SettingPage;
