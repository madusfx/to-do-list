type CarouselCardProps = {
  image?: string;
  category: string;
  description: string;
  href: string;
};

export function CarouselCard({
  image,
  category,
  description,
  href,
}: CarouselCardProps) {
  return (
    <div className="bg-white rounded-2xl drop-shadow-md w-50 sm:w-80 h-[430px]">
      <img src={image} alt="" />
      <div className="mx-3 my-2 border border-customGray px-2 py-1 rounded-2xl inline-block">
        <p className="text-customGray text-base">{category}</p>
      </div>
      <p className="mx-3 my-2 text-lg text-customBlue">{description}</p>
      <a
        href={href}
        className="absolute bottom-0 left-0 mx-3 mb-2 text-customGreen text-base"
      >
        read more
      </a>
    </div>
  );
}
