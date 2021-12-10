import { BitNobContainer, getLayout, Page, PreFooter } from "components";

const PrivacyPolicy = () => (
  <Page title={"Privacy Policy"}>
    <div>
      <BitNobContainer className={`mt-14 flex flex-col`}>
        <h1 className="text-bitGray-400 leading-tight text-2xl sm:text-5xl font-gordita font-bold sm:self-center">
          Privacy Policy
        </h1>
      </BitNobContainer>

      <BitNobContainer className={`mt-12`}>
        <p className="text-md sm:text-3xl font-gordita font-bold">Service</p>

        <p className="mt-2 sm:mt-4 text-sm sm:text-xl">
          This SERVICE is provided by Bitnob.
        </p>
        <p className="mt-2 sm:mt-4 text-sm sm:text-xl">
          This page is used to inform website visitors regarding our policies
          with the collection, use, and disclosure of Personal Information if
          anyone decided to use our Service.
        </p>
        <p className="mt-2 sm:mt-4 text-sm sm:text-xl">
          If you choose to use our Service, then you agree to the collection and
          use of information in relation to this policy. The Personal
          Information that we collect is used for providing and improving the
          Service. We will not use or share your information with anyone except
          as described in this Privacy Policy.
        </p>
        <p className="mt-2 sm:mt-4 text-sm sm:text-xl">
          The terms used in this Privacy Policy have the same meanings as in our
          Terms and Conditions, which is accessible at Bitnob unless otherwise
          defined in this Privacy Policy.
        </p>
      </BitNobContainer>

      <BitNobContainer className={`mt-12`}>
        <p className="text-md sm:text-3xl font-gordita font-bold">
          Information Collection and Use
        </p>

        <p className="mt-2 sm:mt-4 text-sm sm:text-xl">
          For a better experience, while using our Service, we may require you
          to provide us with certain personally identifiable information,
          including but not limited to emails, names, phone numbers. The
          information that we request is will be retained by us and used as
          described in this privacy policy.
        </p>

        <p className="mt-2 sm:mt-4 text-sm sm:text-xl">
          The app does use third party services that may collect information
          used to identify you.
        </p>

        <p className="mt-2 sm:mt-4 text-sm sm:text-xl">
          Link to privacy policy of third party service providers used by the
          app Google Play Services Firebase Analytics
        </p>

        <ul className="list-disc ml-4 mt-2 sm:mt-4">
          <li className="text-sm sm:text-xl">
            <a href="https://policies.google.com/privacy" className="text-bitGreen-link">
              Google Play Services
            </a>
          </li>
          <li className=" text-sm sm:text-xl">
            <a href="https://firebase.google.com/policies/analytics" className="text-bitGreen-link">
              Firebase Analytics
            </a>
          </li>
        </ul>
      </BitNobContainer>

      <BitNobContainer className={`mt-12`}>
        <p className="text-md sm:text-3xl font-gordita font-bold">Cookies</p>

        <p className="mt-2 sm:mt-4 text-sm sm:text-xl">
          Cookies are files with small amount of data that is commonly used an
          anonymous unique identifier. These are sent to your browser from the
          website that you visit and are stored on your device internal memory.
        </p>

        <br />

        <p className="mt-2 sm:mt-4 text-sm sm:text-xl">
          This Service does not use these “cookies” explicitly. However, the app
          may use third party code and libraries that use “cookies” to
          collection information and to improve their services. You have the
          option to either accept or refuse these cookies and know when a cookie
          is being sent to your device. If you choose to refuse our cookies, you
          may not be able to use some portions of this Service.
        </p>
      </BitNobContainer>

      <BitNobContainer className={`mt-12`}>
        <p className="text-md sm:text-3xl font-gordita font-bold">
          Service Providers
        </p>

        <p className="mt-2 sm:mt-4 text-sm sm:text-xl">
          We may employ third-party companies and individuals due to the
          following reasons:
        </p>

        <ul className="list-disc ml-4 mt-2 sm:mt-4">
          <li className="text-sm sm:text-xl">To facilitate our Service;</li>
          <li className=" text-sm sm:text-xl">
            To provide the Service on our behalf;
          </li>
          <li className="text-sm sm:text-xl">
            To perform Service-related services; or
          </li>
          <li className=" text-sm sm:text-xl">
            To assist us in analyzing how our Service is used.
          </li>
        </ul>

        <p className="mt-2 sm:mt-4 text-sm sm:text-xl">
          We want to inform users of this Service that these third parties have
          access to your Personal Information. The reason is to perform the
          tasks assigned to them on our behalf. However, they are obligated not
          to disclose or use the information for any other purpose.
        </p>
      </BitNobContainer>

      <BitNobContainer className={`mt-12`}>
        <p className="text-md sm:text-3xl font-gordita font-bold">Security</p>

        <p className="mt-2 sm:mt-4 text-sm sm:text-xl">
          We value your trust in providing us your Personal Information, thus we
          are striving to use commercially acceptable means of protecting it.
          But remember that no method of transmission over the internet, or
          method of electronic storage is 100% secure and reliable, and we
          cannot guarantee its absolute security.
        </p>
      </BitNobContainer>

      <BitNobContainer className={`mt-12`}>
        <p className="text-md sm:text-3xl font-gordita font-bold">
          Links to Other Sites
        </p>

        <p className="mt-2 sm:mt-4 text-sm sm:text-xl">
          This Service may contain links to other sites. If you click on a
          third-party link, you will be directed to that site. Note that these
          external sites are not operated by us. Therefore, we strongly advise
          you to review the Privacy Policy of these websites. We have no control
          over and assume no responsibility for the content, privacy policies,
          or practices of any third-party sites or services.
        </p>
      </BitNobContainer>

      <BitNobContainer className={`mt-12`}>
        <p className="text-md sm:text-3xl font-gordita font-bold">
          Children’s Privacy
        </p>

        <p className="mt-2 sm:mt-4 text-sm sm:text-xl">
          These Services do not address anyone under the age of 13. We do not
          knowingly collect personally identifiable information from children
          under 13. In the case we discover that a child under 13 has provided
          us with personal information, we immediately delete this from our
          servers. If you are a parent or guardian and you are aware that your
          child has provided us with personal information, please contact us so
          that we will be able to do necessary actions.
        </p>
      </BitNobContainer>

      <BitNobContainer className={`mt-12`}>
        <p className="text-md sm:text-3xl font-gordita font-bold">
          Changes to This Privacy Policy
        </p>

        <p className="mt-2 sm:mt-4 text-sm sm:text-xl">
          We may update our Privacy Policy from time to time. Thus, you are
          advised to review this page periodically for any changes. We will
          notify you of any changes by posting the new Privacy Policy on this
          page. These changes are effective immediately after they are posted on
          this page.
        </p>
      </BitNobContainer>

      <BitNobContainer className={`mt-12`}>
        <p className="text-md sm:text-3xl font-gordita font-bold">Contact Us</p>

        <p className="mt-2 sm:mt-4 text-sm sm:text-xl">
          If you have any questions or suggestions about our Privacy Policy, do
          not hesitate to contact us.
        </p>
      </BitNobContainer>

      <PreFooter />
    </div>
  </Page>
);

PrivacyPolicy.getLayout = getLayout;
export default PrivacyPolicy;
