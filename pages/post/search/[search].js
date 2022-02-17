import { useEffect, useState } from "react";
import {
  BitNobButton,
  BitNobContainer,
  BitNobLink,
  getLayout,
  Page,
  PreFooter,
} from "components";
import Link from "next/link";
import { useRouter } from "next/router";
import { bitnobPlayStore, bitnobAppleStore } from "app-constants";
import { AppStore, PlayStore } from "public";
import { BiUserCircle } from "react-icons/bi";
import { AiFillCalendar } from "react-icons/ai";
import { FaTags, FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";
import blogPageData from "static/blog-static";
import Card from "components/UI/Card/Card";
import { featureData } from "static";

const BLOG_URL = "https://blog.bitnob.com";
const CONTENT_KEY = "c0027dbf06dc327cb24ce5e23b";

export async function getStaticPaths() {
  const res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_KEY}&include=tags,authors&limit=all`
  ).then((res) => res.json());

  const paths = res.posts.map((post) => ({
    params: { search: post.primary_tag.slug },
  }));
  return { paths, fallback: true };
}

export const getStaticProps = async ({ params }) => {
  const res1 = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_KEY}&include=tags,authors&limit=all&filter=tag:${params.search}`
  );
  const post = await res1.json();

  return { props: { searchResult: post.posts } };
};

const search = ({ searchResult }) => {
  const [fetchedData, setFetchedData] = useState([]);

  console.log(searchResult, 'search');

  useEffect(() => {
    setFetchedData(searchResult)
  }, [])

  const router = useRouter();

  let { search } = router.query;

  return (
    <>
      <Page title={`Search Results for ${search == null ? "" : search}`}>
        <div className="bg-gradient-to-b from-white via-bitGreen-50 z-0 overflow-x-hidden relative pt-5 pb-0">
          <div className="pt-6 pb-20">
            <BitNobContainer>
              <div className="bg-bitGreen-50 w-full rounded-2xl mt-5 p-10 pl-0 pr-0 text-center md:flex sm:block justify-center items-center">
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
                <h1 className="text-center md:text-2xl text-xl font-bold">
                  Search Results for: {search}
                </h1>
              </div>

              {/* Search Results */}

              <div className="w-full mt-5 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                {fetchedData != null &&
                  fetchedData.map((item, i) => {
                    return (
                      <>
                        {item.primary_tag.name.includes(search) && (
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
                        )}
                      </>
                    );
                  })}
              </div>
              {fetchedData == null && <p className="w-full mb-10">
                It seems we can't find what you're looking for.
              </p>}

              <div className="w-full mx-auto p-5 pl-0 pr-0">
                <div className="w-full py-20 bg-bitGreen-400 rounded-2xl">
                  <img
                    src="../../images/logo-full.png"
                    className="md:w-32 w-28 mx-auto"
                    alt=""
                  />
                  <h1 className="md:text-2xl text-xl font-bold text-center mt-8">
                    The Better Way To Save & Invest
                  </h1>
                  <div className="mt-8 flex justify-center items-center">
                    <BitNobLink to={bitnobAppleStore}>
                      <AppStore className="w-32 md:w-auto" />
                    </BitNobLink>
                    <BitNobLink to={bitnobPlayStore}>
                      <PlayStore className="w-32 ml-5 md:w-auto" />
                    </BitNobLink>
                  </div>
                </div>
              </div>
            </BitNobContainer>
          </div>
        </div>
        <PreFooter />
      </Page>
    </>
  );
};

search.getLayout = getLayout;

export default search;
