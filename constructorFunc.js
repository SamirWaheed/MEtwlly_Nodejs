function Bock(name,type,author,Price,year){

    this.Name=name;
    this.Type=type;
    this.authorName=author;
    this.Price=Price;
    this.Year=year;

     this.bockDetails=function (){
        let details= "The name of this bock is "+ this.Name+"\n"
                    +"and it is "+this.Type+"for author"+this.authorName+"\n"
                    +"this price "+this.Price +"   "+"Year of Publication"+"   "+this.Year;
        console.log(details);
    };
}
exports.bock=Bock;
