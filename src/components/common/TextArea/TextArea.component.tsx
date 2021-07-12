import React, { forwardRef, HTMLProps } from "react";
import * as styles from "./TextArea.styles";

interface Props extends HTMLProps<HTMLTextAreaElement> {
  id: string;
  label: string;
  value: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, Props>((props, ref) => {
  const { className, style, label, id, value, ...rest } = props;

  return (
    <div className={className} css={styles.container} style={{ ...style }}>
      <textarea id={id} ref={ref} css={styles.input} value={value} {...rest} />
      <label htmlFor={id} css={styles.label}>
        {label}
      </label>
    </div>
  );
});

export default TextArea;
