import mongoose , {Schema} from "mongoose";

const startupSchema = new Schema({
    StartupName : {
        type : String,
        require : [true , "Please Enter name of your stratup"],
        index : true
    },
    StartupName : {
        type : String,
        require : [true , "Please Enter industry of your stratup"],
        index : true
    },
    SubVertical : {
        type : String,
    },
    CityLocation : {
        type : String,
    },
    InvestorsName : {
        type : String,
    },
    InvestmentType : {
        type : String,
    },
    AmountInUSD : {
        type : String,
    },  
    remarks : {
        type : String,
    },
    date : {
        type : Date,
        default : Date.now
    }
},{
    timestamps : true
});

export const Startup = mongoose.model("Startup" , startupSchema);