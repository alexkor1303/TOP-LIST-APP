import { ParagraphProps } from "./Paragraph.props";
import styles from "./Paragraph.module.css";
import cn from "classnames";
import className from "classnames";

export const Paragraph = ({
  size = "medium",
  children,
}: ParagraphProps): JSX.Element => {
  return (
    <p
      className={cn(styles.p, className, {
        [styles.small]: size == "small",
        [styles.medium]: size == "medium",
        [styles.high]: size == "medium",
      })}>
      {children}
    </p>
  );
};
