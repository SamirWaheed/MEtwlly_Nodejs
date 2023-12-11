let Student={};
Student.firstnmae="Samir";
Student.Midname="Waheed";
Student.lastname="Samir";
Student.phone=+21141532178;
Student.adress="El_wasta";
Student.gender="male";
Student.StudentInfo=function(){
    let info=
     this.firstnmae
     +" "
     +this.midname
     +" "
     +this.lastname+"\n"
     +this.adress+"\n"
     +this.gender+"\n"
     +this.phone+"\n"
     +"____________________";
    return info;
   
};

if ( Student.firstnmae==="Samir" &&  Student.Midname==="Waheed" &&  Student.lastname==="Samir") {
    console.log( Student.StudentInfo());

}
else{
    console.log("error");
}
//bracket notation
Student["test"]="test";
console.log( Student["test"]);