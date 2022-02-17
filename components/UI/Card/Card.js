import Link from 'next/link';

const Card = ({ slug, image, title, description, tag }) => {

  return (
    <div className="w-full lg:p-8 p-5 pt-0">
      <Link href={'/post/[category]/[postSlug]'} as={`/post/${tag}/${slug}`}>
        <div className="w-full h-full p-3 rounded-xl bg-bitGreen-50 cursor-pointer">
          <img src={image} className="w-full rounded-xl" />
          <h1 className="ml-1 capitalize text-green-500 text-sm font-semibold mt-3">
            {title}
          </h1>
          <p className="truncate ml-1 mb-3 text-black-900 font-semibold leading-5 mt-1 text-sm">
            {description}
          </p>
        </div>
        </Link>
    </div>
  );
};

export default Card;
