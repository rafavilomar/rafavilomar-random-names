const names = [
  "Ana",
  'Robert',
  "David",
  "Yessica",
  "Rafael",
  "Daniel",
  "Caroline"
]

const randomNm= () => {
  const name = names[Math.floor(Math.random() * names.length)]
  console.log(name);
}
module.exports = {randomNm};