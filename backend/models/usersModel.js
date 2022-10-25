const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


const userschema = new mongoose.Schema({
    name: {
        required: [true, "FirstNAme is required"],
        type: String,
    },
    nickName: {
        required: [true, "NickName is required"],
        type: String,
    },
    profilePhoto: {
        type: String,
        default:
            "http://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
    },
    email: {
        type: String,
        required: [true, "Email is required"],
    },
    bio: {
        type: String,
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    postCount: {
        type: Number,
        default: 0,
    },
    isBlocked: {
        type: Boolean,
        default: false,
    },
    isOnline: {
        type: Boolean
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    role: {
        type: String,
        enum: ['Admin', 'Guest', 'Blogger']
    },
    isFollowing: {
        type: Boolean,
        default: false,

    }, 
    isUnFollowing: {
        type: Boolean,
        default: false,
    },
    isAccountVerified: {
        type: Boolean, default: false
    },
    accountVerifiedTOken: String,
    accountVerifiedTOkenTokenExpires: Date,
    viewedBy: {
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            }
        ],
    },
    followers: {
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            }
        ],
    },
    following: {
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            }
        ],
    },
    passwordChangeAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,

    active:{
        type:Boolean,
    }
},{
    toJSON: {
        virtuals: true,
    },
    toObject: {
        virtuals: true,
    },timestamps : true,
});

//Hash password
userschema.pre("save", async function (next){
    const salt = await bcrypt.genSalt(10);
    this.password =await bcrypt.hash(this.password,salt)
    next();
})
//match password
userschema.methods.isPasswordMatched = async function( enteredPassword ){
    return await bcrypt.compare(enteredPassword, this.password)
}

// userschema.methods.generateAuthToken = function(){
//     const token = jwt.sign({_id:this._id},process.env.JWTPRIVATEKEY,{espiresIn:"7days"})
//     return token 
// }

const User = mongoose.model("user",userschema);





module.exports = User