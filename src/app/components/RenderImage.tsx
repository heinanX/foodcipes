/* eslint-disable @next/next/no-img-element */

import Image from 'next/image';

const RenderImage = ({ image }: { image: [{ asset: { url: string } }] }) => {
  return (
    <>
      {image.map((item: { asset: { url: string } }, i: number) => (
        <Image
          key={i}
          src={item.asset.url}
          alt="image depicting mentioned food"
          fill={true}
          className="object-cover overflow-hidden"
        />
      ))}
    </>
  );
};

export default RenderImage;
