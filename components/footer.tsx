const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
           
            <div>
              <h2 className="text-lg font-semibold">About Blog</h2>
              <p className="mt-2 text-sm text-gray-400">
                Blogify is your daily source for insightful blogs, articles, and opinions on various topics.
              </p>
            </div>
            
            <div>
              <h2 className="text-lg font-semibold">Quick Links</h2>
              <ul className="mt-2 space-y-2 text-sm">
                <li>
                  <a
                    href="/about"
                    className="text-gray-400 hover:text-white transition"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy-policy"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
           
            <div>
              <h2 className="text-lg font-semibold">Follow Us</h2>
              <div className="mt-2 flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500 transition"
                >
                  Facebook
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  Twitter
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-300 transition"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
  
          
          <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Blog. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;