import { TagProps } from "./Tag.props";
import style from "./Tag.module.css";
import cn from "classnames";

export const Tag = ({
  size = "small",
  color = "ghost",
  children,
  link,
  className,
  ...props
}: TagProps) => {
  return (
    <div
      className={cn(style.tag, className, {
        [style.small]: size == "small",
        [style.medium]: size == "medium",
        [style.red]: color == "red",
        [style.green]: color == "green",
        [style.gray]: color == "gray",
        [style.ghost]: color == "ghost",
        [style.primary]: color == "primary",
      })}>
      {link ? <a href={link}>{children}</a> : children}
    </div>
  );
};
