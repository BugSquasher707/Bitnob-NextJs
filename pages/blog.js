import { useState } from "react";

import {
  BitNobButton,
  BitNobContainer,
  BitNobLink,
  getLayout,
  Page,
  PreFooter,
} from "components";
import Card from "components/UI/Card/Card";
import blogPageData from "static/blog-static";
import SearchBox from "components/UI/SearchBox/SearchBox";
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import FeaturedPost from "components/shared/FeaturedPost/FeaturedPost";

const BLOG_URL = "https://blog.bitnob.com";
const CONTENT_KEY = "c0027dbf06dc327cb24ce5e23b";

async function getPosts() {
  const res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_KEY}&include=tags,authors`
  ).then((res) => res.json());

  const posts = res.posts;

  return posts;
}

export const getStaticProps = async () => {
  const postsData = await getPosts();

  const res1 = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_KEY}&include=tags,authors&filter=featured:true`
  ).then((res) => res.json());

  const featured_post = res1.posts;

  return {
    props: {
      postsData,
      featured_post,
    },
  };
};

const Blog = ({ postsData, featured_post }) => {
  const router = useRouter();

  const [activeBtn, setActiveBtn] = useState(true);
  let [postCount, setPostCount] = useState(6);

  const handleReadMoreBtn = () => {
    setActiveBtn(false);

    setTimeout(() => {
      setActiveBtn(true);
      setPostCount((postCount += 6));
    }, 1200);
  };

  return (
    <Page title="Welcome to Bitnob Blogs">
      <div className="bg-gradient-to-b from-white via-bitGreen-50 z-0 overflow-x-hidden relative pt-0 pb-0">
        <div className="pt-0 pb-5">
          <BitNobContainer>
            <SearchBox />
            <FeaturedPost />

            <div className="w-full lg:py-20 p-5 px-0 md:block mt-5 mb-5 lg:flex justify-between items-start">
              <div className="lg:w-2/3 md:w-full lg:pr-8 flex justify-center items-start flex-col">
                {featured_post.slice(0, 1).map((item, i) => {
                  return (
                    <React.Fragment key={i}>
                      <Link
                        href={"/blog/[category]/[postSlug]"}
                        as={`/blog/${item.primary_tag.slug}/${item.slug}`}
                        passHref
                      >
                        <div
                          className="p-3 featuredPost rounded-xl lg:pb-8 md:pb-6 bg-bitGreen-50 cursor-pointer"
                        >
                          <img
                            src={
                              item.feature_image != null
                                ? item.feature_image
                                : "../images/blog-default.jpeg"
                            }
                            className={`featuredImage object-cover rounded-xl mb-3`}
                            alt=""
                          />
                          <h1 className="text-green-500 text-sm font-semibold">
                            {item.primary_tag.name}
                          </h1>
                          <div>
                            <p className="truncate text-black-900 font-semibold text-xs mt-1">
                              {item.excerpt}
                            </p>

                          </div>
                        </div>
                      </Link>
                    </React.Fragment>
                  );
                })}
              </div>

              <div className="lg:w-1/3 md:w-full lg:mt-0 mt-8">
                <div className="w-full mb-3">
                  <h1 className="text-xl font-bold">
                    Most Popular
                  </h1>
                </div>

                {postsData.slice(0, 5).map((item, i) => {
                  return (
                    <div className="w-full mb-5 cursor-pointer" key={i} onClick={() => router.push(`/blog/${item.primary_tag.slug}/${item.slug}`)}>
                      <span className="text-green-500 capitalize text-xs font-semibold cursor-pointer">
                        {item.primary_tag.name}
                      </span>
                      <p className="xl:w-4/6 lg:w-full text-black-900 font-semibold text-xs cursor-pointer">
                        {item.title}.
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="w-full lg:p-0 lg:px-0 pt-5 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
              {postsData.slice(0, postCount).map((item) => {
                return (
                  <Card
                    key={item.id}
                    slug={item.slug}
                    image={
                      item.feature_image
                        ? item.feature_image
                        : "../images/blog-default.jpeg"
                    }
                    title={item.primary_tag.name}
                    description={item.excerpt}
                    tag={item.primary_tag.slug}
                  />
                );
              })}
            </div>

            <div className="flex justify-center items-center">
              {activeBtn && (
                <button
                  type="button"
                  className="p-3 border-bitGreen-500 hover:bg-bitGreen-500 hover:text-white transition-all ease-in-out cursor-pointer pl-10 pr-10 rounded-lg border-2 text-sm font-bold text-bitGreen-500 lg:mt-0 mt-5"
                  onClick={handleReadMoreBtn}
                >
                  {blogPageData.section3.btnText}
                </button>
              )}

              {!activeBtn && (
                <button
                  type="button"
                  className="p-3 border-bitGreen-500 hover:bg-bitGreen-500 hover:text-white transition-all ease-in-out cursor-pointer pl-10 pr-10 rounded-lg border-2 text-sm font-bold text-bitGreen-500 lg:mt-0 mt-5"
                >
                  {blogPageData.section3.btnLoadingText}
                </button>
              )}
            </div>
          </BitNobContainer>
        </div>
      </div>
      <PreFooter />
    </Page>
  );
};

Blog.getLayout = getLayout;

export default Blog;
