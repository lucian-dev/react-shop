import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PageHero = ({ title, product }) => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>
          <Link to="/">Home</Link> / {product && <Link to="/products">Products /</Link>}
          {title}
        </h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;
  background: var(--clr-primary-10);
  color: var(--clr-primary-1);
  a {
    color: var(--clr-primary-3);
    padding: 0.5rem;
    transition: var(--tranition);
    &:hover {
      color: var(--clr-primary-1);
    }
  }
`;

export default PageHero;
