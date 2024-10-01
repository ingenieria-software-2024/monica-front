interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
    imageUrl: string;
  }
  
  const ProductCard = ({ product }: { product: Product }) => {
    return (
      <div className="border p-4 rounded shadow-md">
        <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
        <h3 className="text-xl font-bold mt-2">{product.name}</h3>
        <p className="text-gray-500">{product.category}</p>
        <p className="text-lg font-semibold mt-2">${product.price}</p>
      </div>
    );
  };
  
  export default ProductCard;