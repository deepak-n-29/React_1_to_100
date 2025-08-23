import useGlobalStore from "../../store/store";

const ProductCard = ({
  id,
  title,
  price,
  description,
  image,
}) => {

  const addToCart = useGlobalStore((state) => state.addToCart);
  const product = { id, title, price, description, image };
   

  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden min-w-[320px] flex-1 shadow-xl group">
      <div id="img-wrapper" className="h-48 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition"
        />
      </div>

      <div id="cart-content" className="p-6 space-y-2">
        <h3 className="font-fancy text-2xl">{title}</h3>
        <p className="text-lg font-light text-gray-300">{description}</p>
        <div
          id="card-footer"
          className="flex justify-between mt-8 items-center"
        >
          <p className="text-xl font-medium">Rs. {price}</p>
          <button
            onClick={() =>addToCart(product)}
            className="bg-yellow-400 px-4 py-2 rounded-lg text-black font-medium cursor-pointer hover:bg-yellow-300"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
