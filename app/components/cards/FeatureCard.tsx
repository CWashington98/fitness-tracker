interface FeatureCardProps {
    image: string;
    title: string;
    description: string;
  }
  
  const FeatureCard: React.FC<FeatureCardProps> = ({ image, title, description }) => (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
      <img src={image} alt={title} className="h-48 w-48 object-cover rounded-full" />
      <h2 className="mt-4 text-2xl font-bold text-gray-900">{title}</h2>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
  
  export default FeatureCard;
  