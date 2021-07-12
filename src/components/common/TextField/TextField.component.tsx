import React, { forwardRef, HTMLProps } from "react";
import * as styles from "./TextField.styles";

interface Props extends HTMLProps<HTMLInputElement> {
  id: string;
  label: string;
  value: string;
}

const TextField = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { className, style, type = "text", label, id, value, ...rest } = props;

  return (
    <div className={className} css={styles.container} style={{ ...style }}>
      <input id={id} ref={ref} type={type} css={styles.input} value={value} {...rest} />
      <label htmlFor={id} css={styles.label}>
        {label}
      </label>
    </div>
  );
});

export default TextField;
