import SEO from "@components/SEO";
import Layout from "@components/Layout";
import Box from "@components/Box";
import { MenuToggle } from "@components/MenuToggle";
import { motion, useCycle } from "framer-motion";

const About = (): JSX.Element => {
  const [isOpen, toggleOpen] = useCycle(false, true);

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
      <Box>TExte aqui para ver se anima</Box>
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
