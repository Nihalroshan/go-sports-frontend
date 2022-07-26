import { useRouter } from "next/router";
import Button from "../components/UI/Button";

const Product = () => {
    const router = useRouter();
    const { productId } = router.query;

    return (
        <div className="w-full h-[calc(100vh-80px)] flex">
            <div className="w-[50%] grid place-items-center">
                <img
                    className="h-[400px] w-[300px] rounded"
                    src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/u7khoqev6hy2xgsllrnb/revolution-5-road-running-shoes-szF7CS.png"
                />
                <div className="flex justify-between w-[300px]">
                    <Button>ADD TO CART</Button>
                    <Button>BUY NOW</Button>
                </div>
            </div>
            <div className="w-[50%] text-white my-14">
                <h1 className="text-3xl font-bold">Nike Running shoes</h1>
                <h3 className="py-4">Rating....</h3>
                <h3 className="py-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, architecto corporis! Necessitatibus modi laboriosam, aliquid qui in voluptatem, reiciendis nobis obcaecati culpa id odit animi ut fugiat, sunt repudiandae praesentium?Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, iure. Molestiae, magnam unde exercitationem placeat expedita velit aut quisquam aperiam odit dolor, debitis fugiat, ipsa adipisci. Vel, necessitatibus adipisci. Cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat harum quae cupiditate accusamus, esse consectetur repellat unde porro quod recusandae repudiandae eum ab? Ex commodi ad sed consectetur quod itaque!</h3>
            </div>
        </div>
    );
};

export default Product;
