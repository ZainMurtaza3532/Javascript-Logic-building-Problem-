function calculateArea(length, width){
    if(length <=0 || width <=0){
        console.log("Length and Width must be positive numbers.");
        return;
    }
    const area = length * width;
    console.log("Calculate the Area", area)
}
calculateArea(5,10);
calculateArea(7,3);
calculateArea(12,4);