import { useState } from "react";
import { BitNobContainer, BitNobLink, getLayout, Page, PreFooter } from "components";
import { AppStore, PlayStore } from "public";
import { bitnobPlayStore, bitnobAppleStore } from "app-constants";
import blogPageData from "static/blog-static";
import Card from "components/UI/Card/Card";
import SearchBox from "components/UI/SearchBox/SearchBox";
import { useRouter } from "next/router";

const BLOG_URL = "https://blog.bitnob.com";
const CONTENT_KEY = "c0027dbf06dc327cb24ce5e23b";

export async function getStaticPaths() {
  const res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_KEY}&include=tags,authors`
  ).then((res) => res.json());

  const paths = res.posts.map((post) => ({
    params: { tag: post.primary_tag.slug.toString() },
  }));

  return { paths, fallback: false };
}

export const getStaticProps = async ({ params }) => {
  const res1 = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/tags/slug/${params.tag}/?key=${CONTENT_KEY}`
  );
  const tag = await res1.json();

  const res2 = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_KEY}&include=tags,authors`
  );
  const allPost = await res2.json();

  return { props: { tagPosts: tag.tags, allPost: allPost.posts } };
};

const TagPost = ({ tagPosts, allPost }) => {
  const router = useRouter();

  const { tag } = router.query;

  const [activeBtn, setActiveBtn] = useState(true);
  let [postCount, setPostCount] = useState(6);

  const handleReadMoreBtn = () => {
    setActiveBtn(false);

    setTimeout(() => {
      setActiveBtn(true);
      setPostCount((postCount += 6));
    }, 1200);
  };

  let arr = allPost.filter(item => {
    return item.primary_tag.name == tagPosts[0].name
  })

  return (
    <>
      <Page title={`Category: ${tag} - Bitnob Blog`}>
        <div className="bg-gradient-to-b from-white via-bitGreen-50 z-0 overflow-x-hidden relative pt-0 pb-0">
          <div className="pt-0 pb-20">
            <BitNobContainer>
              <SearchBox />
              <div className="mt-10 bg-bitGreen-50 w-full rounded-2xl mt-5 p-10 pl-0 pr-0 text-center md:flex sm:block justify-center items-center">
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

              <div className="w-full my-10">
                <h1 className="text-center capitalize md:text-2xl text-xl font-bold">
                  {tagPosts[0].name}
                </h1>
              </div>

              <div className="w-full mt-5 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                {arr.slice(0, postCount).map((item) => {
                  return (
                    <>
                      {
                        <Card
                          key={item.id}
                          slug={item.slug}
                          image={
                            item.feature_image
                              ? item.feature_image
                              : "../../images/blog-default.jpeg"
                          }
                          title={item.primary_tag.name}
                          description={item.excerpt}
                          tag={item.primary_tag.slug}
                        />
                      }
                    </>
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
    </>
  );
};

TagPost.getLayout = getLayout;

export default TagPost;
