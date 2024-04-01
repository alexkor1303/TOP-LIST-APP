import { HTMLProps, ReactNode } from "react";

export interface ParagraphProps {
  size?: "small" | "medium" | "high";
  children: ReactNode;
}
