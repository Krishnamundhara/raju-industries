interface GoogleQRCodeProps {
  size?: 'small' | 'medium' | 'large';
  showBorder?: boolean;
}

const GoogleQRCode: React.FC<GoogleQRCodeProps> = ({ size = 'medium', showBorder = true }) => {
  const sizeClasses = {
    small: 'w-48 h-auto',
    medium: 'w-80 h-auto',
    large: 'w-96 h-auto'
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <a 
        href="https://www.google.co.in/search?utm_medium=noren&utm_source=gbp&utm_campaign=2025&q=RAJU+INDUSTRIES&ludocid=5024192388335438303&lsig=AB86z5W2I6kRqKczCWSKJCcZaGCp#ebo=0"
        target="_blank" 
        rel="noopener noreferrer"
        className="group relative hover:scale-105 transition-transform duration-300"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300 animate-gradient"></div>
        <img 
          src="/images/GoogleQR.png"
          alt="Raju Industries on Google"
          className={`relative ${sizeClasses[size]} rounded-lg shadow-lg group-hover:shadow-2xl transition-shadow duration-300 mobile-continuous-glow ${showBorder ? 'border-4 border-white' : ''}`}
        />
      </a>
      <p className="mt-4 text-center text-gray-600 text-sm font-medium">
        {/* <span className="text-blue-600">Google</span> - Check us out */}
      </p>
    </div>
  );
};

export default GoogleQRCode;
