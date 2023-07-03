import React, { useState } from "react";
import img from "../assets/brandLogo.jpg";
import toast from "react-hot-toast";
// form submit
const Review = () => {
  const submitHandler = (e) => {
    e.preventDefault();

    toast.success("Thanks for your Review");
    // validateEmail();
  };

  // form Data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    description: "",
  });
  const [isValid, setValid] = useState(false);
  const validateEmail = () => {
    const emailRg = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{1,6}$/;
    if (emailRg.test(formData.email)) setValid(true);
    else if (!emailRg.test(formData.email) && formData.email === "")
      setValid(false);
    else setValid(false);
  };
  const [disable,setDisable]=useState(true);
  const disableSubmit=()=>{
      if(isValid&&formData.name!==""&&formData.description!=="") setDisable(false);
      else setDisable(true);
      


  }

  return (
    <div className="review">
      <form onSubmit={submitHandler}>
        {/* div1 */}
        <div>
          <img src={img} alt="logo" />
          <h3>Bohiyaanam Talent Solutions</h3>
        </div>

        <div>
          <div>
            <label htmlFor="name">Name</label>
            <input
              required
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
                disableSubmit();
              }}
              
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              required
              value={formData.email}
              type="email"
              id="email"
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                validateEmail();
               console.log(isValid)
                disableSubmit();
              }}/>
            {/* {console.log(isValid,formData.email)} */}
          </div>
          <div>
            <label htmlFor="title">Review Title</label>
            <input
              required
              value={formData.title}
              type="text"
              id="title"
              onChange={(e) => {
                setFormData({ ...formData, title: e.target.value });
                disableSubmit();
              }}
              // onBlur={validateEmail}
            />
          </div>
          <div>
            <label htmlFor="desctiption">desctiption</label>
            <textarea
              required
              value={formData.description}
              id="desctiption"
              cols="30"
              rows="15"
              onChange={(e) => {
                setFormData({ ...formData, description: e.target.value });
                disableSubmit();
              }}
            />
          </div>
        </div>
        {/* {console.log(formData)} */}
        {/* div 3 */}
        <div>
          <div>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1"> i agree to all of the review policies</label>
          </div>

          <button type="submit" disabled={disable} >Submit </button>
        </div>
      </form>
    </div>
  );
};

export default Review;
