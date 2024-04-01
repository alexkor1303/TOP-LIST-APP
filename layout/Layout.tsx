import { LayoutProps } from "./layout.props";
import styles from "./layout.module.css";
import cn from "classnames";
export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return;
  <>
    <Header />
    <div>
      <SideBar />
      <div>{children}</div>
    </div>
    <Footer />
  </>;
};
