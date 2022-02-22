import {
  BitNobContainer,
  getLayout,
  Page,
  PreFooter,
} from "components";
import { useRouter } from "next/router";
import blogPageData from "static/blog-static";
import Card from "components/UI/Card/Card";
import SearchBox from "components/UI/SearchBox/SearchBox";
import FeaturedPost from "components/shared/FeaturedPost/FeaturedPost";

const BLOG_URL = "https://blog.bitnob.com";
const CONTENT_KEY = "c0027dbf06dc327cb24ce5e23b";

export async function getStaticPaths() {
  const res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_KEY}`
  ).then((res) => res.json());

  const paths = res.posts.map((post) => ({
    params: { postDate: post.published_at.slice(0, 10).toString() },
  }));

  return { paths, fallback: false };
}

export const getStaticProps = async ({}) => {
  const res1 = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_KEY}&include=tags,authors`
  );
  const post = await res1.json();

  return { props: { post: post.posts } };
};

const PostDate = ({ post }) => {
  const router = useRouter();

  const paramDate = router.query.postDate;
  
  const postDate = post.filter(item => {
    return item.published_at.slice(0,10) === paramDate
  })

  const unfomatedDate = postDate[0].published_at.slice(0, 10)

  let formatedDate = new Date(unfomatedDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <Page title="Bitnob Blog Post Date">
        <div className="bg-gradient-to-b from-white via-bitGreen-50 z-0 overflow-x-hidden relative pt-0 pb-0">
          <div className="pt-0 pb-0 lg:px-28">
            <BitNobContainer>
              <SearchBox/>
              <FeaturedPost/>
              <div className="w-full mt-10">
                <h1 className="text-center md:text-2xl text-xl font-bold">
                    {formatedDate}
                </h1>
              </div>
              <div className="w-full mt-10 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                {postDate.map((obj) => {
                  return (
                    <>
                      {
                        <Card
                          key={obj.id}
                          slug={obj.slug}
                          image={
                            obj.feature_image
                              ? obj.feature_image
                              : "../../images/blog-default.jpeg"
                          }
                          title={obj.primary_tag.name}
                          description={obj.excerpt}
                          tag={obj.primary_tag.slug}
                        />
                      }
                    </>
                  );
                })}
              </div>
            </BitNobContainer>
          </div>
        </div>
        <PreFooter />
      </Page>
    </>
  );
};

PostDate.getLayout = getLayout;

export default PostDate;
