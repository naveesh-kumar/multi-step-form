const SET_FORM_VALUE = "SET_FORM_VALUE";
const SET_FORM_ERROR = "SET_FORM_ERROR";
const SET_ACTIVE_STEP = "SET_ACTIVE_STEP";
const SET_BILLING_PERIOD = "SET_BILLING_PERIOD";

export const setFormValue = (payload) => ({
  type: SET_FORM_VALUE,
  payload,
});

export const setFormError = (payload) => ({
  type: SET_FORM_ERROR,
  payload,
});

export const setActiveStep = (payload) => ({
  type: SET_ACTIVE_STEP,
  payload,
});

export const setBillingPeriod = (payload) => ({
  type: SET_BILLING_PERIOD,
  payload,
});
