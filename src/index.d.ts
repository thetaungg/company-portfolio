declare module "react-page-scroller" {
  import { Component, ReactNode } from "react";

  export interface ReactPageScrollerProps {
    animationTimer?: number; // Animation duration in milliseconds // default: 1000
    animationTimerBuffer?: number; // Animation buffer timing // default: 200
    blockScrollUp?: boolean; // block scroll up // default: false
    blockScrollDown?: boolean; // block scroll down // default: false
    containerHeight?: number; // height of react-page-scroller element // default: 100vh
    containerWidth?: number; // width of react-page-scroller element // default: 100vw
    customPageNumber?: any; // external selected page, number of pages should start from 0, should be combined with pageOnChange usage (see example in demo/src/FullPage.js for more information). This prop was introduced as a replacement for "goToPage" method from legacy version
    renderAllPagesOnFirstRender?: boolean; // flag for render all pages at first render of component
    transitionTimingFunction?: string; // CSS transition timing function name // default "ease-in-out"
    handleScrollUnavailable?: () => any; // callback, is calling when someone tries to scroll over last or first child component
    onBeforePageScroll?: (nextIndex: number) => any; // callback before page scroll occured (passes the index of next page in argument)
    pageOnChange?: (pageNumber: number) => any; // callback after page was scrolled
    children: ReactNode[];
  }

  export default class ReactPageScroller extends Component<ReactPageScrollerProps, any> {}
}

declare module "*.jpg";
declare module "*.svg";
declare module "*.png";
