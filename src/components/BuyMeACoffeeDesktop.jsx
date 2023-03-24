const BuyMeACoffeeDesktop = function () {
  const copyRight = new Date().getFullYear();
  return (
    <section className="text-center mt-4 mb-2">
      <h3 className="mt-3">Donate</h3>
      <h5 className="mt-3 mb-3">
        <a
          title="Buy Me A Coffee"
          href="https://buymeacoffee.com/jonlangner"
          className="donate-btn-resume lni lni-coffee-cup"
        >
          {" "}
          Buy me a coffee
        </a>{" "}
      </h5>
      <h6 className="mt-5 text-center">&#169; {copyRight} All rights reserved.</h6>
    </section>
  );
};


export default BuyMeACoffeeDesktop;