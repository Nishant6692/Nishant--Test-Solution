const userData = async () => {
  try {
    let respone = await fetch("https://jsonplaceholder.typicode.com/posts");
    respone = await respone.json();

    let firstfivePostTitle = await respone
      .filter((value, key) => key < 5)
      .map((value) => value.title);

    console.log(firstfivePostTitle);
  } catch (error) {
    console.log("error :", error);
  }
};
userData();
