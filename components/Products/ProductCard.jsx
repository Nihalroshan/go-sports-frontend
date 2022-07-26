import Image from "next/image";

const ProductCard = () => {
    return (
        <div className="h-[372px] w-[210px] bg-[#1d273b] rounded">
            <img className="rounded-t h-[262px]" src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/u7khoqev6hy2xgsllrnb/revolution-5-road-running-shoes-szF7CS.png" alt="product" />
            <div className="p-4">
                <div className="text-white font-bold text-lg">$100 </div>
                <div className="text-gray-400 font-bold text-sm">Nike Running shoes</div>
            </div>
        </div>
    );
};

export default ProductCard;
