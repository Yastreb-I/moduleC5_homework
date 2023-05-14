const jsonString = 
`{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;

const parser = JSON.parse(jsonString, function(k, v) {
  value = v
  if (!isNaN(v)) {
        value = v*1
     }
  return value
});
console.log(parser)