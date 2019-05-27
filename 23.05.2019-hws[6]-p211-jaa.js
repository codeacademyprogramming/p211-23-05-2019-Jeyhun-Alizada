// Home Work #6 Start

const forFindArray = [
  "siemtete@box.az",
  "siemtete@gmail.com",
  "jeyhunaa@code.edu.az",
  "jeyhun1313@gmail.com",
  "jeyhunaa@code.edu.az",
  "emiljf@code.edu.az"
];

const firstEduaz = forFindArray.find(function(email, i) {
  return email.includes("code.edu.az");
});

console.log(firstEduaz);



// Home Work #6 End