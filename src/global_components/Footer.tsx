import { Component } from "solid-js";

const Footer: Component = () => {
  return (
    <footer class='flex flex-col justify-between mt-auto bg-black text-white p-5'>
      <section class='flex flex-col gap-1 mb-5'>
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
        <span>Email: 
          <a 
            class='w-fit hover:text-orange-600'
            href='mailto:eduardof1999@hotmail.com'
            target='_blank'>
              eduardof1999@hotmail.com
          </a>
        </span>
      </section>
      <p class='text-sm'>Created by Eduardo Franke · 2023</p>
    </footer>
  );
}

export default Footer;