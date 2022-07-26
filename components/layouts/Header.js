import Link from "next/link";
import { AiFillHome, AiFillAppstore, AiOutlineShoppingCart } from "react-icons/ai"
import Button from "../UI/Button"

const Header = () => {
    return (
        <div className="w-full h-20  text-[#cecece] border-b border-gray-600">
            <ul className="flex h-20 justify-around items-center text-md">
                <li className="text-lg italic border-l border-r px-2"><Link href="/"><a>GO SPORTS</a></Link></li>
                <li className="cursor-pointer"><AiFillHome /></li>
                <li className="cursor-pointer"><AiFillAppstore /></li>
                <li className="cursor-pointer"><AiOutlineShoppingCart /></li>
                <li><Button>Login</Button></li>
            </ul>
        </div>
    )
}

export default Header