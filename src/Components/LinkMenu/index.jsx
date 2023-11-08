import { ContainerLink } from "./styles";
import P from "prop-types";

const Link = ({ children }) => {
  return <ContainerLink>{children}</ContainerLink>;
};

export default Link;

Link.propTypes = {
  children: P.string.isRequired,
};
