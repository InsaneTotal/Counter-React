const peticion = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users/5"
  );
  return data;
};

const data = peticion().then(console.log);
