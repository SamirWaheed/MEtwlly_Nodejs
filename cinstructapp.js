function Labtop(brand,model,cpu,gpu,ram,fps,k_board){
    this.brand_Name=brand;
    this.MODEL=model;
    this.CPU=cpu;
    this.GPU=gpu;
    this.Ram=ram;
    this.FPS=fps;
    this.Keyboard=k_board;
    this.labtopData=function(){

        let data= this.brand_Name+" "+this.MODEL+"\n"
        +this.CPU+" "+this.GPU+" "+this.Ram+"\n"
        +this.FPS+" "+this.Keyboard+"\n";
        console.log(data);
    };
}
let mylab=new Labtop("MSI","GF63 Thin 1O UD","core i5-10H"," RTX 3050 ti ","16 G","144 GH","led K-board");
mylab.labtopData();