import Slider from "./Slider";

const PrivacyPolicy = () => {
  const words = [
    "PRIVACY",
    "*",
    "POLICY",
    "*",
    "PRIVACY",
    "*",
    "POLICY",
    "*",
    "PRIVACY",
    "*",
    "POLICY",
    "*",
  ];
  return (
    <div className="pt-24">
      <Slider words={words} />
      <div className="text-white py-44 px-32">
        <p className="py-5">
          RSET operates the techkshetra22 website, which provides the SERVICE.
        </p>

        <p className="py-5">
          If you choose to use our Service, then you agree to the collection and
          use of information in relation with this policy. The Personal
          Information that we collect are used for providing and improving the
          Service. We will not use or share your information with anyone except
          as described in this Privacy Policy.
        </p>
        <p>
          The terms used in this Privacy Policy have the same meanings as in our
          Terms and Conditions, which is accessible at techkshetra22, unless
          otherwise defined in this Privacy Policy.
        </p>
      </div>
      <Slider words={words} />
    </div>
  );
};

export default PrivacyPolicy;
