class Flower {


constructor(name,color,BloomSeason,isFragrant){
 this.name=name;
 this.color=color;
 this.BloomSeason=BloomSeason;
 this.isFragrant=true;
}

bloom(){
console.log(`The ${this.name} blooms in ${this.BloomSeason}`);


}
fragrance(){

    
    console.log(`The ${this.name} is Fragrant`);
   
}
colorDisplay(){
    console.log(`The ${this.name} has a Beautiful ${this.color} color`);
 

}


}

let Flowers=new Flower(" Tulip","White","Spring","Fragant");


Flowers.bloom();
Flowers.fragrance();
Flowers.colorDisplay();
