import Text from "@/Components/General/Text/Text";
import Alert from "antd/es/alert";
import React from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import styles from "./ConfirmModal.module.scss";
interface ConfirmModalProps {
  title: string;
  date: string;
  msg: string;
  firstTxt?: string;
  link?: string;
  to: string;
}
export default function ConfirModal(props: ConfirmModalProps) {
  const { title, date, msg, firstTxt, link = "", to } = props;
  return (
    <div>
      <Text tag="h2" type="h2" className="mb-6">
        {title}
      </Text>
      <Text tag="p" type="p" variant="grey" className="mb-4" size={14}>
        {date}
      </Text>
      <Alert message={msg} type="success" className={styles.alert} />
      <div className="text-center">
        <Text tag="p" type="p" variant="grey">
          {firstTxt}
        </Text>
        {link != "" && (
          <Text tag="p" type="p" variant="grey" className={styles.txt}>
            the status of your request, please see
            <Link to={to} title="">
              {link}
            </Link>
          </Text>
        )}
      </div>
    </div>
  );
}
