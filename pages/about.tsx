import SEO from "@components/SEO";
import Layout from "@components/Layout";
import Box from "@components/Box";
import Inertia from "@components/Inertia";
import { MenuToggle } from "@components/MenuToggle";
import BoxZoom from "@components/BoxZoom";
import TitleBox from "@components/elements/title/Box";
import TitleType from "@components/elements/title/Type";
import Underline from "@components/decoration/Underline";
import InView from "@components/elements/InView";
import StaggerChildren from "@components/elements/StaggerChildren";
import CardTestimonial from "@components/elements/card/Testimonial";
import Testimonial from "@components/elements/card/Testimonial";
import ToTop from "@components/elements/ToTop";

const About = (): JSX.Element => {
  return (
    <div>
      <SEO />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate,
        ipsum eu dignissim lacinia, nisi nisl aliquet nunc, eget consectetur
        nunc nisi euismod erat. Donec eget lacinia nisl. Nulla facilisi. Nulla
        facilisi.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate,
        ipsum eu dignissim lacinia, nisi nisl aliquet nunc, eget consectetur
        nunc nisi euismod erat. Donec eget lacinia nisl. Nulla facilisi. Nulla
        facilisi.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate,
        ipsum eu dignissim lacinia, nisi nisl aliquet nunc, eget consectetur
        nunc nisi euismod erat. Donec eget lacinia nisl. Nulla facilisi. Nulla
        facilisi.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate,
        ipsum eu dignissim lacinia, nisi nisl aliquet nunc, eget consectetur
        nunc nisi euismod erat. Donec eget lacinia nisl. Nulla facilisi. Nulla
        facilisi.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate,
        ipsum eu dignissim lacinia, nisi nisl aliquet nunc, eget consectetur
        nunc nisi euismod erat. Donec eget lacinia nisl. Nulla facilisi. Nulla
        facilisi.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate,
        ipsum eu dignissim lacinia, nisi nisl aliquet nunc, eget consectetur
        nunc nisi euismod erat. Donec eget lacinia nisl. Nulla facilisi. Nulla
        facilisi.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate,
        ipsum eu dignissim lacinia, nisi nisl aliquet nunc, eget consectetur
        nunc nisi euismod erat. Donec eget lacinia nisl. Nulla facilisi. Nulla
        facilisi.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate,
        ipsum eu dignissim lacinia, nisi nisl aliquet nunc, eget consectetur
        nunc nisi euismod erat. Donec eget lacinia nisl. Nulla facilisi. Nulla
        facilisi.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate,
        ipsum eu dignissim lacinia, nisi nisl aliquet nunc, eget consectetur
        nunc nisi euismod erat. Donec eget lacinia nisl. Nulla facilisi. Nulla
        facilisi.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate,
        ipsum eu dignissim lacinia, nisi nisl aliquet nunc, eget consectetur
        nunc nisi euismod erat. Donec eget lacinia nisl. Nulla facilisi. Nulla
        facilisi.
      </p>
      <Box>
        <div className="flex flex-col bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text py-24 text-transparent">
          <div className="tracking-tighest mt-1 text-4xl font-extrabold uppercase sm:text-5xl lg:text-7xl">
            Hypercolor
          </div>{" "}
          <h2 className="order-first font-medium tracking-wide">
            Gradients for Tailwind CSS
          </h2>
        </div>
      </Box>
      <InView>
        <div className="mt-6">
          <TitleType>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 lg:text-7xl">
              User Profiles
            </h2>
          </TitleType>

          <Underline bg="bg-blue-500" />
          <p className="mt-4 text-lg text-gray-500">
            Customizable user profiles. Allow your users to enter data and
            easily customize their user profiles.
          </p>
        </div>
      </InView>

      <InView>
        <StaggerChildren>
          <div className="mx-auto flex max-w-5xl items-center justify-center">
            <div className="flex w-full flex-col justify-items-center md:w-3/5 md:items-center md:justify-items-start ">
              <p className="text-wave-500 mb-2 text-base font-medium uppercase tracking-tight">
                Our customers love our product
              </p>
              <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:leading-none lg:text-5xl xl:text-6xl">
                Testimonials
              </h2>
              <p className="my-6 pr-5 text-lg text-gray-600 md:text-center lg:text-left">
                This is an example section of where you will add your
                testimonials for your Software as a Service.
              </p>
              <button className="btn btn-primary">Button</button>
            </div>
            <div>
              <ToTop>
                <Testimonial />
              </ToTop>
              <ToTop>
                <Testimonial />
              </ToTop>
              <ToTop>
                <Testimonial />
              </ToTop>
            </div>
          </div>
        </StaggerChildren>
      </InView>

      <InView>
        <StaggerChildren>
          <div className="mx-auto grid max-w-5xl grid-cols-1 flex-col items-center justify-center gap-4 md:grid-cols-2">
            <ToTop>
              <Testimonial />
            </ToTop>
            <ToTop>
              <Testimonial />
            </ToTop>
          </div>
        </StaggerChildren>
      </InView>

      <div className="mx-auto max-w-4xl">
        <InView>
          <StaggerChildren>
            <div className="mx-auto grid max-w-5xl grid-cols-1 flex-col items-center justify-center gap-4 md:grid-cols-2">
              <ToTop>
                <div className="card bg-base-100 w-96 shadow-xl">
                  <img
                    src="https://api.lorem.space/image/shoes?w=400&h=225"
                    alt="Shoes"
                  />

                  <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">Buy Now</button>
                    </div>
                  </div>
                </div>
              </ToTop>
              <ToTop>
                <div className="card bg-base-100 w-96 shadow-xl">
                  <img
                    src="https://api.lorem.space/image/shoes?w=400&h=225"
                    alt="Shoes"
                  />

                  <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">Buy Now</button>
                    </div>
                  </div>
                </div>
              </ToTop>
            </div>
          </StaggerChildren>
        </InView>
      </div>
      <BoxZoom>
        <div className="w-full rounded-3xl bg-gradient-to-r from-red-800 via-yellow-600 to-yellow-500 px-12 py-24">
          <ul>
            <Inertia>
              <div className="text-center text-5xl font-bold">TEste</div>
            </Inertia>
            <Inertia>
              <p className="mx-auto mt-8 max-w-2xl text-xl font-medium text-white">
                A curated collection of beautiful Tailwind CSS gradients using
                the full range of Tailwind CSS colors. Easily copy and paste the
                class names, CSS or even save the gradients as an image.
              </p>
            </Inertia>
          </ul>
        </div>
      </BoxZoom>

      <Box>
        <div className="flex flex-col bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text py-24 text-transparent">
          <h1 className="tracking-tighest mt-1 text-4xl font-extrabold uppercase sm:text-5xl lg:text-7xl">
            Hypercolor
          </h1>{" "}
          <h2 className="order-first font-medium tracking-wide">
            Gradients for Tailwind CSS
          </h2>
        </div>
      </Box>
    </div>
  );
};

export default About;
