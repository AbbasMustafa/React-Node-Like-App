// Import necessary dependencies and types
import LikeButton from "./LikeButton"; // Importing the LikeButton component
import { CardProps } from "./model"; // Importing CardProps type from a model file
import { useState } from "react"; // Importing the useState hook from React

const Card = ({ id, name, isLike }: CardProps) => {
  // Initialize a state variable 'newState' and a function 'setNewState' using 'useState'
  const [newState, setNewState] = useState<number>(isLike);

  // Define an asynchronous function 'postLike' to update the like status
  const postLike = async (curState: number) => {
    try {
      // Send a POST request to update the like status for a specific card
      const response = await fetch(`http://localhost:3000/card/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ like: curState }), // Send the updated like status as JSON
      });

      // Check if the response status is not OK (e.g., 404 or 500)
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Parse the response as JSON and log the API response
      const responseApi = await response.json();
      console.log(responseApi);

      // Update the local 'newState' with the new like status
      setNewState(curState);
    } catch (error) {
      console.error("Error:", error); // Log an error message if an exception occurs
    }
  };

  // Define a mapping of like states to background colors
  type ColorMap = {
    [key: number]: string;
  };
  const colorMap: ColorMap = {
    0: "bg-[#F00]", // Red background for a '0' like state
    1: "bg-[#0F0]", // Green background for a '1' like state
  };
  const color = colorMap[newState] || "bg-[#ececec]"; // Set the background color based on 'newState'

  // Render the Card component
  return (
    <>
      <div
        className={`max-w-sm rounded overflow-hidden shadow-lg flex justify-center items-center ${color}`}
      >
        <div className="px-6 py-4 text-center">
          <h1 className="font-bold text-xl mb-2">{name}</h1>
          {/* Render the LikeButton component with appropriate props */}
          <LikeButton
            isLikeApi={isLike}
            onClick={(curState) => postLike(curState)}
            size={50}
          />
        </div>
      </div>
    </>
  );
};

// Export the 'Card' component as the default export
export default Card;
