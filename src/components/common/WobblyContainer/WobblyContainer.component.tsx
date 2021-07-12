import React, { ReactNode, useEffect, useState } from "react";

interface Props extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode | ReactNode[];
}

const WobblyContainer = (props: Props) => {
  const { id, children, ...rest } = props;
  const [xPos, setXPos] = useState<number>(0);
  const [yPos, setYPos] = useState<number>(0);

  const onMouseMove = (e: MouseEvent) => {
    setXPos((e.clientX - window.innerWidth / 2) / 100);
    setYPos((e.clientY - window.innerHeight / 2) / 100);
  };

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);

    return () => document.removeEventListener("mousemove", onMouseMove);
  }, []);
  return (
    <div
      style={{
        marginRight: xPos ? `${-(xPos > 60 ? 60 : xPos) * 2}px` : ``,
        marginTop: yPos ? `${(yPos > 80 ? 80 : yPos) * 2}px` : ``,
        transition: "margin 0.4s ease-out",
      }}
      {...rest}>
      {children}
    </div>
  );
};

export default WobblyContainer;
