import PropTypes from 'prop-types';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { BackLink } from './GoBack.styled';

export const GoBack = ({ to, children }) => {
  const link = to.current.pathname + to.current.search;
  return (
    <BackLink to={link}>
      <AiOutlineArrowLeft />
      {children}
    </BackLink>
  );
};

GoBack.PropType = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node,
};
