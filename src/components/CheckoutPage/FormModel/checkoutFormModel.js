export default {
  formId: "smileForm",
  formField: {
    gender: {
      name: "gender",
      label: "1. Are you...*",
      requiredErrorMsg: "Your age is required",
      type: "radio",
      data: [
        {
          value: "male",
          label: "Male"
        },
        { value: "female", label: "Female" }
      ]
    },
    age: {
      name: "age",
      label: "2. Please select your age range:*",
      requiredErrorMsg: "Choose the appropriate age option",
      type: "radio",
      data: [
        { label: "18-24", value: "18-24" },
        { label: "25-34", value: "25-34" },
        { label: "35-44", value: "35-44" },
        { label: "45-54", value: "45-54" },
        { label: "55-64", value: "55-64" },
        { label: "65+ ", value: "65+" }
      ]
    },
    rate: {
      name: "rate",
      label: "3. How would you rate your smile?*",
      requiredErrorMsg: "You should tell us about it",
      type: "radio",
      data: (() =>
        [...Array(10)].map((el, i) => {
          return {
            label: (i + 1).toString(),
            value: (i + 1).toString()
          };
        }))()
    },
    symptomCategory: {
      name: "symptomCategory",
      label: "4. You can select as much as you need:*",
      requiredErrorMsg: "Select at least one field",
      type: "checkbox",
      data: [
        { id: "symptom0", name: "Choice number 1", checked: false },
        { id: "symptom1", name: "Choice number 2", checked: false },
        { id: "symptom2", name: "Choice number 3", checked: false },
        { id: "symptom3", name: "Choice number 4", checked: false },
        { id: "symptom4", name: "Choice number 5", checked: false }
      ]
    },
    symptomDetail: {
      name: "symptomDetail",
      label: "5. This TextArea could leave out blank:",
      requiredErrorMsg: "",
      type: "text"
    },
    reasonCategory: {
      name: "reasonCategory",
      label:
        "6. You should select one of the choices or use Another to Enable TextArea?*",
      requiredErrorMsg: "Select at least one field",
      type: "checkbox",
      conditionalValue: "reason4",
      data: [
        { id: "reason0", name: "It's fine", checked: false },
        {
          id: "reason1",
          name: "I would like to use this",
          checked: false
        },
        { id: "reason2", name: "Formik is great", checked: false },
        { id: "reason3", name: "Yup made it possible", checked: false },
        { id: "reason4", name: "Another", checked: false }
      ]
    },
    reasonDetail: {
      name: "reasonDetail",
      label: "7. You should type some detail here?*",
      requiredErrorMsg: "Provide a reason or problem whit your teeth",
      type: "text"
    },
    image: {
      name: "image",
      label: "8. Please upload an image:",
      requiredErrorMsg: "Image is Required",
      type: "image"
    },
    firstName: {
      name: "firstName",
      label: "First name*",
      requiredErrorMsg: "First name is required",
      type: "text"
    },
    lastName: {
      name: "lastName",
      label: "Last name*",
      requiredErrorMsg: "Last name is required",
      type: "text"
    },
    email: {
      name: "email",
      label: "Email address*",
      requiredErrorMsg: "Email address is required",
      type: "text"
    },
    phone: {
      name: "phone",
      label: "Phone number*",
      requiredErrorMsg: "Phone number name is required",
      type: "text"
    },

    address1: {
      name: "address1",
      label: "Address Line 1*",
      requiredErrorMsg: "Address Line 1 is required",
      type: "text"
    },
    address2: {
      name: "address2",
      label: "Address Line 2",
      type: "text"
    },
    city: {
      name: "city",
      label: "City*",
      requiredErrorMsg: "City is required",
      type: "select"
    },
    state: {
      name: "state",
      label: "State/Province/Region",
      type: "text"
    },
    zipcode: {
      name: "zipcode",
      label: "Zipcode*",
      requiredErrorMsg: "Zipcode is required",
      invalidErrorMsg: "Zipcode is not valid (e.g. 70000)",
      type: "text"
    },
    country: {
      name: "country",
      label: "Country*",
      requiredErrorMsg: "Country is required",
      type: "select"
    },
    useAddressForPaymentDetails: {
      name: "useAddressForPaymentDetails",
      label: "Use this address for payment details",
      type: "text"
    }
    // nameOnCard: {
    //   name: "nameOnCard",
    //   label: "Name on card*",
    //   requiredErrorMsg: "Name on card is required",
    // },
    // cardNumber: {
    //   name: "cardNumber",
    //   label: "Card number*",
    //   requiredErrorMsg: "Card number is required",
    //   invalidErrorMsg: "Card number is not valid (e.g. 4111111111111)",
    // },
    // expiryDate: {
    //   name: "expiryDate",
    //   label: "Expiry date*",
    //   requiredErrorMsg: "Expiry date is required",
    //   invalidErrorMsg: "Expiry date is not valid",
    // },
    // cvv: {
    //   name: "cvv",
    //   label: "CVV*",
    //   requiredErrorMsg: "CVV is required",
    //   invalidErrorMsg: "CVV is invalid (e.g. 357)",
    // },
  }
};
