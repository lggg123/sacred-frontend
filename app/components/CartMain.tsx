import {useOptimisticCart} from '@shopify/hydrogen';
import {Link} from 'react-router';
import type {CartApiQueryFragment} from 'storefrontapi.generated';
import {useAside} from '~/components/Aside';
import {CartLineItem} from '~/components/CartLineItem';
import {CartSummary} from './CartSummary';

export type CartLayout = 'page' | 'aside';

export type CartMainProps = {
  cart: CartApiQueryFragment | null;
  layout: CartLayout;
};

/**
 * The main cart component that displays the cart items and summary.
 * It is used by both the /cart route and the cart aside dialog.
 */
export function CartMain({layout, cart: originalCart}: CartMainProps) {
  // The useOptimisticCart hook applies pending actions to the cart
  // so the user immediately sees feedback when they modify the cart.
  const cart = useOptimisticCart(originalCart);

  const linesCount = Boolean(cart?.lines?.nodes?.length || 0);
  const withDiscount =
    cart &&
    Boolean(cart?.discountCodes?.filter((code) => code.applicable)?.length);
  const className = `cart-main ${withDiscount ? 'with-discount' : ''}`;
  const cartHasItems = cart?.totalQuantity ? cart.totalQuantity > 0 : false;

  return (
    <div className={className}>
      <CartEmpty hidden={linesCount} layout={layout} />
      {linesCount && (
        <div className="cart-header">
          <h2>Your Cart</h2>
          <p className="cart-item-count">
            {cart?.totalQuantity} {cart?.totalQuantity === 1 ? 'item' : 'items'}
          </p>
        </div>
      )}
      <div className="cart-details">
        <div aria-labelledby="cart-lines" className="cart-lines">
          <ul className="cart-items-list">
            {(cart?.lines?.nodes ?? []).map((line) => (
              <CartLineItem key={line.id} line={line} layout={layout} />
            ))}
          </ul>
        </div>
        {cartHasItems && (
          <div className="cart-summary-wrapper">
            <CartSummary cart={cart} layout={layout} />
          </div>
        )}
      </div>
    </div>
  );
}

function CartEmpty({
  hidden = false,
}: {
  hidden: boolean;
  layout?: CartMainProps['layout'];
}) {
  const {close} = useAside();
  return (
    <div hidden={hidden} className="cart-empty">
      <div className="cart-empty-content">
        <div className="cart-empty-icon">🛍️</div>
        <h3>Your cart is empty</h3>
        <p>
          Looks like you haven&rsquo;t added anything yet. Let&rsquo;s get you
          started!
        </p>
        <Link 
          to="/collections" 
          onClick={close} 
          prefetch="viewport"
          className="btn-primary"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
