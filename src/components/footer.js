import { FaFacebook, FaTelegram, FaGithub } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

const Footer = () => {
  return (
    <div className="bg-[#1c3f60] text-white p-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div>
          <p className="text-lg">
            <h1 className="capitalize mb-2 text-3xl font-bold">
              Subscribe our news letter
            </h1>
            "When I look back, I am so impressed again with the life-giving
            power of literature. If I were a young person today, trying to gain
            a sense of myself in the world, I would do that again by reading,
            just as I did when I was young." – Maya Angelou
          </p>
          <div className="h-10 my-4 flex items-center rounded-md overflow-hidden">
            <input
              placeholder="Email..."
              className="outline-none w-full h-full px-3 py-1 text-[#1c3f60] font-serif font-semibold"
            />
            <span className="bg-orange-700 flex justify-center items-center px-4 h-full cursor-pointer hover:bg-blue-600">
              Subscribe
            </span>
          </div>
        </div>
        <p className="text-lg">
          <h1 className="capitalize mb-2 text-3xl font-bold">About</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, rem
          accusamus iste unde nesciunt, modi ducimus sed voluptates cumque
          aliquid enim? Minima, voluptate voluptas officia rerum tenetur
          nesciunt eum quia.
        </p>
      </div>
      {/*  */}
      <div className="flex flex-col md:flex-row gap-4">
        <ul className="flex-1 flex justify-between text-lg ">
          <li className="cursor-pointer hover:text-[#1fa6fb] ">Home</li>
          <li className="cursor-pointer hover:text-[#1fa6fb] ">About</li>
          <li className="cursor-pointer hover:text-[#1fa6fb] ">Store</li>
          <li className="cursor-pointer hover:text-[#1fa6fb] ">Support us</li>
          <li className="cursor-pointer hover:text-[#1fa6fb] ">Blogs</li>
        </ul>
        <ul className="flex-1 flex justify-center gap-4">
          <li>
            <FaFacebook
              size={26}
              fill="#1fa6fb"
              className="cursor-pointer hover:scale-125 duration-300"
            />
          </li>
          <li>
            <FaTelegram
              size={26}
              fill="#2faceb"
              className="cursor-pointer hover:scale-125 duration-300"
            />
          </li>
          <li>
            <FaGithub
              size={26}
              className="cursor-pointer hover:scale-125 duration-300"
            />
          </li>
          <li>
            <SiUpwork
              size={26}
              fill="#08ff09"
              className="cursor-pointer hover:scale-125 duration-300"
            />
          </li>
        </ul>
      </div>
      <p className="text-xl my-8 flex justify-center items-center">
        <span className="text-2xl mr-2">&#169;</span> Copyright 2024 &#174; All
        rights reserved.
      </p>
    </div>
  );
};

export default Footer;
