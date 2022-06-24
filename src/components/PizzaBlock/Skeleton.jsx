import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader
        className="pizza-block"
        speed={2}
        width={280}
        height={500}
        viewBox="0 0 280 500"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
      <circle cx="135" cy="143" r="132" />
      <rect x="0" y="279" rx="10" ry="16" width="233" height="33" />
      <rect x="0" y="336" rx="10" ry="16" width="280" height="88" />
      <rect x="0" y="445" rx="13" ry="16" width="95" height="30" />
      <rect x="118" y="447" rx="25" ry="30" width="152" height="45" />
    </ContentLoader>
)

export default Skeleton