import { useState } from "react";

function Cust_Details() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    pincode: "",
    address: "",
    mobile1: "",
    mobile2: "",
    totalPrice: "",
    comments: ""
  });

  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white p-6 max-w-lg mx-auto rounded-xl shadow-lg mt-3 mb-4">
      <h2 className="text-xl  font-bold mb-4">Customer Details</h2>
      <form className="space-y-4">
        <input type="text" name="fullName" placeholder="Full Name" className="w-full p-2 border rounded" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" className="w-full p-2 border rounded" onChange={handleChange} />
        <input type="text" name="pincode" placeholder="Pincode" className="w-full p-2 border rounded" onChange={handleChange} />
        <textarea name="address" placeholder="Address" className="w-full p-2 border rounded" onChange={handleChange}></textarea>
        <input type="text" name="mobile1" placeholder="Mobile No 1" className="w-full p-2 border rounded" onChange={handleChange} />
        <input type="text" name="mobile2" placeholder="Mobile No 2" className="w-full p-2 border rounded" onChange={handleChange} />
        <input type="text" name="totalPrice" placeholder="Total Price" className="w-full p-2 border rounded" onChange={handleChange} />
        <textarea name="comments" placeholder="Comments" className="w-full p-2 border rounded" onChange={handleChange}></textarea>
        <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">Submit</button>
      </form>
    </div>
  );
}

export default Cust_Details;
