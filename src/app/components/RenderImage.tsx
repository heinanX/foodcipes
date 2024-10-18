import Image from 'next/image';

const RenderImage = ({
  image,
  recipeTitle,
}: {
  image: [{ asset: { url: string } }];
  recipeTitle: string;
}) => {
  return (
    <>
      {image.map((item: { asset: { url: string } }, i: number) => (
        <Image
          key={i}
          src={item.asset.url}
          alt={`A visual photo of ${recipeTitle}`}
          fill={true}
          className="object-cover overflow-hidden"
        />
      ))}
    </>
  );
};

export default RenderImage;
