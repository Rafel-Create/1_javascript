let text = '{"emp":[' + 
'{"firstName":"young", "lastName":"hwang"}]}'
// JSON 객체 내에서 키-값 쌍은 **하나의 콜론(:)**으로 구분되어야 하고, 각 키-값 쌍은 **쉼표(,)**로 구분됩니다.

const obj =JSON.parse(text);
//json을 자바스크립트 형식에 맞게 파싱
document.getElementById("json").innerHTML = 
obj.emp[0].firstName + " " + obj.emp[0].lastName;