"use client";
import { useEffect, useState } from "react";
import styles from "./Button.module.css";
import { ButtonProps } from "./Button.props";
import cn from "classnames";
import Arrow from "./arrow.svg";
export const ButtonElem = ({
  appearance,
  children,
  className,
  active = false,
  arrow = "none",
  ...props
}: ButtonProps): JSX.Element => {
  const [arrowPosition, setArrowPosition] = useState(active);
  const arrowPositionChange = () => {
    setArrowPosition(!arrowPosition);
  };

  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance == "primary",
        [styles.ghost]: appearance == "ghost",
      })}
      onClick={arrowPositionChange}
      {...props}>
      {children}
      {arrow != "none" && (
        <span
          className={cn(styles.arrow, {
            [styles.right]: !arrowPosition,
            [styles.down]: arrowPosition,
          })}>
          <Arrow />
        </span>
      )}
    </button>
  );
};
