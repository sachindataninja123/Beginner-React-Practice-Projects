

const Card = ({ userName, Des="He was the no 1 cricketer in the world!" }) => {
  return (
    <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
      <img
        src="https://images.unsplash.com/photo-1750263100189-04514fcc7a57?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
        alt=""
        className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
      />
      <div className="mt-6 mb-2">
        <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
          Title
        </span>
        <h2 className="text-xl font-semibold tracking-wide">{userName}</h2>
      </div>
      <p className="text-gray-300">{Des}</p>
    </div>
  );
};

export default Card;
