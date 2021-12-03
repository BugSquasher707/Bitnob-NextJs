import { bitnobAppleStore, bitnobPlayStore } from "app-constants";
import { BitNobContainer, BitNobLink, getLayout, Page } from "components";
import { AppStore, PlayStore } from "public";
import styles from "styles/ProductPage.module.css";
import { isBrowser, screenSize } from "utils";

const TermsOfService = () => (
  <Page title={"Terms of Services"}>
    <div>
      <BitNobContainer className={`mt-14 flex flex-col`}>
        <h1 className="text-bitGray-400 leading-tight text-2xl sm:text-5xl font-gordita font-bold sm:self-center">
          Terms of Service
        </h1>
      </BitNobContainer>

      <BitNobContainer className={`mt-12`}>
        <p className="text-md sm:text-3xl font-gordita font-bold">Terms</p>

        <p className="mt-2 sm:mt-4 text-sm sm:text-xl">
          By accessing the website at{" "}
          <a href="/" className="text-bitGreen-link">
            https://bitnob.com
          </a>
          , you are agreeing to be bound by these terms of service, all
          applicable laws and regulations, and agree that you are responsible
          for compliance with any applicable local laws. If you do not agree
          with any of these terms, you are prohibited from using or accessing
          this site. The materials contained in this website are protected by
          applicable copyright and trademark law.
        </p>
      </BitNobContainer>

      <BitNobContainer className={`mt-12`}>
        <p className="text-md sm:text-3xl font-gordita font-bold">
          Use of License
        </p>

        <ol className="list-decimal ml-4 mt-2 sm:mt-4">
          <li className="text-sm sm:text-xl">
            Permission is granted to temporarily download one copy of the
            materials (information or software) on Bitnob Technologies’ website
            for personal, non-commercial transitory viewing only. This is the
            grant of a license, not a transfer of title, and under this license,
            you may not:
          </li>
          <li className=" text-sm sm:text-xl">Modify or copy the materials;</li>
          <li className=" text-sm sm:text-xl">
            Use the materials for any commercial purpose, or for any public
            display (commercial or non-commercial);
          </li>
          <li className=" text-sm sm:text-xl">
            Attempt to decompile or reverse engineer any software contained on
            Bitnob Technologies’ website;
          </li>
          <li className=" text-sm sm:text-xl">
            Remove any copyright or other proprietary notations from the
            materials; or
          </li>
          <li className=" text-sm sm:text-xl">
            Transfer the materials to another person or “mirror” the materials
            on any other server.
          </li>
          <li className=" text-sm sm:text-xl">
            This license shall automatically terminate if you violate any of
            these restrictions and may be terminated by Bitnob Technologies at
            any time. Upon terminating your viewing of these materials or upon
            the termination of this license, you must destroy any downloaded
            materials in your possession whether in electronic or printed
            format.
          </li>
        </ol>
      </BitNobContainer>

      <BitNobContainer className={`mt-12`}>
        <p className="text-md sm:text-3xl font-gordita font-bold">Disclaimer</p>

        <ol className="list-decimal ml-4 mt-2 sm:mt-4">
          <li className="text-sm sm:text-xl">
            The materials on Bitnob Technologies’ website are provided on an 'as
            is' basis. Bitnob Technologies makes no warranties, expressed or
            implied, and hereby disclaims and negates all other warranties
            including, without limitation, implied warranties or conditions of
            merchantability, fitness for a particular purpose, or
            non-infringement of intellectual property or other violation of
            rights.
          </li>
          <li className="text-sm sm:text-xl">
            Further, Bitnob Technologies does not warrant or make any
            representations concerning the accuracy, likely results, or
            reliability of the use of the materials on its website or otherwise
            relating to such materials or on any sites linked to this site.
          </li>
        </ol>
      </BitNobContainer>

      <BitNobContainer className={`mt-12`}>
        <p className="text-md sm:text-3xl font-gordita font-bold">
          Limitations
        </p>

        <p className="mt-2 sm:mt-4 text-sm sm:text-xl">
          In no event shall Bitnob Technologies or its suppliers be liable for
          any damages (including, without limitation, damages for loss of data
          or profit, or due to business interruption) arising out of the use or
          inability to use the materials on Bitnob Technologies’ website, even
          if Bitnob Technologies or a Bitnob Technologies authorized
          representative has been notified orally or in writing of the
          possibility of such damage. Because some jurisdictions do not allow
          limitations on implied warranties, or limitations of liability for
          consequential or incidental damages, these limitations may not apply
          to you.
        </p>
      </BitNobContainer>

      <BitNobContainer className={`mt-12`}>
        <p className="text-md sm:text-3xl font-gordita font-bold">
          Accuracy of Materials
        </p>

        <p className="mt-2 sm:mt-4 text-sm sm:text-xl">
          The materials appearing on Bitnob Technologies’ website could include
          technical, typographical, or photographic errors. Bitnob Technologies
          does not warrant that any of the materials on its website are
          accurate, complete or current. Bitnob Technologies may make changes to
          the materials contained on its website at any time without notice.
          However, Bitnob Technologies does not make any commitment to update
          the materials.
        </p>
      </BitNobContainer>

      <BitNobContainer className={`mt-12`}>
        <p className="text-md sm:text-3xl font-gordita font-bold">Links</p>

        <p className="mt-2 sm:mt-4 text-sm sm:text-xl">
          Bitnob Technologies has not reviewed all of the sites linked to its
          website and is not responsible for the contents of any such linked
          site. The inclusion of any link does not imply endorsement by Bitnob
          Technologies of the site. Use of any such linked website is at the
          user’s own risk.
        </p>
      </BitNobContainer>

      <BitNobContainer className={`mt-12`}>
        <p className="text-md sm:text-3xl font-gordita font-bold">
          Modifications
        </p>

        <p className="mt-2 sm:mt-4 text-sm sm:text-xl">
          Bitnob Technologies may revise these terms of service for its website
          at any time without notice. By using this website you are agreeing to
          be bound by the then current version of these terms of service.
        </p>
      </BitNobContainer>

      <BitNobContainer className={`mt-12`}>
        <p className="text-md sm:text-3xl font-gordita font-bold">
          Governing Law
        </p>

        <p className="mt-2 sm:mt-4 text-sm sm:text-xl">
          These terms and conditions are governed by and construed in accordance
          with the laws of Nigeria and you irrevocably submit to the exclusive
          jurisdiction of the courts in that State or location.
        </p>
      </BitNobContainer>

      <BitNobContainer>
        <div
          className={`mt-12 sm:mt-36 flex lg:block flex-col items-center overflow-hidden lg:overflow-visible pt-20 px-6 lg:p-16 lg:py-12 relative rounded-2xl bg-left bg-cover ${styles.product_foot}`}
        >
          <div className=" max-w-sm mx-auto lg:mx-0 lg:max-w-xs text-center lg:text-left">
            <h1 className="text-black pb-2 leading-tight text-2xl sm:text-3xl md:text-5xl lg:text-4xl font-gordita font-bold">
              Freedom For <br className="md:hidden" /> Your Money
            </h1>
            <div className="flex space-x-4 justify-center items-center mt-6 md:mt-12">
              <BitNobLink to={bitnobAppleStore}>
                <AppStore className="w-32 md:w-auto" />
              </BitNobLink>
              <BitNobLink to={bitnobPlayStore}>
                <PlayStore className="w-32 md:w-auto" />
              </BitNobLink>
            </div>
          </div>
          <img
            style={{ top: isBrowser()?.innerWidth >= screenSize.lg && "-67px" }}
            src="/images/half-phone.png"
            alt="app"
            className="lg:absolute bottom-0 max-w-sm md:max-w-lg lg:max-w-md right-0 mt-12 md:mt-20 lg:mt-0"
          />
        </div>
      </BitNobContainer>
    </div>
  </Page>
);

TermsOfService.getLayout = getLayout;
export default TermsOfService;
