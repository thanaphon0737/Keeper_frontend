function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer className="bg-white text-gray-700 p-4 col-span-2 text-center border-t border-gray-700 text-xs ">
      <p>
        © {date} Thanaphon thanusan. All rights reserved. |
        
        | Github:{" "}
        <a
          href="https://github.com/thanaphon0737"
          className="underline hover:text-white-400"
          target="_blank"
        >
          thanaphon0737
        </a>
      </p>
      <p class="mt-2">✨Built with passion in Lampang, Thailand.✨</p>
    </footer>
  );
}
export default Footer;
