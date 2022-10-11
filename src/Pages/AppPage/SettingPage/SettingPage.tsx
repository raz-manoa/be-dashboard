import Card from "@/Components/Display/Card/Card";
import Text from "@/Components/General/Text/Text";
import styles from "./SettingPage.module.scss";
import React from "react";

const SettingPage = () => {
  const data = [
    {
      user: "John Smith",
      company: "johnsmith@company.com",
    },
    {
      user: "Jane Doe",
      company: "johndoe@company.com",
    },
    {
      user: "Tim Armstrong",
      company: "timarmstrong@company.com",
    },
  ];
  return (
    <Card className={styles.card}>
      <Text tag="h2" type="h2" size={19} className={styles.card__title}>
        Access
      </Text>
      {data.map((d, index) => (
        <div className={styles.card__list} key={`d-${index}`}>
          <Text tag="span" type="span" variant="grey">
            {d.user}
          </Text>
          <Text tag="p" type="p" variant="red" className={styles.company}>
            {d.company}
          </Text>
        </div>
      ))}
    </Card>
  );
};
export default SettingPage;
