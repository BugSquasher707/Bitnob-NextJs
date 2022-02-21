import {
  BitNobButton,
  BitNobContainer,
  BitNobLink,
  getLayout,
  Page,
} from "components";
import { careersPageData } from "static";
import { Fragment } from "react";
import { FaChevronRight } from "react-icons/fa";

const Careers = () => {
  const { section1, jobs } = careersPageData;

  return (
    <Page title="Bitnob for Business">
      <div className="bg-gradient-to-b from-white via-bitGreen-50 z-0 overflow-x-hidden relative pt-60 -mt-60">
        <div className=" pt-6 pb-20">
          <BitNobContainer>
            <div className="mt-10 xl:mt-20 text-center mx-auto">
              <div className="max-w-lg mx-auto">
                <h2 className="font-bold text-2xl md:text-3xl xl:text-4xl font-gordita">
                  {section1.heading}
                </h2>
                <p className=" text-xs md:text-sm my-6 font-quicksand text-bitGray-200">
                  {section1.description}
                </p>
                {/* eslint-disable-next-line */}
                <img src="/svgs/empty-careers.svg" alt="" />
              </div>
            </div>
            {/* <div className="grid gap-4 max-w-4xl space-y-8 md:space-y-5 overflow-hidden 2xl:max-w-6xl mx-auto mt-12">
              {jobs.map(({ title, description, link, tags }) => (
                <div
                  key={title}
                  style={{ borderRadius: "30px" }}
                  className="bg-white relative text-left px-6 py-8 md:py-6"
                >
                  <div className="lg:pr-40">
                    <h4 className="font-bold font-gordita md:text-lg">
                      {title}
                    </h4>
                    <p className=" mt-2 mb-6 text-xs md:text-sm text-bitGray-300">
                      {description}
                    </p>
                  </div>
                  <div className="hidden md:flex flex-col md:flex-row justify-between md:space-x-6 items-center xl:pr-8">
                    <div className="flex space-x-0.5 items-center">
                      {tags.map((a, i) => (
                        <Fragment key={a}>
                          <h4 className="font-bold font-gordita text-xs">
                            {a}
                          </h4>
                          {tags.length - 1 !== i && <span>&#8226;</span>}
                        </Fragment>
                      ))}
                    </div>
                    <BitNobButton asLink={link} className="md:w-min">
                      Apply
                    </BitNobButton>
                  </div>
                  <BitNobLink to={link}>
                    <div className="w-20 absolute bottom-5 right-8 text-bitGreen-200 text-lg flex md:hidden justify-end">
                      <FaChevronRight />
                    </div>
                  </BitNobLink>
                </div>
              ))}
            </div> */}
          </BitNobContainer>
        </div>
      </div>
    </Page>
  );
};

Careers.getLayout = getLayout;
export default Careers;
