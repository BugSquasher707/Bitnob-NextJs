import {
  BitNobButton,
  BitNobContainer,
  BitNobLink,
  getLayout,
  Page,
  PreFooter,
} from "components";
import { bitnobPlayStore, bitnobAppleStore } from "app-constants";
import { AppStore, PlayStore } from "public";
import { BiUserCircle } from "react-icons/bi";
import { AiFillCalendar } from "react-icons/ai";
import { FaTags, FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";
import blogPageData from "static/blog-static";
import Card from "components/UI/Card/Card";

const BLOG_URL = "https://blog.bitnob.com";
const CONTENT_KEY = "c0027dbf06dc327cb24ce5e23b";

export async function getStaticPaths() {
  const res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_KEY}&include=tags,authors`
  ).then((res) => res.json());

  const paths = res.posts.map((post) => ({
    params: { authorSlug: post.primary_author.slug.toString() },
  }));

  return { paths, fallback: false };
}

export const getStaticProps = async ({ params }) => {
  const res1 = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/authors/slug/${params.authorSlug}/?key=${CONTENT_KEY}`
  );
  const author = await res1.json();

  const res2 = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_KEY}&include=tags,authors`
  );
  const allPost = await res2.json();

  return { props: { author: author.authors, allPost: allPost.posts } };
};

const authorSlug = ({ author, allPost }) => {
  return (
    <Page title="Bitnob Blog Author">
      <div className="bg-gradient-to-b from-white via-bitGreen-50 z-0 overflow-x-hidden relative pt-5 pb-0">
        <div className=" pt-6 pb-20">
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

            <div className="w-full mt-10">
              <h1 className="text-center text-3xl font-bold">
                {author[0].name}
              </h1>
            </div>

            <div className="w-full mt-5 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
              {allPost.map((item) => {
                return (
                  <>
                    {item.primary_author.name === author[0].name && 
                    <Card
                      key={item.id}
                      slug={item.slug}
                      image={
                        item.feature_image
                          ? item.feature_image
                          : "../images/blog-default.jpeg"
                      }
                      title={item.title}
                      description={item.excerpt}
                    />}
                  </>
                );
              })}
            </div>

            <div className="mt-5 flex justify-center items-center">
              <button
                type="button"
                className="p-3 cursor-pointer pl-10 pr-10 rounded-lg border-2 text-sm font-bold text-bitGreen-500 lg:mt-0 mt-5"
              >
                {blogPageData.section3.btnText}
              </button>
            </div>
          </BitNobContainer>
        </div>
      </div>
      <PreFooter />
    </Page>
  );
};

authorSlug.getLayout = getLayout;

export default authorSlug;
