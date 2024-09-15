import Image from 'next/image';
import Link from 'next/link';


const Education = () => {

    return (

        <div className="mt-10">

            <h1 className="text-pink-600 text-5xl text-left font-bold mb-5">My Education</h1>

            <div className="my-10 p-3">

                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-pink-600">
                        <thead className="text-lg font-bold text-background uppercase">
                            <tr>
                                <th scope="col" className="px-6 py-3 bg-pink-600">
                                    Degree College
                                </th>
                                <th scope="col" className="px-6 py-3 bg-pink-600">
                                    Date
                                </th>
                                <th scope="col" className="px-6 py-3 bg-pink-600">
                                    Institution
                                </th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr className="border-b-4 border-background bg-white text-lg">
                                <th scope="row" className="px-6 py-4 font-medium text-background whitespace-nowrap  ">
Typescript                                </th>
                                <td className="px-6 py-4 text-background">
                                    01-2020
                                </td>
                                <td className="px-6 py-4 text-background">
                                    giaic
                                </td>
                            </tr>

                            <tr className="border-b-4 border-background bg-white text-lg">
                                <th scope="row" className="px-6 py-4 font-medium text-background whitespace-nowrap  ">
                                    React.js
                                </th>
                                <td className="px-6 py-4 text-background">
                                    01-2020 
                                </td>
                                <td className="px-6 py-4 text-background">
                                   giaic
                                </td>
                            </tr>

                            {/* <tr className="border-b-4 border-background bg-white text-lg">
                                <th scope="row" className="px-6 py-4 font-medium text-background whitespace-nowrap  ">
                                    Certified Web & Mobile Hybrid App
                                    Development Course
                                </th>
                                <td className="px-6 py-4 text-background">
                                    02-2022 - 09/2022
                                </td>
                                <td className="px-6 py-4 text-background">
                                    UIT University
                                </td>
                            </tr>  */}

                            <tr className="border-b-4 border-background bg-white text-lg">
                                <th scope="row" className="px-6 py-4 font-medium text-background whitespace-nowrap  ">
                                    HTML:CSS:JAVASCRIPT                                </th>
                                <td className="px-6 py-4 text-background">
                                    11/2019 - 01/2020
                                </td>
                                <td className="px-6 py-4 text-background">
                                  GIAIC
                                </td>
                            </tr>

                            <tr className="border-b-4 border-background bg-white text-lg">
                                <th scope="row" className="px-6 py-4 font-medium text-background whitespace-nowrap  ">
                                    COLLEGE
                                </th>
                                <td className="px-6 py-4 text-background">
                                 2024                                </td>
                                <td className="px-6 py-4 text-background">
                                    FIRST YEAR
                                </td>
                            </tr>

                            {/* <tr className="border-b-4 border-background bg-white text-lg">
                                <th scope="row" className="px-6 py-4 font-medium text-background whitespace-nowrap  ">
                                    Intermediate Pre-Engineering
                                </th>
                                <td className="px-6 py-4 text-background">
                                    2014 - 2016
                                </td>
                                <td className="px-6 py-4 text-background">
                                    Degree College
                                </td>
                            </tr> */}

                            <tr className="border-b-4 border-background bg-white text-lg">
                                <th scope="row" className="px-6 py-4 font-medium text-background whitespace-nowrap  ">
                                    Matric
                                </th>
                                <td className="px-6 py-4 text-background">
                                    2023
                                </td>
                                <td className="px-6 py-4 text-background">
                                    Moulana Muhammad Hussain Azad School
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>


            </div>

        </div>
    );
}



export default Education;