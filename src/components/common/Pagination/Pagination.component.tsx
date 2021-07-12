import React, { HTMLProps, useContext, useEffect, useState } from "react";
import * as styles from "./Pagination.styles";
import { NavigationContext } from "../../../contexts/navigation/navigation.context";

interface Props extends HTMLProps<HTMLDivElement> {}

const Pagination = (props: Props) => {
  const { totalPages, currentPage, onPageChange } = useContext(NavigationContext);
  const [markers, setMarkers] = useState<{ id: number }[]>([]);

  useEffect(() => {
    const newMarkers = [];

    for (let i = 0; i < totalPages; i++) {
      newMarkers.push({
        id: i + 1,
      });
    }
    setMarkers(newMarkers);
  }, []);

  return (
    <div css={styles.pagination} {...props}>
      {markers.map((item) => (
        <div
          key={item.id}
          css={styles.marker(currentPage === item.id - 1)}
          onClick={() => onPageChange(item.id - 1)}
        />
      ))}
    </div>
  );
};

export default Pagination;
