require("dotenv").config();
const express=require("express");
const helmet=require("helmet");
const morgan=require("morgan");
const cors=require("cors");
const mongoSanitize=require("express-mongo-sanitize");
const connectDB=require("./config/db");

const app=express();
connectDB();

app.use(helmet());
app.use(morgan("dev"));
app.use(cors({origin: process.env.CORS_ORIGIN}));
app.use(express.json({limit:"10kb"}));
app.use(mongoSanitize());


// Routes
app.use("/api/auth",require("./routes/auth"));
app.use("/api/admin",require("./routes/admin"));
app.use("/api/content",require("./routes/content"));
app.use("/api/pricing",require("./routes/pricing"));
app.use("/api/contact",require("./routes/contact"));

//Error handler
app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(err.status|| 500).json({error:err.message|| "Server error"});
});

const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));

