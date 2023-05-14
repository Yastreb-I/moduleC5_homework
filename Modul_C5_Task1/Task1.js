const xmlString = 
`<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const parser = new DOMParser();
const xmlDOM = parser.parseFromString(xmlString, "text/xml");
const listTag = xmlDOM.querySelector("list");
const studentTag = listTag.querySelectorAll("student");
const aboutStudent = [];

for (i = 0; i < studentTag.length; i++) {
  
  const nameTag = studentTag[i].querySelector("name");
  const firstTag = nameTag.querySelector("first");
  const secondTag = nameTag.querySelector("second");
  const ageTag = studentTag[i].querySelector("age");
  const profTag = studentTag[i].querySelector("prof");
  const langAttreb = nameTag.getAttribute("lang");
    
  aboutStudent.push({
    name: firstTag.textContent + " " + secondTag.textContent,
    age:  Number(ageTag.textContent),
    prof: profTag.textContent,
    lang: langAttreb
     });
 
}

const result = {
  list: aboutStudent
};

console.log(result);
