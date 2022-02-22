import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import style from "../Header/Header.module.css";

const BLOG_URL = "https://blog.bitnob.com";
const CONTENT_KEY = "c0027dbf06dc327cb24ce5e23b";

const FeaturedPost = () => {
  const router = useRouter();

  const [featuredData, setFeaturedData] = useState("");

  useEffect(async () => {
    const res3 = await fetch(
      `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_KEY}&include=tags,authors&filter=featured:true`
    ).then((res) => res.json());

    setFeaturedData(res3.posts);
  }, []);

  return (
    <React.Fragment>
      {featuredData.length > 0 &&
        featuredData.slice(0, 1).map((item, i) => {
          return (
            <React.Fragment key={i}>
              <div
                className={`${style.animateCards} bg-bitGreen-50 w-full rounded-2xl mt-5 p-5 px-30 text-center`}
              >
                <h1 className="text-center md:text-xl text-lg font-bold mb-3">
                  Featured Post
                </h1>
                <div className="text-center block">
                  <h1 className="truncate text-md font-bold md:mr-10 md:mb-0 mr-0 mb-7">
                    {item.title}.
                  </h1>
                  <button
                    type="button"
                    className="p-3 cursor-pointer mt-5 pl-7 pr-7 rounded-xl text-sm font-bold bg-bitGreen-200"
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
