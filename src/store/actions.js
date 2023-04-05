export const SET_FORM_VALUE = "SET_FORM_VALUE";
export const SET_FORM_ERROR = "SET_FORM_ERROR";
export const SET_ACTIVE_STEP = "SET_ACTIVE_STEP";
export const SET_BILLING_PERIOD = "SET_BILLING_PERIOD";
export const SET_ACTIVE_PLAN = "SET_ACTIVE_PLAN";
export const SET_ADD_ONS = "SET_ADD_ONS";
export const REMOVE_ADD_ONS = "REMOVE_ADD_ONS";

export const setFormValue = (key, value) => ({
  type: SET_FORM_VALUE,
  payload: { [key]: value },
});

export const setFormError = (key, value) => ({
  type: SET_FORM_ERROR,
  payload: { [key]: value },
});

export const setActiveStep = (payload) => ({
  type: SET_ACTIVE_STEP,
  payload,
});

export const setBillingPeriod = (payload) => ({
  type: SET_BILLING_PERIOD,
  payload,
});

export const setActivePlan = (plan) => ({
  type: SET_ACTIVE_PLAN,
  payload: [plan],
});

export const setAddOns = (payload) => ({
  type: SET_ADD_ONS,
  payload,
});

export const removeAddOns = (payload) => ({
  type: REMOVE_ADD_ONS,
  payload,
});
