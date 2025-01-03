"use client"
import { useRouter } from "next/navigation";
import CommentSection from "@/components/comments"; 
import Image from "next/image";
import allblogs from "@/data/blog";

const ProductDetailPage = ({ params }: { params: { id: string } }) => {
    console.log(params)
    const route = useRouter();
    const blog = allblogs.find((b) => b.id === params.id)

    if (!blog) {
        return <p>Product not found!</p>;
    }

    return (
        <div className="bg-zinc-200 min-h-screen">
            <h1 className="text-5xl font-bold text-black mx-5 py-6">{blog.name}</h1>
            <Image src={blog.image} alt={blog.name} width={500} height={500} className="w-full h-80 object-cover my-4" />
            <p className="text-lg">{blog.description}</p>
            <br />
            <p className="text-lg">{blog.description2}</p>
            <br />
            <p className="text-lg">{blog.description3}</p>
            <br />
            <br />
            <p className="text-lg">{blog.description4}</p>
            <CommentSection />
            
            <div className='flex items-center justify-center bg-zinc-300 py-10'>
                <button onClick={() => route.push("/")} className='mt- bg-black hover:bg-fuchsia-500 text-zinc-800 font-semibold px-4 py-2 rounded border border-zinc-500'>
                    Go Back
                </button>
            </div>
        </div>
    );
};

export default ProductDetailPage;