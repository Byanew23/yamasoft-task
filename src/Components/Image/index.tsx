import React, { useState } from "react";

export const Image = ({
  src,
  className,
  name,
}: {
  src?: string;
  className: string;
  name?: string;
}) => {
  const [source, setSource] = useState<string>(src || "");
  console.log(src);
  return (
    <>
      <img
        src={source}
        className={className}
        alt={name?.toLowerCase().replace(" ", "-")}
        onError={() => setSource(`https://placehold.net/800x600.png`)}></img>
    </>
  );
};
