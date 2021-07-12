import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";
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

export default IndexPage;
