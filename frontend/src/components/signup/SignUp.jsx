import React from "react";

const SignUp = () => {
    return(
        <div class="wrapper">
            <div class="flex justify-center mt-20 mb-10">
                <h2 class="inter font-bold text-[45px]">Tell us more about <span className="hover:text-blue">yourself</span></h2>
            </div>
            
            <div class="flex flex-nowrap justify-center items-center mb-5">
                <p class="mr-5 text-[20px]">🧑🏻‍💻 Are you a freelancer?</p>
                <input type="checkbox" />
            </div>

            <div class="flex flex-nowrap justify-center items-center">
                <p class="mr-5 text-[20px]">💼 Are you a business?</p>
                <input type="checkbox" />
            </div>
            <div class="flex flex-wrap justify-center items-center mt-10 h-full">
                <div class="flex flex-col w-1/4">
                    <input class="mb-5 focus:outline-none bg-gray-200 p-3 rounded-lg" type="text" placeholder="Name" /> 
                    <input class="mb-5 focus:outline-none bg-gray-200 p-3 rounded-lg" type="text" placeholder="Location" /> 
                    <input class="mb-5 focus:outline-none bg-gray-200 pb-44 px-3 rounded-lg h-60" type="text" placeholder="Services offered" /> 
                </div>
            </div>
            
            <div class="flex justify-center items-center mt-5">
                    <button class="bg-blue w-1/6 rounded-lg p-2" type="button"  onclick="handleClick()">
                        <p class="text-neutral-50 font-bold">Next</p>
                    </button>
            </div>
        </div>
    )
}

export default SignUp 