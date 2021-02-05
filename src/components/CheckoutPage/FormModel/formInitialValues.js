import checkoutFormModel from "./checkoutFormModel";
const {
  formField: {
    gender,
    age,
    rate,
    symptomCategory,
    symptomDetail,
    reasonCategory,
    reasonDetail,

    image,
    firstName,
    lastName,
    email,
    phone,
    address1,
    city,
    zipcode,
    country,
    useAddressForPaymentDetails
    // nameOnCard,
    // cardNumber,
    // expiryDate,
    // cvv,
  }
} = checkoutFormModel;

export default {
  [gender.name]: "",
  [age.name]: "",
  [rate.name]: "",
  [symptomCategory.name]: "",
  [symptomDetail.name]: "",
  [reasonCategory.name]: [],
  [reasonDetail.name]: "",

  [image.name]: {
    file: null,
    src: null,
    name: ""
  },
  [firstName.name]: "",
  [lastName.name]: "",
  [email.name]: "",
  [phone.name]: "",

  [address1.name]: "",
  [city.name]: "",
  [zipcode.name]: "",
  [country.name]: "",
  [useAddressForPaymentDetails.name]: false
  // [nameOnCard.name]: "",
  // [cardNumber.name]: "",
  // [expiryDate.name]: "",
  // [cvv.name]: "",
};
