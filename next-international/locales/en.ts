const fetchDictionary = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const json = await res.json();

  return { default: json };
};

export default fetchDictionary;
