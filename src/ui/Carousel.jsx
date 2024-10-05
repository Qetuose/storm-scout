import { Children } from "react";

function Carousel({ children }) {
  console.log(Children.count(children));
  return <div className="flex">{children}</div>;
}

export default Carousel;
