const student = {
  name: "Ilyas",
  surname: "Khairullin",
  age: 22,
  is_developer: true,
};

function keyInObj(obj) {
  for (let key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      console.log(key);
    }
  }
}

keyInObj(student);