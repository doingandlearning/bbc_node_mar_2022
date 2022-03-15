function init(type) {
  let id = 0;
  return (name) => {
    id += 1;
    return { id: `${type}-${id}`, type, name };
  };
}

// const adminGenerator = init("admin");
// // id = 0
// // (name) => {id, type: "admin", name: ____ }

// const editorGenerator = init("editor");
// // id = 0
// // (name) => {id, type: "editor", name: ____ }

// const userGenerator = init("user");
// // id = 0
// // (name) => {id, type: "user", name: ____ }

// const ollie = adminGenerator("Ollie");
// const jack = adminGenerator("Jack");

// const fabrizio = editorGenerator("Fabrizio");
// const faith = editorGenerator("Faith");

// const abdu = userGenerator("Abdu");

// console.log(ollie);
// console.log(jack);
// console.log(fabrizio);
// console.log(faith);
// console.log(abdu);

function add(a, b) {
  return a + b;
}

const addFive = (num) => add(5, num);

console.log(addFive(5));
