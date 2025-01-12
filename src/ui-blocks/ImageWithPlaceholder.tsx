import { useState } from "react";

export default function ImageWithPlaceholder(props: {
  src: string,
  placeholderSrc: string,
  className: string
}) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div>
      {!imageLoaded && <img src={props.placeholderSrc} className={props.className}/>}
      <img
        className={props.className}
        src={props.src}
        style={imageLoaded ? {} : { display: `none` }}
        onLoad={() => setImageLoaded(true)}
      />
    </div>
  );
}