import { FaQuoteLeft } from "react-icons/fa";

const ReviewCard = ({ data }) => {
  const { review, userName, user_photoURL } = data;
  return (
    <div className="card  md:w-96 bg-base-100 shadow-xl rounded-2xl p-6">
      {/* Quote Icon */}
      <FaQuoteLeft className="text-4xl text-teal-300 mb-4" />

      {/* Review Text */}
      <p className="text-gray-500 leading-relaxed border-b-2 border-dashed border-teal-200 pb-4">
        {review}
      </p>

      {/* User Info */}
      <div className="flex items-center gap-4 mt-4">
        <div className="w-12 h-12 rounded-full ">
          <img src={user_photoURL} alt="" />
        </div>

        <div>
          <h3 className="font-bold text-teal-900 text-lg">{userName}</h3>
          <p className="text-gray-500 text-sm">Senior Product Designer</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
