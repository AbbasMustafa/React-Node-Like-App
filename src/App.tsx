// Import necessary dependencies from React and your custom components
import { useEffect, useState } from "react";
import Card from "./Card";
import { apiCard } from "./model";

function App() {
  // Initialize a state variable 'cards' using the 'useState' hook
  const [cards, setCards] = useState<apiCard[]>([
    { id: -1, name: "", isLike: 0 },
  ]);

  // Define an asynchronous function 'getCards' to fetch data from a server
  const getCards = async () => {
    try {
      // Send a GET request to "http://localhost:3000/"
      const response = await fetch("http://localhost:3000/");

      // Check if the response status is not OK (e.g., 404 or 500)
      if (!response.ok) {
        console.log("Response is not ok!"); // Log an error message
      }

      // Parse the response data as JSON and update the 'cards' state with it
      const data = await response.json();
      setCards(data);
    } catch (error) {
      console.log("Server Side Error"); // Log an error message if an exception occurs
    }
  };

  // Use the 'useEffect' hook to run the 'getCards' function when the component mounts
  useEffect(() => {
    getCards();
  }, []);

  // Render the component's JSX
  return (
    <div className="flex flex-wrap">
      {/* Map over the 'cards' array and render a 'Card' component for each card */}
      {cards.map((card) => (
        <div key={card.id} className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/4 p-2">
          {/* Spread the 'card' object as props to the 'Card' component */}
          <Card {...card} />
        </div>
      ))}
    </div>
  );
}

// Export the 'App' component as the default export
export default App;
