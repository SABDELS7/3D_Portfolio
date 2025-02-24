const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2  hover:text-white">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon">
          <a href="https://github.com/SABDELS7" target="_blank" rel="noopener noreferrer">
            <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2 ml-3" />
          </a>
        </div>
        <div className="social-icon">
          <a href="https://linkedin.com/in/abderrahmane-salmi-a1b329238" target="_blank" rel="noopener noreferrer">
            <img src="/assets/linkedin.svg" alt="linkedin" className="w-1/2 h-1/2 ml-3" />
          </a>
        </div>
        <div className="social-icon">
          <a href="https://twitter.com/S_Abdels_7" target="_blank" rel="noopener noreferrer">
            <img src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2 ml-3" />
          </a>
        </div>
        <div className="social-icon">
          <a href="https://instagram.com/s.abdels7" target="_blank" rel="noopener noreferrer">
            <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2 ml-3" />
          </a>
        </div>
      </div>


      <p className="text-white-500  hover:text-white">© {new Date().getFullYear()} Abderrahmane Salmi. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
