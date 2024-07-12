import React, { useState } from 'react'
import DataFetcher from './DataFetcher';
import Lottie, { useLottie } from "lottie-react";
import hero from "../assets/Animation - 1715150557582.json";
import Pdata from "../Data/base.json"

function Hero() {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        companyName: '',
        category: '',
        top: '',
        minPrice: 0,
        maxPrice: 1000
    });
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleSubmit = (event) => {

        event.preventDefault();
        console.log(formData);

    };
    const apiUrl = "";
    return (
        <div>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Build Good</span>
                    </a>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="/product" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Product</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className='flex mt-10 p-5'>
                <div className='flex justify-center w-1/2'>
                    {!submitted ? (
                        <form onSubmit={handleSubmit} className="space-y-4 w-[80%]">
                            <div>
                                <label htmlFor="companyName" className="block border text-sm font-medium text-gray-700">Company Name</label>
                                <select
                                    id="companyName"
                                    name="companyName"
                                    value={formData.companyName}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full pl-3 pr-10 py-2 border text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                                >
                                    <option value="">Select a company</option>
                                    <option value="AMZ">AMZ</option>
                                    <option value="FLP">FLP</option>
                                    <option value="SNP">SNP</option>
                                    <option value="MYN">MYN</option>
                                    <option value="AZO">AZO</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                                <select
                                    id="category"
                                    name="category"
                                    value={formData.category}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                                >
                                    <option value="">Select a category</option>
                                    <option value="Phone">Phone</option>
                                    <option value="Pendrive">Pendrive</option>
                                    <option value="Remote">Remote</option>
                                    <option value="Speaker">Speaker</option>
                                    <option value="Headset">Headset</option>
                                    <option value="Laptop">Laptop</option>
                                    <option value="PC">PC</option>
                                    <option value="Computer">Computer</option>
                                    <option value="TV">TV</option>
                                    <option value="Earphone">Earphone</option>
                                    <option value="Tablet">Tablet</option>
                                    <option value="Charger">Charger</option>
                                    <option value="Mouse">Mouse</option>
                                    <option value="Keypad">Keypad</option>
                                    <option value="Bluetooth">Bluetooth</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="top" className="block border text-sm font-medium text-gray-700">Top Products</label>
                                <input
                                    type="number"
                                    id="top"
                                    name="top"
                                    value={formData.top}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                                />
                            </div>
                            <div>
                                <label htmlFor="minPrice" className="block border text-sm font-medium text-gray-700">Min Price</label>
                                <input
                                    type="range"
                                    id="minPrice"
                                    name="minPrice"
                                    min="0"
                                    max="1000"
                                    value={formData.minPrice}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                />
                                <span className="text-gray-700">${formData.minPrice}</span>
                            </div>
                            <div>
                                <label htmlFor="maxPrice" className="block border text-sm font-medium text-gray-700">Max Price</label>
                                <input
                                    type="range"
                                    id="maxPrice"
                                    name="maxPrice"
                                    min="0"
                                    max="1000"
                                    value={formData.maxPrice}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                />
                                <span className="text-gray-700">${formData.maxPrice}</span>
                            </div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Submit
                            </button>
                        </form>
                    ) : (
                        <DataFetcher url={apiUrl} />
                    )}
                </div>

            </div>
            <div className='h-72 m-5 flex gap-2'>
                {Pdata.map((data) => (
                    <div class="w-1/6 max-w-sm p-6 bg-white border border-gray-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href={`/${data.productName}`}>
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-200 dark:text-white">{data.productName}</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Price: {data.price}</p>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Rating: {data.rating}</p>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Discount: {data.discount}</p>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Availability: {data.availability}</p>
                        <a href={`/${data.productName}`} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                            Read more
                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>

                ))}
            </div>
        </div>
    );
}

export default Hero