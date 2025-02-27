import mongoose from "mongoose";
export async function connectDB() {
    try {
      await mongoose.connect(
        "mongodb+srv://bhureerohan:RZuBgMJnDdkWsyZK@cluster0.aquzy.mongodb.net/toshniwal-organics"
      );
      console.log("DB Connected");
    } catch (err) {
      console.log(err);
    }
  }