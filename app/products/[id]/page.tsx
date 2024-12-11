import Link from "next/link";
import products from "@/data/ltsblog"
import Image from "next/image";


const ProductsPage = () => {
    return (
        <div>
            <h1>Our Products</h1>
            <div className="grid grid-cols-2 gap-4">
                {products.map((product) => (
                    <div key={product.id} className="border p-4 rounded-md shadow-md">
                        <Image src={product.image} alt={product.name} height={400}width={400} className="w-full h-48 object-cover" />
                        <h2 className="text-lg font-bold">{product.name}</h2>
                        <p className="text-lg">{product.description}</p>
                        <Link href={`/products/${product.id}`}>
                            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
                                View 
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductsPage