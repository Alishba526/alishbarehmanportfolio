import Image from "next/image";
import Link from "next/link";
import certificate from '../../../my-work/public/image/certificate.jpg';
import certificate2 from '../../../my-work/public/image/certificate2.jpg';
import certificate3 from '../../../my-work/public/image/certificate3.jpg';
import images4 from '../../../my-work/public/image/images4.jpg';
import images5 from '../../../my-work/public/image/images5.jpg';
import nextjs from '../../../my-work/public/image/nextjs6.jpg';





const Certifications = () => {
  return (
    <div className="mt-10">
      <h1 className="text-white text-5xl text-left font-bold mb-5">
        My Certifications
      </h1>

      <div className="my-10 p-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-4 border-b-4 border-pink-600">
            <Image
              className="w-full h-40 object-cover rounded-md mb-4"
              src={certificate}
              width={500}
              height={500}
              alt="certi"
            />
          </div>

          <div className="bg-white rounded-lg shadow-md p-4 border-b-4 border-pink-600">
            <Image
              className="w-full h-40 object-cover rounded-md mb-4"
              src={certificate2}
              width={500}
              height={500}
              alt="c"
            />
          </div>

          <div className="bg-white rounded-lg shadow-md p-4 border-b-4 border-pink-600">
            <Image
              className="w-full h-40 object-cover rounded-md mb-4"
            src={certificate3}
              width={500}
              height={500}
              alt="c"
            />
          </div>

          <div className="bg-white rounded-lg shadow-md p-4 border-b-4 border-pink-600">
            <Image
              className="w-full h-40 object-cover rounded-md mb-4"
              src={images4}
              width={500}
              height={500}
              alt="c"
            />
          </div>

          <div className="bg-white rounded-lg shadow-md p-4 border-b-4 border-pink-600">
            <Image
              className="w-full h-40 object-cover rounded-md mb-4"
            src={images5}
              width={500}
              height={500}
              alt="c"
            />
          </div>

          <div className="bg-white rounded-lg shadow-md p-4 border-b-4 border-pink-600">
            <Image
              className="w-full h-40 object-cover rounded-md mb-4"
           src={nextjs}
              width={500}
              height={500}
              alt="c"
            />
          </div>
{/* 
          // <div className="bg-white rounded-lg shadow-md p-4 border-b-4 border-pink-600">
            <Image
              className="w-full h-40 object-cover rounded-md mb-4"
              src="/adv-node.png"
              width={500}
              height={500}
              alt="c"
            />
          </div>

          <div className="bg-white rounded-lg shadow-md p-4 border-b-4 border-pink-600">
            <Image
              className="w-full h-40 object-cover rounded-md mb-4"
              src="/php.png"
              width={500}
              height={500}
              alt="c"
            />
          </div>

          <div className="bg-white rounded-lg shadow-md p-4 border-b-4 border-pink-600">
            <Image
              className="w-full h-40 object-cover rounded-md mb-4"
              src="/php-adv.png"
              width={500}
              height={500}
              alt="c"
            />
          </div>

          <div className="bg-white rounded-lg shadow-md p-4 border-b-4 border-pink-600">
            <Image
              className="w-full h-40 object-cover rounded-md mb-4"
              src="/docker.png"
              width={500}
              height={500}
              alt="c"
            />
          </div>

          <div className="bg-white rounded-lg shadow-md p-4 border-b-4 border-pink-600">
            <Image
              className="w-full h-40 object-cover rounded-md mb-4"
              src="/python.png"
              width={500}
              height={500}
              alt="c"
            />
          </div>

          <div className="bg-white rounded-lg shadow-md p-4 border-b-4 border-pink-600">
            <Image
              className="w-full h-40 object-cover rounded-md mb-4"
              src="/mysql-cli.png"
              width={500}
              height={500}
              alt="c"
            />
          </div> */}
        </div>

        <p className="text-2xl text-white text-center mt-5 p-4">
          These are a few of my certifications. For a comprehensive list, please
          visit my{" "}
          <Link
            href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAADdIb4wBlt_RBNxbedA4QuB6QJvF5Slv0_g&keywords=alishba%20rehman%20qureshi&origin=RICH_QUERY_TYPEAHEAD_HISTORY&position=0&searchId=bbf2daa5-e85d-4329-af55-63f602b5d03c&sid=b6Q&spellCorrectionEnabled=tru"
            className="font-medium text-blue-600 underline hover:text-blue-700 hover:no-underline"
          >
            LinkedIn profile
          </Link>{" "}
          where you can find more details.
        </p>
      </div>
    </div>
  );
}; 

export default Certifications;
