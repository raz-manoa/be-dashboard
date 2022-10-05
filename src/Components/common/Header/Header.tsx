import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../General/Icon/Icon";
import Text from "../../General/Text/Text";
import "./Header.scss";
interface HeaderProps {
  title: string;
}
export default function Header(props: HeaderProps) {
  const { title } = props;
  return (
    <div className="header">
      <Text tag="h1" type="h1" variant="grey">
        {title}
      </Text>
      <nav className="icon__nav">
        <Link to="/">
          <Icon icon="qr" color="#546e7a" />
        </Link>
        <Link to="/">
          <Icon icon="setting" color="#546e7a" />
        </Link>
        <Link to="/">
          <Icon icon="logout" color="#546e7a" />
        </Link>
        <Link to="/"></Link>
      </nav>
    </div>
  );
}
