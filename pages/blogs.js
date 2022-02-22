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
import { useRouter } from 'next/router'

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

  return {
    props: {
      postsData,
    },
  };
};

const Blogs = ({ postsData }) => {

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
        <div className="pt-0 pb-20">
          <BitNobContainer>
            <SearchBox />
            <div className=" bg-bitGreen-50 w-full rounded-2xl mt-0 p-10 pl-0 pr-0 text-center md:flex sm:block justify-center items-center">
              <h1 className="text-lg font-bold md:mr-20 md:mb-0 mr-0 mb-7">
                {blogPageData.section1.heading}
              </h1>
              <button
                type="button"
                className="p-3 pl-7 pr-7 rounded-xl text-sm font-bold bg-bitGreen-200"
              >
                {blogPageData.section1.btnText}
              </button>
            </div>

            <div className="w-full lg:p-20 p-5 md:pl-0 md:pr-0 md:block mt-5 mb-5 lg:flex justify-between items-start">
              <div className="lg:w-2/3 md:w-full lg:pl-8 lg:pr-8 flex justify-center items-start flex-col">
                <div className="p-3 rounded-xl lg:pb-8 md:pb-6 bg-bitGreen-50 cursor-pointer">
                  {/* {postsData.map((item, i) => {
                    return (
                      <React.Fragment key={i}>
                        {item.featured === "true" ? (
                          <React.Fragment>
                            <div
                              className="p-3 rounded-xl lg:pb-8 md:pb-6 bg-bitGreen-50 cursor-pointer"
                              onClick={router.push(
                                `/blog/${item.primary_tag.slug}/${item.slug}`
                              )}
                            >
                              <img
                                src={
                                  item.feature_image != null
                                    ? feature_image
                                    : "../images/blog-default.jpeg"
                                }
                                className="w-6/6 object-cover rounded-xl mb-3"
                                alt=""
                              />
                              <h1 className="text-green-500 text-sm font-semibold">
                                {item.primary_tag.name}
                              </h1>
                              <p className="text-black-900 font-semibold text-xs mt-1">
                                {item.excerpt}
                              </p>
                            </div>
                          </React.Fragment>
                        ) : (
                          ""
                        )}
                      </React.Fragment>
                    );
                  })} */}
                  <img
                    src={blogPageData.section2.mainImage}
                    className="w-6/6 object-cover rounded-xl mb-3"
                    alt=""
                  />
                  <h1 className="text-green-500 text-sm font-semibold">
                    {blogPageData.section2.imageHeading}
                  </h1>
                  <p className="text-black-900 font-semibold text-xs mt-1">
                    {blogPageData.section2.imageDesc}
                  </p>
                </div>
              </div>

              <div className="lg:w-1/3 md:w-full lg:mt-0 mt-8">
                <div className="w-full mb-4">
                  <h1 className="text-xl font-bold">
                    {blogPageData.section2.sideHeading}
                  </h1>
                </div>

                {blogPageData.section2.sideCollection.map((item, i) => {
                  return (
                    <div className="w-full mb-5" key={i}>
                      <span className="text-green-500 text-xs font-semibold cursor-pointer">
                        {item.sideSubHeading}
                      </span>
                      <p className="xl:w-4/6 lg:w-full text-black-900 font-semibold text-xs cursor-pointer">
                        {item.sideSubDesc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="w-full lg:p-10 lg:pl-20 lg:pr-20 pt-5 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
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
                  className="p-3 cursor-pointer pl-10 pr-10 rounded-lg border-2 text-sm font-bold text-bitGreen-500 lg:mt-0 mt-5"
                  onClick={handleReadMoreBtn}
                >
                  {blogPageData.section3.btnText}
                </button>
              )}

              {!activeBtn && (
                <button
                  type="button"
                  className="p-3 cursor-pointer pl-10 pr-10 rounded-lg border-2 text-sm font-bold text-bitGreen-500 lg:mt-0 mt-5"
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

Blogs.getLayout = getLayout;

export default Blogs;
