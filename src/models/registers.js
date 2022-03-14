const mongoose = require("mongoose");
//const validator = require("validator");

// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

const employeeSchema = new mongoose.Schema({

      
     email:{
        type: String,
        required: true,
        unique: true
    },
        
    password:{
        type: String,
        required: true,
    }
    
})
//genrating token

/*employeeSchema.methods.generateAuthToken = async function(){
    try {
        console.log(this._id);
        const token = jwt.sign({_id:this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token:token}); 
        await this.save(); //now we saving the token here
        return token;

    } catch (error) {
        res.send(`the error is ${error}`);
        console.log(`the error part is ${error}`);
    }
}*/


//hashing for the password 

/*employeeSchema.pre("save", async function(next){

if(this.isModified("password")){

    //console.log(`the current password is ${this.password}`);
    this.password = await bcrypt.hash(this.password, 10); 
    //console.log(`the current password is ${this.password}`);

    this.confirmpassword = await bcrypt.hash(this.password, 10);
}
      next();
});*/
  


//create colletion( in singular form)

const Collectionofinputs = new mongoose.model("Collectionofinputs", employeeSchema);
module.exports = Collectionofinputs;
