// Import necessary dependencies, icons, and types
import {
  AiOutlineLike,
  AiFillLike,
  AiOutlineDislike,
  AiFillDislike,
} from "react-icons/ai"; // Import like and dislike icons from the react-icons library
import LikeProps from "./model"; // Import LikeProps type from a model file
import { useState } from "react"; // Import the useState hook from React

const LikeButton = ({ onClick, size = 24, isLikeApi }: LikeProps) => {
  // Initialize a state variable 'isLike' and a function 'setIsLike' using 'useState'
  const [isLike, setIsLike] = useState<number>(isLikeApi);

  // Define a function 'toggle' to handle the click event on like or dislike buttons
  const toggle = (curState: number) => {
    onClick(curState); // Call the 'onClick' function with the current like state
    setIsLike(curState); // Update the local 'isLike' state with the new like state
  };

  // Define a function 'renderLikeIcon' to render the like icon based on the 'isLike' state
  const renderLikeIcon = () => {
    if (isLike === 1) {
      return <AiFillLike size={size} />; // Render a filled like icon when 'isLike' is 1
    } else {
      return (
        <AiOutlineLike
          className="cursor-pointer"
          aria-label
          size={size}
          onClick={() => toggle(1)} // Call 'toggle' with a like state of 1 when clicked
        />
      );
    }
  };

  // Define a function 'renderDislikeIcon' to render the dislike icon based on the 'isLike' state
  const renderDislikeIcon = () => {
    if (isLike === 0) {
      return <AiFillDislike size={size} />; // Render a filled dislike icon when 'isLike' is 0
    } else {
      return (
        <AiOutlineDislike
          className="cursor-pointer"
          aria-label
          size={size}
          onClick={() => toggle(0)} // Call 'toggle' with a like state of 0 when clicked
        />
      );
    }
  };

  // Render the LikeButton component with like and dislike icons
  return (
    <div className="flex">
      {renderLikeIcon()} {/* Render the like icon */}
      {renderDislikeIcon()} {/* Render the dislike icon */}
    </div>
  );
};

// Export the 'LikeButton' component as the default export
export default LikeButton;
