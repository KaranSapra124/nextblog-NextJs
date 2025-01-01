import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="footer-left text-center md:text-left mb-6 md:mb-0">
          <h3 className="text-2xl font-semibold">NextBlog</h3>
          <p className="mt-2">
            Your go-to place for the latest blogs and articles!
          </p>
        </div>
        <div className="footer-links text-center md:text-left mb-6 md:mb-0">
          <ul className="flex justify-center md:justify-start space-x-6">
            <li>
              <a href="/about" className="hover:text-gray-400">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-400">
                Contact
              </a>
            </li>
            <li>
              <a href="/privacy-policy" className="hover:text-gray-400">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-social text-center md:text-left">
          <ul className="flex justify-center md:justify-start space-x-6">
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom text-center mt-6">
        <p>&copy; 2024 NextBlog. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
