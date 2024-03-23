const student = {
  name: "Ilyas",
  surname: "Khairullin",
  age: 22,
  is_developer: true,
};

function strInObj(string, obj) {
  for (let key in obj) {
    if (key === string) {
      return true;
    }
  }

  return false;
}

console.log(strInObj("is_developer", student));
