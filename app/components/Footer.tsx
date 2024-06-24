const Footer: React.FC = () => (
  <footer className="bg-white shadow mt-12">
    <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
      <p className="text-darkGray text-sm">
        &copy; 2024 FitTrack. All rights reserved.
      </p>
      <div className="flex space-x-4">
        <a href="#" className="text-primary hover:text-secondary">
          Facebook
        </a>
        <a href="#" className="text-primary hover:text-secondary">
          Twitter
        </a>
        <a href="#" className="text-primary hover:text-secondary">
          Instagram
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
