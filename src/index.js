const messages = [
  "Ana",
  'Robert',
  "David",
  "Yessica",
  "Rafael",
  "Daniel",
  "Caroline"
]

const randomMsg= () => {
  const message = messages[Math.floor(Math.random() * messages.length)]
  console.log(message);
}
module.exports = {randomMsg};