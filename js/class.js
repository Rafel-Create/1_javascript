class Car{ //주의사항 : 인수는 파라미터 항목에 맞는 수로 사용. 
// 컨스트럭터에서 name, brand, year로 파라미터 항목이 3개니까 밑에 new car() 의 괄호 안도 3개가 있어야 한다는 뜻
    constructor(name, brand, year){
        this.name = name;
        this.brand = brand;
        this.year = year;
    }
    age(x){ //시간을 불러오는 게 전재조건이다.
        return x - this.year; //this는 이 age 메서드를 포함하고 있는 객체 자신을 가리킵니다. 
    }
}
const myCar = new Car("자전거", "3000리", 2000);
const yourCar = new Car("그냥 걸어가", "", 2002);

//현재시간 구하기
const date = new Date(); //시간은 참조할 뿐 가공할 수 없으므로 const를 썼습니다.
let year = date.getFullYear(); //변수 year에 현재 년도를 대입  

document.getElementById("in").innerHTML = 
"내가 산 차는 " + myCar.age(year) + "년도에 출고됐어요.";
