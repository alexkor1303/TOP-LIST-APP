import { FooterProps } from "./Footer.props";
import styles from "./Footer.module.css";
import cn from "classnames";
import { format } from "date-fns";
export const Footer = ({ ...props }: FooterProps): JSX.Element => {
  return (
    <footer {...props}>
      <div className={styles.wrapper}>
        <span className={styles.developer}>
          Alexander Koryakin © {format(new Date(), "yyyy")} Все права защищены
        </span>
        <a href="#" target="blank" className={styles.userPolitic}>
          Пользовательское соглашение
        </a>
        <a href="#" target="blank" className={styles.confidencePolitic}>
          Политика конфиденциальности
        </a>
        {""}
      </div>
    </footer>
  );
};
