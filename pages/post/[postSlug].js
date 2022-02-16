import {
  BitNobButton,
  BitNobContainer,
  BitNobLink,
  getLayout,
  Page,
  PreFooter,
} from "components";
import { useRouter } from 'next/router'
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
    params: { postSlug: post.slug.toString() },
  }));

  return { paths, fallback: false };
}

export const getStaticProps = async ({ params }) => {
  const res1 = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/slug/${params.postSlug}/?key=${CONTENT_KEY}&include=tags,authors`
  );
  const post = await res1.json();

  const res2 = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_KEY}`
  );
  const allPost = await res2.json();

  return { props: { post: post.posts, allPost: allPost.posts } };
};

const PostSlug = ({ post, allPost }) => {

  const router = useRouter()

  return (
    <>
      {post.map((obj) => {
        return (
          <>
            <Page title="Bitnob Blog Post" key={obj.id}>
              <div className="bg-gradient-to-b from-white via-bitGreen-50 z-0 overflow-x-hidden relative pt-5 pb-0">
                <div className="pt-6 pb-20 lg:pl-28 lg:pr-28">
                  <BitNobContainer>
                    <div className="bg-bitGreen-50 w-full rounded-2xl mt-5 p-10 pl-0 pr-0 text-center md:flex sm:block justify-center items-center">
                      <h1 className="text-lg font-bold md:mr-20 md:mb-0 mr-0 mb-7">
                        {blogPageData.seation1.heading}
                      </h1>
                      <button
                        type="button"
                        className="p-3 pl-7 pr-7 rounded-xl text-sm font-bold bg-bitGreen-200"
                      >
                        {blogPageData.seation1.btnText}
                      </button>
                    </div>
                    <div className="mt-20">
                      <div className="w-full">
                        <h1 className="text-black-900 font-bold text-2xl text-center">
                          {obj.title}
                        </h1>
                        <img
                          src={
                            obj.feature_image
                              ? obj.feature_image
                              : "../images/blog-default.jpeg"
                          }
                          className="lg:w-4/6 w-full mb-5 mx-auto mt-8 rounded-xl"
                          alt=""
                        />
                        <div className="lg:w-4/6 w-full mx-auto block lg:flex justify-start items-center">
                          <div className="lg:w-5/6 md:flex block justfy-start items-center">
                              <div className="w-full p-3 pr-0 md:mr-2 pl-0 flex justify-start items-center cursor-pointer" onClick={() => router.push(`/author/${obj.primary_author.slug}`)}>
                                <BiUserCircle className="text-sm text-bitGreen-500" />
                                <span className="w-4/6 text-xs ml-5 text-bitGreen-500 font-medium">
                                  By {obj.primary_author.name}
                                </span>
                              </div>
                            <div className="w-full p-3 md:pl-3 md:pr-3 pl-0 pr-0 md:mr-2 flex justify-start items-center cursor-pointer">
                              <AiFillCalendar className="text-sm text-bitGreen-500" />
                              <span className="w-full text-xs ml-5 text-bitGreen-500 font-medium">
                                {obj.published_at.slice(0, 10)}
                              </span>
                            </div>
                            <div className="w-full p-3 md:pl-3 md:pr-3 pl-0 pr-0 md:mr-2 flex justify-start items-center cursor-pointer">
                              <FaTags className="text-sm text-bitGreen-500" />
                              <span className="w-full text-xs ml-5 text-bitGreen-500 font-medium">
                                {obj.primary_tag.name}
                              </span>
                            </div>
                          </div>
                          <div className="lg:w-2/6 lg:mt-0 lg:mb-0 mt-5 mb-5 flex lg:justify-end justify-start item-center">
                            <div className="p-3 bg-bitGreen-50 rounded-full cursor-pointer">
                              <FaFacebook className="text-bitGreen-500" />
                            </div>
                            <div className="p-3 bg-bitGreen-50 ml-3 rounded-full cursor-pointer">
                              <FaTwitter className="text-bitGreen-500" />
                            </div>
                            <div className="p-3 bg-bitGreen-50 ml-3 rounded-full cursor-pointer">
                              <FaWhatsapp className="text-bitGreen-500" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-full mt-5">
                        <p className="mb-5 font-medium">{obj.excerpt}</p>
                      </div>
                    </div>
                    <div className="w-full mx-auto p-5 pl-0 pr-0">
                      <div className="w-full py-20 bg-bitGreen-400 rounded-2xl">
                        <img
                          src="../images/logo-full.png"
                          className="w-32 mx-auto"
                          alt=""
                        />
                        <h1 className="text-2xl font-bold text-center mt-8">
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

                    <div className="w-full mt-10 mb-10">
                      <div className="w-full flex justify-start item-center">
                        <div className="p-3 bg-bitGreen-50 rounded-full cursor-pointer">
                          <FaFacebook className="text-lg text-bitGreen-500" />
                        </div>
                        <div className="p-3 bg-bitGreen-50 ml-3 rounded-full cursor-pointer">
                          <FaTwitter className="text-lg text-bitGreen-500" />
                        </div>
                        <div className="p-3 bg-bitGreen-50 ml-3 rounded-full cursor-pointer">
                          <FaWhatsapp className="text-lg text-bitGreen-500" />
                        </div>
                      </div>
                    </div>
                    <div className="w-full mt-10">
                      <h1 className="text-center text-3xl font-bold">
                        You'll Like This
                      </h1>
                      <div className="w-full mt-10 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                        {allPost.slice(0, 3).map((item) => {
                          return (
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
                            />
                          );
                        })}
                      </div>
                    </div>
                  </BitNobContainer>
                </div>
              </div>
              <PreFooter />
            </Page>
          </>
        );
      })}
    </>
  );
};

PostSlug.getLayout = getLayout;

export default PostSlug;
