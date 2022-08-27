import { Fragment, useEffect, useRef, useState } from "react";
import Button from "~/components/Button";
import Container from "~/components/Container";
import NavItem from "~/components/NavItem";
import { ImArrowRight2 } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Index() {
  const [navColor, setNavColor] = useState("herobg");
  const heroRef = useRef(null);
  useEffect(() => {
    if (heroRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          const hero = entries[0];
          if (hero.isIntersecting) {
            setNavColor("herobg");
          } else {
            setNavColor("white");
          }
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0,
        }
      );
      observer.observe(heroRef.current);
    }
  });
  return (
    <Fragment>
      <nav
        className={`h-[80px] flex items-center bg-${navColor} sticky top-0 z-10 ${
          navColor === "white" ? "shadow" : ""
        }`}
      >
        <Container>
          <div className="flex justify-between">
            <div className="flex items-center gap-10">
              <img src="/assets/shopifylogo.svg" alt="brand logo" width={130} />
              <div className="lg:flex gap-5 hidden">
                {["Start", "Sell", "Market", "Manage"].map((item) => (
                  <NavItem key={item} text={item} />
                ))}
              </div>
            </div>
            <div className="flex gap-6">
              <div className="lg:flex gap-5 hidden">
                {["Pricing", "Learn"].map((item) => (
                  <NavItem
                    key={item}
                    text={item}
                    dropdown={item !== "Pricing"}
                  />
                ))}
              </div>
              <div className="flex gap-5 items-center">
                <NavItem text="Log in" dropdown={false} />
                <Button className="hidden lg:block">Try for free</Button>
                <GiHamburgerMenu className="lg:hidden cursor-pointer" />
              </div>
            </div>
          </div>
        </Container>
      </nav>
      <section id="hero" className="bg-herobg py-12" ref={heroRef}>
        <Container className="flex justify-between gap-4 flex-col lg:flex-row">
          <div className="flex items-center lg:w-1/2">
            <div className="md:max-w-[37rem]">
              <h1 className="text-3xl lg:text-5xl text-green mb-9 font-bold leading-normal max-w-[20rem] lg:max-w-none">
                The easiest way to sell online in India
              </h1>
              <p className="text-xl text-[#6b7177] pb-8">
                Try one of the most powerful platforms on the market for free.
                No technical knowledge needed.
              </p>
              <div className="flex flex-col md:flex-row gap-4 items-center mb-4">
                <input
                  type="text"
                  placeholder="Enter your email address"
                  className="p-4 bg-white rounded w-full outline-lightgreen"
                />
                <Button className="w-full md:w-4/12">Try for free</Button>
              </div>
              <small className="text-[#42474c]">
                Try Shopify free for 14 days, no credit card required. By
                entering your email, you agree to receive marketing emails from
                Shopify.
              </small>
            </div>
          </div>
          <div className="lg:w-1/2 overflow-hidden">
            <img
              src="/assets/herobg.webp"
              alt="shopify hero"
              className="w-full"
            />
          </div>
        </Container>
      </section>
      <section className="py-24 bg-green text-white">
        <Container>
          <h2 className="text-3xl md:text-4xl mb-3">
            Bring your business online
          </h2>
          <p className="mb-4">
            Create an ecommerce website backed by powerful tools that help you
            find customers, drive sales, and manage your day-to-day.
          </p>
          <a
            href="#"
            className="font-medium flex items-center gap-1 hover:gap-2 transition-all md:mb-16 mb-8"
          >
            <span>Explore more examples</span>
            <ImArrowRight2 />
          </a>

          <div className="md:flex md:justify-between md:gap-4 gap-8 grid grid-cols-2  mb-12 md:mb-24">
            <div>
              <img
                src="/assets/foodanddrink.jpg"
                alt="food and drink"
                className="mb-4 w-full"
              />
              <h3 className="font-bold text-[14px]">FOOD & DRINK</h3>
              <p className="text-[18px]">Blue Tokai</p>
            </div>
            <div>
              <img
                src="/assets/jwelry.webp"
                alt="jewelry"
                className="mb-4 w-full"
              />
              <h3 className="font-bold text-[14px]">JEWELRY</h3>
              <p className="text-[18px]">Quicksmith</p>
            </div>
            <div>
              <img
                src="/assets/electronics.webp"
                alt="electronics"
                className="mb-4 w-full"
              />
              <h3 className="font-bold text-[14px]">ELECTRONICS</h3>
              <p className="text-[18px]">Crossbeats</p>
            </div>
            <div>
              <img
                src="/assets/beauty.webp"
                alt="beauty"
                className="mb-4 w-full"
              />
              <h3 className="font-bold text-[14px]">BEAUTY</h3>
              <p className="text-[18px]">Mcaffeine</p>
            </div>
            <div className="hidden lg:block">
              <img
                src="/assets/fashion.webp"
                alt="fashion"
                className="mb-4 w-full"
              />
              <h3 className="font-bold text-[14px]">FASHION</h3>
              <p className="text-[18px]">Bunaai</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl mb-8 md:mb-12">
              Take the best path forward
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:flex gap-8">
              <div>
                <div className="w-[32px] mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
                    <path
                      d="M41 6a3 3 0 00-3-3H7a3 3 0 00-3 3v31a3 3 0 003 3h6a1 1 0 001-1v-1a1 1 0 00-1-1H7V12h31v2a1 1 0 001 1h1a1 1 0 001-1V6zM11 9H7V6h4zm3 0V6h24v3zm27 12v3a1 1 0 01-1 1h-1a1 1 0 01-1-1v-2h-3v-3h4a2 2 0 012 2zm-.87 10.67L27.5 25.81a1.5 1.5 0 00-2.1 1.68l3.13 14.33A1.5 1.5 0 0029.79 43H30a1.5 1.5 0 001.33-.8l3.07-5.8 5.61-2a1.5 1.5 0 00.14-2.78zm-7.29 2.1a1.5 1.5 0 00-.83.71l-1.43 2.69L29 29.81l6.53 3zM21 33h-3v-5h3zm3 7v1a1 1 0 01-1 1h-3a2 2 0 01-2-2v-4h3v3h2a1 1 0 011 1zm8-18h-5v-3h5zm-12-3h4v3h-3v3h-3v-4a2 2 0 012-2z"
                      fill="#90dfd6"
                    />
                  </svg>
                </div>
                <h3 className="font-medium mb-3 text-xl">
                  Start an online business
                </h3>
                <p>
                  Create a business, whether you’ve got a fresh idea or are
                  looking for a new way to make money.
                </p>
              </div>
              <div>
                <div className="w-[32px] mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
                    <path
                      d="M41.75 8.67L38 3.11A2.5 2.5 0 0036 2H9a2.5 2.5 0 00-2 1.11L3.25 8.67A1.5 1.5 0 003 9.5v3a7.48 7.48 0 003 6v13A3.5 3.5 0 009.5 35H15v2.5a2.5 2.5 0 01-2.5 2.5H12a1.5 1.5 0 000 3h21a1.5 1.5 0 000-3h-.5a2.5 2.5 0 01-2.5-2.5V35h5.5a3.5 3.5 0 003.5-3.5v-13a7.48 7.48 0 003-6v-3a1.5 1.5 0 00-.25-.83zM9.3 5h26.4l2.66 4H6.64zm17.79 7a1.64 1.64 0 00-.09.5 4.5 4.5 0 01-9 0 1.64 1.64 0 00-.09-.5zM6 12h9.09a1.64 1.64 0 00-.09.5 4.5 4.5 0 01-9 0zm21.61 28H17.39a5.4 5.4 0 00.61-2.5V35h9v2.5a5.4 5.4 0 00.61 2.5zM36 31.5a.5.5 0 01-.5.5h-26a.5.5 0 01-.5-.5V19.85a7.41 7.41 0 001.5.15 7.49 7.49 0 006-3 7.47 7.47 0 0012 0 7.49 7.49 0 006 3 7.41 7.41 0 001.5-.15zM34.5 17a4.51 4.51 0 01-4.5-4.5 1.64 1.64 0 00-.09-.5H39v.5a4.51 4.51 0 01-4.5 4.5z"
                      fill="#90dfd6"
                    />
                  </svg>
                </div>
                <h3 className="font-medium mb-3 text-xl">
                  Move your business online
                </h3>
                <p>
                  Turn your retail store into an online store and keep serving
                  customers without missing a beat.
                </p>
              </div>
              <div>
                <div className="w-[32px] mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
                    <path
                      d="M42.5 11.82v28a1.5 1.5 0 01-3 0v-27L23 5.46 6.5 12.8v27a1.5 1.5 0 01-3 0v-28a1.5 1.5 0 01.89-1.37l18-8a1.5 1.5 0 011.22 0l18 8a1.5 1.5 0 01.89 1.39zM32.5 28a1.5 1.5 0 00-1.5 1.5A8.48 8.48 0 0117.05 36h2.45a1.5 1.5 0 000-3h-6a1.5 1.5 0 00-1.5 1.5v6a1.5 1.5 0 003 0v-2.32a11.47 11.47 0 0019-8.68 1.5 1.5 0 00-1.5-1.5zM14 29.5A8.48 8.48 0 0127.95 23H25.5a1.5 1.5 0 000 3h6a1.5 1.5 0 001.5-1.5v-6a1.5 1.5 0 00-3 0v2.32a11.47 11.47 0 00-19 8.68 1.5 1.5 0 003 0z"
                      fill="#90dfd6"
                    />
                  </svg>
                </div>
                <h3 className="font-medium mb-3 text-xl">Switch to Shopify</h3>
                <p>
                  Bring your business to Shopify, no matter which ecommerce
                  platform you’re currently using.
                </p>
              </div>
              <div>
                <div className="w-[32px] mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
                    <path
                      d="M12.5 21A6.5 6.5 0 106 14.5a6.5 6.5 0 006.5 6.5zm0-10A3.5 3.5 0 119 14.5a3.5 3.5 0 013.5-3.5zM30 21a8 8 0 10-8-8 8 8 0 008 8zm0-13a5 5 0 11-5 5 5 5 0 015-5zm13 25.5v4a1.5 1.5 0 01-3 0v-4c0-3.77-2.52-6.5-6-6.5h-7.5a6.51 6.51 0 00-6.5 6.5v4a1.5 1.5 0 01-3 0v-4a9.51 9.51 0 019.5-9.5H34c5.13 0 9 4.08 9 9.5zm-27-8a1.5 1.5 0 01-1.5 1.5h-4A5.51 5.51 0 005 32.5V36a1.5 1.5 0 01-3 0v-3.5a8.51 8.51 0 018.5-8.5h4a1.5 1.5 0 011.5 1.5z"
                      fill="#90dfd6"
                    />
                  </svg>
                </div>
                <h3 className="font-medium mb-3 text-xl">
                  Hire a Shopify expert
                </h3>
                <p>
                  Get set up with the help of a trusted freelancer or agency
                  from the Shopify Experts Marketplace
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="py-24">
        <Container>
          <div className="text-center lg:w-1/2 mx-auto mb-16">
            <h2 className="text-4xl mb-4 text-[#212326]">
              With you wherever you’re going
            </h2>
            <p className="text-xl text-[#6b7177]">
              One platform with all the ecommerce and point of sale features you
              need to start, run, and grow your business.
            </p>
          </div>
          <div className="flex flex-col-reverse lg:flex-row justify-between gap-4 mb-16">
            <div>
              <video src="/assets/selleverywhere.webm" autoPlay muted />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl mb-4">Sell everywhere</h3>
              <p className="text-[#6b7177] mb-6">
                Use one platform to sell products to anyone, anywhere—in person
                with Point of Sale and online through your website, social
                media, and online marketplaces.
              </p>
              <a
                href="#"
                className="font-medium flex items-center gap-1 hover:gap-2 transition-all lg:mb-16  text-lightgreen text-lg"
              >
                <span>Explore ways to sell</span>
                <ImArrowRight2 />
              </a>
            </div>
          </div>
          <div className="flex flex-col-reverse lg:flex-row-reverse justify-between gap-4 mb-16">
            <div className="lg:w-1/2 ">
              <img
                src="/assets/marketbusiness.webp"
                alt="market"
                className="w-full"
              />
            </div>
            <div className="flex flex-col justify-center lg:w-1/2 lg:max-w-[32rem] lg:ml-auto">
              <h3 className="text-3xl mb-4">Market your business</h3>
              <p className="text-[#6b7177] mb-6">
                Take the guesswork out of marketing with built-in tools that
                help you create, execute, and analyze digital marketing
                campaigns.
              </p>
              <a
                href="#"
                className="font-medium flex items-center gap-1 hover:gap-2 transition-all md:mb-16 mb-8 text-lightgreen text-lg"
              >
                <span>Explore how to market your business</span>
                <ImArrowRight2 />
              </a>
            </div>
          </div>
          <div className="flex flex-col-reverse lg:flex-row justify-between gap-8">
            <div className="lg:w-1/2 drop-shadow-md rounded">
              <img
                src="/assets/manage.png"
                alt="manage"
                loading="lazy"
                width={"100%"}
                className="rounded"
              />
            </div>
            <div className="flex flex-col justify-center lg:w-1/2 max-w-[24rem] lg:mx-auto">
              <h3 className="text-3xl mb-4">Manage everything</h3>
              <p className="text-[#6b7177] mb-6">
                Gain the insights you need to grow—use a single dashboard to
                manage orders, shipping, and payments anywhere you go.
              </p>
              <a
                href="#"
                className="font-medium flex items-center gap-1 hover:gap-2 transition-all md:mb-16 mb-8 text-lightgreen text-lg"
              >
                <span>Explore how to manage your business</span>
                <ImArrowRight2 />
              </a>
            </div>
          </div>
        </Container>
      </section>
      <section className="py-24 bg-[#F3FCF4]">
        <Container>
          <h2 className="text-4xl mb-16">Explore more from Shopify in India</h2>
          <div className="flex flex-col-reverse lg:flex-row rounded bg-white">
            <div className="p-8 lg:w-1/2">
              <b className="font-medium mb-8 block">Start</b>
              <h3 className="text-3xl mb-4">
                Launch your store with the help of a Shopify Expert
              </h3>
              <p className="mb-12">
                Find hundreds of experts from India ready to help you get your
                store up and running, from choosing a theme to building a fully
                customized site.
              </p>
              <a
                href="#"
                className="font-medium flex items-center gap-1 hover:gap-2 transition-all  text-lightgreen text-lg"
              >
                <span>Browse Experts in India</span>
                <ImArrowRight2 />
              </a>
            </div>
            <div className="lg:w-1/2">
              <img
                src="/assets/explorecardphoto.webp"
                alt="expert person"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Container>
      </section>
      <section className="py-12">
        <Container className="text-[#212326]">
          <div className="max-w-[45rem]">
            <h2 className="text-2xl lg:text-4xl mb-6">
              Empowering independent business owners everywhere
            </h2>
            <p className="lg:text-2xl mb-8">
              Millions of businesses in <strong> 175 countries</strong> around
              the world have made over <strong> $496 billion USD</strong> in
              sales using Shopify.
            </p>
            <a
              href="#"
              className="font-medium flex items-center gap-1 hover:gap-2 transition-all  text-lightgreen text-lg"
            >
              <span>Browse Experts in India</span>
              <ImArrowRight2 />
            </a>
          </div>
          <img src="/assets/globe.png" alt="globe" width={"100%"} />
          <div className="flex flex-col md:flex-row mb-12">
            <div className="md:w-1/2">
              <img
                src="/assets/customer.jpg"
                alt="happy customer"
                className="w-full md:h-full h-[14rem] object-cover"
              />
            </div>
            <div className="text-center text-white md:w-1/2 bg-darkgreen flex flex-col justify-center p-8 md:p-16">
              <h3 className="font-medium text-lg lg:text-3xl mb-8">
                “Shopify was my knight in shining armor when I exhausted every
                other possibility of getting my online store up and running. It
                was stunningly easy to use, with more features and plug-ins that
                I didn’t even know I wanted.”
              </h3>
              <div className="flex flex-col justify-start items-center">
                <img
                  src="/assets/customerbusiness.webp"
                  alt="customer business logo"
                  className="mb-4"
                />
                <h3 className="font-medium">Alicia | Alicia Souza</h3>
              </div>
            </div>
          </div>
          <div className="flex justify-between gap-8 flex-wrap">
            <img src="/assets/bajaao.webp" alt="bajaao" />
            <img src="/assets/jj.webp" alt="john jacobs" />
            <img src="/assets/kylie.avif" alt="kylie" />
            <img src="/assets/nush.webp" alt="nush" />
            <img src="/assets/yogabar.webp" alt="yogabar" />
            <img src="/assets/starstruck.webp" alt="starstruck" />
            <img src="/assets/mcaffeine.webp" alt="mcaffeine" />
          </div>
        </Container>
      </section>
      <section>
        <Container className="flex lg:flex-row flex-col bg-herobg">
          <div className="flex flex-col py-12 justify-center px-12">
            <h2 className="text-2xl lg:text-4xl mb-12">
              Get the help you need, every step of the way
            </h2>
            <div className="flex gap-8 flex-wrap">
              <div className="lg:max-w-[18rem]">
                <h3 className="mb-4 text-xl">Shopify support</h3>
                <p className="mb-6">
                  Contact support 24/7, whether you’re troubleshooting issues or
                  looking for business advice.
                </p>
                <a
                  href="#"
                  className="font-medium flex items-center gap-1 hover:gap-2 transition-all  text-lightgreen text-md"
                >
                  <span>Browse Experts in India</span>
                  <ImArrowRight2 />
                </a>
              </div>
              <div className="lg:max-w-[18rem]">
                <h3 className="mb-4 text-xl">Shopify App Store</h3>
                <p className="mb-6">
                  Add features and functionality to your business with 6,000+
                  apps that integrate directly with Shopify.
                </p>
                <a
                  href="#"
                  className="font-medium flex items-center gap-1 hover:gap-2 transition-all  text-lightgreen text-md"
                >
                  <span>Visit the Shopify App Store</span>
                  <ImArrowRight2 />
                </a>
              </div>
              <div className="lg:max-w-[20rem]">
                <h3 className="mb-4 text-xl">Shopify Experts Marketplace</h3>
                <p className="mb-6">
                  Hire a Shopify expert to help you with everything from store
                  setup to SEO.
                </p>
                <a
                  href="#"
                  className="font-medium flex items-center gap-1 hover:gap-2 transition-all  text-lightgreen text-md"
                >
                  <span>Explore the Shopify Experts Marketplace</span>
                  <ImArrowRight2 />
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img
              src="/assets/workingman.webp"
              alt="working man"
              className="w-full lg:h-full h-[20rem] object-cover object-top"
            />
          </div>
        </Container>
      </section>
      <section className="py-24">
        <Container className="text-center">
          <h2 className="mb-4 text-2xl lg:text-4xl">
            Start your business journey with Shopify
          </h2>
          <p className="mb-8 text-[#6b7177]  lg:text-xl">
            Try Shopify for free, and explore all the tools and services you
            need to start, run, and grow your business.
          </p>
          <Button>Start free trial</Button>
        </Container>
      </section>
      <footer className="py-8 text-white bg-darkgreen">
        <Container>
          <div className="mb-4">
            <ul className="flex gap-8 font-medium flex-wrap">
              <li className="cursor-pointer">About</li>
              <li className="cursor-pointer">Careers</li>
              <li className="cursor-pointer">Press and Media</li>
              <li className="cursor-pointer">Shopify Plus</li>
              <li className="cursor-pointer">Sitemap</li>
            </ul>
          </div>
          <hr className="border-top border-[rgba(255,255,255,0.2)] mb-8" />
          <div className="flex gap-4">
            <a
              href="#"
              className="text-[rgba(255,255,255,0.5)] hover:text-white"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-[rgba(255,255,255,0.5)] hover:text-white"
            >
              Privacy Policy
            </a>
          </div>
        </Container>
      </footer>
    </Fragment>
  );
}
