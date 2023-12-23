import HomeHeader from "@/components/HomeHeader";
import Footer from "@/components/footer";
import { db } from "@/utils/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    company: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const isFormValid = () => {
    for (const key in formData) {
      if (formData[key].trim() === "") {
        return false;
      }
    }
    return true;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isFormValid()) {
      try {
        console.log(formData);
        const docRef = await addDoc(collection(db, "userInfo"), formData);
        console.log("Document written with ID: ", docRef.id);
        setIsFormSubmitted(true);
        setFormData({
          name: "",
          email: "",
          mobile: "",
          company: "",
          message: "",
        });
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      // You can proceed with additional actions, such as submitting to a server.
    } else {
      alert("Please fill in all fields.");
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <>
      <HomeHeader
        hide
        header="!bg-[#fff] lg:border-b-2"
        logo="/assets/colorLogo.svg"
        menu="/assets/colorMenu.svg"
        heading="!text-[#462D81]"
      />
      <main
        style={{
          fontFamily: "Helvetica",
        }}
        className="relative z-10 bg-white pt-[180px] pb-20"
      >
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-10 justify-between">
            <div>
              <p className="inline-block font-helvetica border rounded-md !border-[#000] px-4 py-2">
                {" "}
                SAY HI
              </p>
              <p className="text-[60px] leading-20 lg:text-[8rem] lg:leading-[120px] mt-6">
                NO NEED <br /> TO BE SHY
              </p>
            </div>

            <div className="flex-1">
              <div
                className="border !border-black rounded-3xl p-5 lg:p-16"
                style={{ borderColor: "#000 !important" }}
              >
                <p className="font-helvetica uppercase text-[24px] font-[400]">
                  Contact Form
                </p>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="border-b !border-black block w-full py-3"
                    value={formData.name}
                    name="name"
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    placeholder="Email"
                    className="border-b !border-black block  w-full py-3"
                    value={formData.email}
                    name="email"
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="border-b !border-black block  w-full py-3"
                    value={formData.mobile}
                    name="mobile"
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="border-b !border-black block  w-full py-3"
                    value={formData.company}
                    onChange={handleChange}
                    name="company"
                  />
                  <input
                    type="text"
                    placeholder="Message"
                    className="border-b !border-black block  w-full py-3"
                    value={formData.message}
                    onChange={handleChange}
                    name="message"
                  />
                  <div className="flex justify-center w-full">
                    {isFormSubmitted ? (
                      <p className="text-[#00A300] mt-4">
                        Form submitted successfully
                      </p>
                    ) : (
                      <button
                        className="bg-black text-white rounded-lg px-6 py-2 mt-4 "
                        type="submit"
                      >
                        SUBMIT
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-10 lg:items-center border border-black rounded-[40px] px-8 py-6 mt-12">
            <p>
              WE HAVE TWO GOOD EARS AND ARE WAITING TO HEAR FROM YOU. <br />
              <br />
              TO PUSH YOUR BRAND
            </p>
            <div className="h-[150px] w-[1.5px] bg-black hidden lg:block" />

            <div>
              <p>SOCIAL</p>
              <div className="flex gap-4">
                <p className="inline-block font-helvetica border rounded-md !border-[#000] px-4 py-2">
                  FB
                </p>
                <p className="inline-block font-helvetica border rounded-md !border-[#000] px-4 py-2">
                  IG
                </p>
                <p className="inline-block font-helvetica border rounded-md !border-[#000] px-4 py-2">
                  LI
                </p>
              </div>
            </div>
            <div className="h-[150px] w-[1.5px] bg-black hidden lg:block" />

            <div>
              <p>LOCATION</p>
              <p>
                18th Floor, No. 2182, 2nd Block,Trellis South, NSK Salai,Arcot
                Road, Vadapalani, Chennai, Chennai,Tamil Nadu, 600026
              </p>
            </div>
            <div className="h-[150px] w-[1px] bg-black hidden lg:block" />

            <div>
              <p>MAIL</p>
              <p>pushandpullofficial@gmail.com</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Index;
