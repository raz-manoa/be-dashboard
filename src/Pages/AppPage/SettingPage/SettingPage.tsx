import Card from "@/Components/Display/Card/Card";
import Text from "@/Components/General/Text/Text";
import styles from "./SettingPage.module.scss";
import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";
import { Link } from "react-router-dom";
import {useEffect, useState} from "react";

const SettingPage = () => {
  useSetAppLayoutTitle("Settings");
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    async function getInfo() {
      const company = localStorage.getItem('company') || '';
      const parsedCompany = JSON.parse(company);
      console.log(parsedCompany)
      setData(parsedCompany.CompanyAdmins)
    }

    getInfo();
  }, []);
  return (
        <Card className={styles.card}>
          <Text
              tag="h2"
              type="h2"
              size={19}
              variant="black2"
              className={styles.card__title}
          >
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
