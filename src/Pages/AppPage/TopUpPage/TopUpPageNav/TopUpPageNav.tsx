import styles from "./TopUpPageNav.module.scss";
interface TopUpPageNavProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export default function TopUpPageNav(props: TopUpPageNavProps) {
  const { label, active, onClick } = props;
  return (
    <button
      className={`${styles.nav} ${active ? styles.nav__active : ""}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
