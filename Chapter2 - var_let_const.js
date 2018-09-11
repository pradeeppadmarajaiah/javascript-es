// var : Can be re-assigned. Cannot start with letters. Accessed globally.
var employee;
console.log('Employee Name is : ' + employee);
name = "Deepu";

console.log(name);
name = "Hitesh"
console.log(name);

//let :  Can be re-assigned. Cannot start with letters. Accessed with-in scope.
try {
    {
        let age = 30;
        console.log("With in age block : " + age);
    }
    //Throws error : Outside the block
    // console.log("Age is : " + age);


    //const :  Cant be re-assigned. Cannot start with letters. Accessed with-in scope.
    {
        //Throws error: it has to be intialized
        //const ageConst = 30;

        const ageConst = 30;
        console.log("With in const block : " + ageConst);

        const chandan = { name: "chandan", skills: "Java" };
        chandan.name = "Pradeep";
        chandan.company = "IBM";
        console.log(chandan);


        // chandan={name:"Raj",skills:"C"};//Cant reassign
        //ageConst=70;//Cant reassign
    }

    //console.log("age_const is : " + age_const); //Outside the block 

} catch (error) {
    console.log(error);
}
