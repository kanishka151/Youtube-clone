export const API_KEY='AIzaSyC2fR1DKGV3-yzp2mMtnfk7I2XXJe3r_s4';

export const value_convertor=(value)=>{
    if(value>=1000000){
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000){
        return Math.floor(value/1000)+"K";
    }
    else{
        return value;
    }
}