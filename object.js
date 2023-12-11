function student(F_name,M_name,L_name,age,GPA,phone_num){
let StudentInfo={
    first_name: F_name,
    Mid_name:M_name,
    Last_nmae:L_name,
    Age:age,
    S_GPA:GPA,
    Phone:phone_num,

    printinfo : function(){
        let info = 
        "------------------------" +"\n"
    
        +this.first_name+" "+"\n"
        + this.Mid_name+" "+"\n"
        +this.Last_nmae+" "+"\n"
        +this.Age+" "+"\n"
        +this.S_GPA+" "+"\n"
        +this.Phone+" "+"\n"
        +"------------------------";
        console.log(info);
    }

};
return StudentInfo;


}
let SAMIR=student("samir","waheed","samir",22,3,+21141532178);
SAMIR.printinfo();


function cars(model,colore,power){
let car ={

    Model_name:model,
    COlore:colore,
    Power:power,
    carinfo: function(){
        let CAR_info=
        this.COlore+" "+"\n"
        +this.Model_name+" "+"\n"
        +this.Power+" "+"\n"
        +"------_______------";
        console.log(CAR_info);

    }

};
return car;
}
let kia= cars("cerato","black",130);
kia.carinfo();
