import { savePlace } from "./api/place";

const App = () => {
  const placeId: string = "ChIJXRw7Yb2dX0YRSQ88gU2Kuug";
  const city: string = "Stockholm";
  const description: string = "Descriptive text mentioning highlights goes here";
  const tags: Array<string> = ["Casual"]; // make this an enum

  return (
    <>
      <p>Add a favoreat</p>
      <button onClick={() => savePlace(placeId, city, description, tags)}>Save to database</button>
    </>
  );
};

export default App;
