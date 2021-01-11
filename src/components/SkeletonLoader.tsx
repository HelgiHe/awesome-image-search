import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonLoader = (props) => (
  <ContentLoader
    speed={2}
    width={300}
    height={460}
    viewBox="0 0 300 300"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="12" y="58" rx="2" ry="2" width="211" height="211" />
    <rect x="12" y="275" rx="2" ry="2" width="160" height="211" />
    <rect x="183" y="275" rx="2" ry="2" width="40" height="211" />
  </ContentLoader>
);

export { SkeletonLoader };
