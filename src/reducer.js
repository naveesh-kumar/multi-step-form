export const initialState = {
  formValues: {
    name: "",
    email: "",
    phone: "",
  },
  formErrors: {
    name: "",
    email: "",
    phone: "",
  },
  activeStep: 1,
  billingPeriod: "monthly",
  selectedPlan: [],
  selectedAddOns: [],
};

const reducer = (state = initialState, action) => {
  let { type, payload } = action;

  let condition = {
    //e.g., payload should be {name:'kingston'}
    SET_FORM_VALUE: {
      ...state,
      formValues: { ...state.formValues, ...payload },
    },
    //e.g., payload should be {name:"This field is required"}
    SET_FORM_ERROR: {
      ...state,
      formErrors: { ...state.formErrors, ...payload },
    },
    //e.g., payload should be 2
    SET_ACTIVE_STEP: { ...state, activeStep: payload },
    //e.g., payload should be 'yearly'
    SET_BILLING_PERIOD: { ...state, billingPeriod: payload },
  };

  return condition[type] ?? state;
};

export default reducer;
