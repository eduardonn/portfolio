import { Component } from "solid-js";

const Footer: Component = () => {
  return (
    <div class='flex flex-col justify-between bg-black text-white p-5'>
      <div class='flex flex-col gap-1 mb-5'>
        <h1 class='text-gray-300 mb-2'>Contacts</h1>
        <a 
          class='w-fit hover:text-orange-600'
          href='https://github.com/eduardonn'
          target='_blank'>
            Github
        </a>
        <a 
          class='w-fit hover:text-orange-600'
          href='https://www.linkedin.com/in/eduardo-franke-3601a0263'
          target='_blank'>
            Linkedin
        </a>
      </div>
      <p class='text-sm'>Created by Eduardo Franke · 2023</p>
    </div>
  );
}

export default Footer;