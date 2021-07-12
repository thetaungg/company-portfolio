import React, { useContext } from "react";
import ChevronUp from "../../../assets/images/icons/cheveron-up.inline.svg";
import ChevronDown from "../../../assets/images/icons/cheveron-down.inline.svg";
import { NavigationContext } from "../../../contexts/navigation/navigation.context";
import * as styles from "./PageChangeArrows.styles";

const PageChangeArrows = () => {
  const { totalPages, currentPage, onPageChange } = useContext(NavigationContext);

  const onNext = () => onPageChange(currentPage + 1);
  const onPrev = () => onPageChange(currentPage - 1);

  return (
    <>
      {currentPage !== 0 && (
        <div css={styles.upArrow} onClick={onPrev}>
          <ChevronUp />
        </div>
      )}

      {currentPage + 1 !== totalPages && (
        <div css={styles.downArrow} onClick={onNext}>
          <ChevronDown />
        </div>
      )}
    </>
  );
};

export default PageChangeArrows;
