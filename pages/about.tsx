import SEO from "@components/SEO";
import Layout from "@components/Layout";
import Box from "@components/Box";
import Inertia from "@components/Inertia";
import { MenuToggle } from "@components/MenuToggle";
import BoxZoom from "@components/BoxZoom";

const About = (): JSX.Element => {
  const filho = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 30,
        damping: 20,
      },
    },
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 30,
        damping: 20,
      },
    },
  };

  return (
    <Layout>
      <SEO />
      <div className="min-h-screen bg-gray-500 text-4xl">About</div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate,
        ipsum eu dignissim consectetur, nisi nisl aliquam purus, eget tincidunt
        nisl nisl euismod erat. Nulla facilisi. Pellentesque habitant morbi
        tristique senectus et netus et malesuada fames ac turpis egestas. Nullam
        euismod, nisi eget tincidunt consectetur, nisl nisl aliquam purus, eget
        tincidunt nisl nisl euismod erat. Nulla facilisi. Pellentesque habitant
        morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Nullam euismod, nisi eget tincidunt consectetur, nisl nisl aliquam
        purus, eget tincidunt nisl nisl euismod erat. Nulla facilisi.
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Nullam euismod, nisi eget tincidunt
        consectetur, nisl nisl aliquam purus, eget tincidunt nisl nisl euismod
        erat. Nulla facilisi. Pellentesque habitant morbi tristique senectus et
        netus et malesuada fames ac turpis egestas. Nullam euismod, nisi eget
        tincidunt consectetur, nisl nisl aliquam purus, eget tincidunt nisl nisl
        euismod erat. Nulla facilisi. Pellentesque habitant morbi tristique
        senectus et netus et malesuada fames ac turpis egestas. Nullam euismod,
      </p>
      <BoxZoom>
        <div className="flex flex-col bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text py-24 text-transparent">
          <h1 className="tracking-tighest mt-1 text-4xl font-extrabold uppercase sm:text-5xl lg:text-7xl">
            Hypercolor
          </h1>{" "}
          <h2 className="order-first font-medium tracking-wide">
            Gradients for Tailwind CSS
          </h2>
        </div>
      </BoxZoom>
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
      <Box>
        <div className="flex items-center justify-center">
          <div className="w-full rounded-3xl bg-gradient-to-r from-red-800 via-yellow-600 to-yellow-500 px-12 py-24">
            <ul>
              <Inertia>
                <div className="text-center text-5xl font-bold">TEste</div>
              </Inertia>
              <Inertia>
                <p className="mx-auto mt-8 max-w-2xl text-xl font-medium text-white">
                  A curated collection of beautiful Tailwind CSS gradients using
                  the full range of Tailwind CSS colors. Easily copy and paste
                  the class names, CSS or even save the gradients as an image.
                </p>
              </Inertia>
              <Inertia>
                <p className="mx-auto mt-8 max-w-2xl text-xl font-medium text-white">
                  A curated collection of beautiful Tailwind CSS gradients using
                  the full range of Tailwind CSS colors. Easily copy and paste
                  the class names, CSS or even save the gradients as an image.
                </p>
              </Inertia>
            </ul>
          </div>
          <div>
            <Inertia>
              <div className="text-center text-5xl font-bold">TEste</div>
            </Inertia>
            <Inertia>
              <p className="mx-auto mt-8 max-w-2xl text-xl font-medium text-gray-800">
                A curated collection of beautiful Tailwind CSS gradients using
                the full range of Tailwind CSS colors. Easily copy and paste the
                class names, CSS or even save the gradients as an image.
              </p>
            </Inertia>
            <Inertia>
              <p className="mx-auto mt-8 max-w-2xl text-xl font-medium text-gray-800">
                A curated collection of beautiful Tailwind CSS gradients using
                the full range of Tailwind CSS colors. Easily copy and paste the
                class names, CSS or even save the gradients as an image.
              </p>
            </Inertia>
          </div>
        </div>
      </Box>
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
      <Box>TExte aqui para ver se anima</Box>
      <Box>TExte aqui para ver se anima</Box>
      <Box>TExte aqui para ver se anima</Box>
      <Box>TExte aqui para ver se anima</Box>
      <Box>TExte aqui para ver se anima</Box>
      <MenuToggle toggle={() => toggleOpen()} />
    </Layout>
  );
};

export default About;
