import mongoose,{Schema} from "mongoose";
const reportSchema=new Schema(
    {
        reportId:{
            type:String
        },
        userId:{
            type:Schema.Types.ObjectId,
            ref:"User",
            required:true
        },
        images:[],
        materialsImpact:[{
            carbonFootprint:{
                type:String,
            },
            waterUsage:{
                type:String,
            },
            recyclable:{
                type:Boolean
            },
            renewable:{
                type:Boolean
            }
        }],
        sustainabilityScore:{
            type:Number
        },
        recommendations:[String]
    },
    {
        timestamps:true
    }
)

export const Report=new mongoose.model("Report",reportSchema);