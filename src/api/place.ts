export const savePlace = (
  placeId: string,
  city: string,
  description: string,
  tags: Array<string>
): void => {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      google_place_id: placeId,
      city: city,
      description: description,
      tags: tags,
    }),
  };

  fetch(`${process.env.REACT_APP_API_URL}/place`, options)
    .then((response) => {
      if (response.ok) return response.json;
      else console.log(response);
    })
    .then((data) => console.log("Hello"))
    .catch((err) => console.log(err));
};
