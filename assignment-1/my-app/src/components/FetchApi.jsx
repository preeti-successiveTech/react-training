export default async function FetchApi() {
  let res = 'Loading...';

  try {
    const fetchData = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    ).then((response) => response.json());

    res = JSON.stringify(fetchData,null,1); // pretty print JSON
    console.log("Fetched data:", fetchData);
  } catch (err) {
    console.log("error", err);
    res = 'Error loading data';
  }

  return (
    <>
      <h1>User Data</h1>
      <pre>{res}</pre>
    </>
  );
}
