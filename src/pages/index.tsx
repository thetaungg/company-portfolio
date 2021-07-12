import React, { useContext, useEffect, useState } from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import ReactPageScroller from "react-page-scroller"; // declared our own type definition
import { keyframes } from "@emotion/react";
import Pagination from "../components/common/Pagination/Pagination.component";
import PageScroller from "../components/LandingPage/PageScroller/PageScroller.component";
import PageChangeArrows from "../components/LandingPage/PageChangeArrows/PageChangeArrows.component";

const IndexPage = () => {
  return (
    <DefaultLayout>
      <>
        <PageScroller />
        <Pagination />
        <PageChangeArrows />
      </>
    </DefaultLayout>
  );
};

const clickme = keyframes`
0% {
}

33% {
  background: #fff;
  box-shadow: 0 3px 3px rgb(0 0 0 / 10%);
  transform: scale(1.2) translate3d(0,0,0);
}
50% {
  transform: scale(1.3) translate3d(0,0,0);
}
66% {
  background: #fff;
  box-shadow: 0 3px 3px rgb(0 0 0 / 10%);
  transform: scale(1.2) translate3d(0,0,0);
}
100% {
}
`;

export default IndexPage;
