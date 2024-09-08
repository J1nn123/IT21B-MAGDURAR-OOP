class Myinfo{

constructor(name,lastName,gender,hobby,height){
this.name=name;
this.lastName=lastName;
this.gender=gender;
this.hobby=hobby;
this.height=height;

}

Mydetails(){
console.log(`MY name is: ${this.name}`);
console.log(`My Last name is: ${this.lastName}`);
console.log (`My Gender is:  ${this.gender}`);
console.log (`My Hobby is:  ${this.hobby}`);
console.log (`My height is:  ${this.height}`);

}

}
const Myinformation = new Myinfo(`Roland`, `Magdura`,`M`,`drawing`,`5.7cm`);

Myinformation.Mydetails();