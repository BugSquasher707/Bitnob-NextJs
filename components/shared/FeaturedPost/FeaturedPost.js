import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import style from '../Header/Header.module.css'

const BLOG_URL = "https://blog.bitnob.com";
const CONTENT_KEY = "c0027dbf06dc327cb24ce5e23b";

const FeaturedPost = () => {
  const router = useRouter();

  const [featuredData, setFeaturedData] = useState('') 

  useEffect(async () => {

    const res3 = await fetch(
        `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_KEY}&include=tags,authors&filter=featured:true`
      ).then((res) => res.json());
    
      setFeaturedData(res3.posts)
  }, [])

  return (
    <React.Fragment>
      {featuredData.length > 0 && featuredData.slice(0, 1).map((item, i) => {
        return (
          <React.Fragment key={i}>
            <h1 className="text-center md:text-2xl text-xl font-bold mb-5">
              Featured Post
            </h1>
            <div className={`${style.animateCards} bg-bitGreen-50 w-full rounded-2xl mt-5 p-5 px-30 text-center lg:flex block justify-between items-start`}>
              <div className="featuredImage1">
                <img
                  src={
                    item.feature_image != null
                      ? item.feature_image
                      : "../../images/blog-default.jpeg"
                  }
                  alt=""
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="featuredImage2 lg:px-7 px-0 lg:mt-0 mt-5 text-left">
                <h1 className="text-xl font-bold">
                    {item.primary_tag.name}
                </h1>
                <p className="mt-2">
                {item.excerpt}
                </p>

                <button
                  type="button"
                  className="p-3 cursor-pointer px-8 rounded-lg border-2 border-bitGreen-500 hover:bg-bitGreen-500 hover:text-white transition-all ease-in-out text-sm font-bold text-bitGreen-500 mt-6"
                  onClick={() =>
                    router.push(`/blog/${item.primary_tag.slug}/${item.slug}`)
                  }
                >
                  Read More
                </button>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
};

export default FeaturedPost;
