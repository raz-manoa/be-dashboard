import React, { AllHTMLAttributes, ReactNode, useEffect, useRef } from "react";
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import styles from "./Scrollbar.module.scss";

interface ScrollbarProps extends AllHTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export default function Scrollbar(props: ScrollbarProps) {
  const { className = "", children, ...rest } = props;
  const scrollbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollbarRef.current) {
      const ps = new PerfectScrollbar(scrollbarRef.current);
    }
  }, []);

  return (
    <div
      className={`${className} ${styles.ps} relative`}
      {...rest}
      ref={scrollbarRef}
    >
      {children}
    </div>
  );
}
