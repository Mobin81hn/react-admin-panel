const Footer = () => {
  return (
    <div className="mt-24 pb-14">
      <p className="dark:text-gray-200 text-gray-700 text-center text-sm xs:text-lg">
        © {(new Date()).getFullYear()} All rights reserved by Shoppy.com
      </p>
    </div>
  );
};

export default Footer;
