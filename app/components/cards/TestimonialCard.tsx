interface TestimonialCardProps {
  text: string;
  author: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ text, author }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <p className="text-gray-600">
      "{text}" - {author}
    </p>
  </div>
);

export default TestimonialCard;
