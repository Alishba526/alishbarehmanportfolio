// import Image from "next/image";
// import alishba from "../../../my-work/public/image/alishba.jpg";

// const Hero = () => {
//   return (
//     <div className="mb-40">
//       <div>
//         <Image
//           className="absolute -z-10 opacity-10"
//           src={alishba}
//           fill
//           alt="me"
//         />
//       </div>

//       <div className="flex items-center gap-2 flex-wrap justify-center lg:justify-between lg:flex-nowrap">
//         <div className="flex-shrink-0">
//           <Image
//             className="border-b-4 border-pink-600 animate__animated animate__backInLeft w-72 sm:w-[500px] md:w-[500px]"
//             src={alishba}
//             alt="Picture of the Alishba rehman"
//             width={400}
//             height={100}
//           />
//         </div>

//         <div className="flex justify-center flex-col p-4 animate__animated animate__backInRight">
//           <h1 className="text-white text-5xl text-center lg:text-left font-bold mb-5">
//             Hi, I'm Alisba. Nice to meet you.
//           </h1>
//           <p className="text-white text-2xl text-center lg:text-left font-normal">
//             Hello! I am a web developer and academic writer with a passion for
//             crafting impactful digital experiences. I’m currently building my
//             portfolio to showcase my skills. I excel in web development, from
//             designing creative interfaces to developing dynamic applications. My
//             expertise includes HTML, CSS, JavaScript, TypeScript, React.js, and
//             Next.js, enabling me to create robust and user-friendly websites. In
//             academic writing, I simplify complex topics into clear, impactful
//             content, bridging the gap between research and understanding.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;









import Image from "next/image";
import alishba from "../../../my-work/public/image/alishba.jpg";

const Hero = () => {
  return (
    <div className="mb-40">
      <div>
        <Image
          className="absolute -z-10 opacity-10"
          src={alishba}
          fill
          alt="me"
        />
      </div>

      <div className="flex items-center gap-2 flex-wrap justify-center lg:justify-between lg:flex-nowrap">
        <div className="flex-shrink-0">
          <Image
            className="border-4 border-pink-600 rounded-full animate__animated animate__backInLeft w-40 h-40 sm:w-60 sm:h-60 md:w-72 md:h-72 object-cover"
            src={alishba}
            alt="Picture of Alishba Rehman"
            width={400}
            height={400}
          />
        </div>

        <div className="flex justify-center flex-col p-4 animate__animated animate__backInRight">
          <h1 className="text-white text-5xl text-center lg:text-left font-bold mb-5">
            Hi, I'm Alisba. Nice to meet you.
          </h1>
          <p className="text-white text-2xl text-center lg:text-left font-normal">
            Hello! I am a web developer and academic writer with a passion for
            crafting impactful digital experiences. I’m currently building my
            portfolio to showcase my skills. I excel in web development, from
            designing creative interfaces to developing dynamic applications. My
            expertise includes HTML, CSS, JavaScript, TypeScript, React.js, and
            Next.js, enabling me to create robust and user-friendly websites. In
            academic writing, I simplify complex topics into clear, impactful
            content, bridging the gap between research and understanding.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
