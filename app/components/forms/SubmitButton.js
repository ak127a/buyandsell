import React from "react";
import AppButton from "../AppButton";
import { useFormikContext } from "formik";

function SubmitButton({ text }) {
  const { handleSubmit } = useFormikContext();
  return (
    <AppButton style={{ marginTop: 10 }} text={text} onPress={handleSubmit} />
  );
}

export default SubmitButton;
