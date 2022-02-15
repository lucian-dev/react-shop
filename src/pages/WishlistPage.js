import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { useWishlistContext } from '../context/wishlist_context';

const WishlistPage = () => {
  const { wishlist } = useWishlistContext();

  if (wishlist.length < 1) {
    return <h5>No products in your wishlist...</h5>;
  }

  return (
    <main>
      <Wrapper className="page section">
        <div className="section-center wishlist">
          {wishlist.map((product) => {
            return (
              <div key={product.id} className="container">
                <img src={product.images[0].url} key={product.id} alt={product.name} />
                <h5>{product.name}</h5>
                <Link to={`/products/${product.id}`} className="link">
                  <FaSearch />
                </Link>
              </div>
            );
          })}
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  .wishlist {
    display: grid;
    gap: 2.5rem;
    margin: 4rem auto;
  }
  .container {
    position: relative;
    background: var(--clr-black);
    border-radius: var(--radius);
    height: 300px;
  }
  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
    transition: var(--transition);
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }
  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }
  @media (min-width: 576px) {
    .wishlist {
      grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
    }
  }
`;

export default WishlistPage;
