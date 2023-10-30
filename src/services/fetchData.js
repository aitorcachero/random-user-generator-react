export default async function getUsersFetch(num) {
  const URL = `https://randomuser.me/api/?page=3&results=${num}&seed=abc`;
  try {
    const data = await fetch(URL);
    const results = await data.json();
    return results.results;
  } catch (error) {
    console.log(error);
  }
}
