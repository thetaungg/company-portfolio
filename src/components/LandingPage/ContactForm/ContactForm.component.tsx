import React, { ChangeEvent, FormEvent, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import TextField from "../../common/TextField/TextField.component";
import TextArea from "../../common/TextArea/TextArea.component";
import * as styles from "./ContactForm.styles";

interface ContactFormProps {
  isVisible: boolean;
}

const ContactForm = ({ isVisible }: ContactFormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [recapToken, setRecapToken] = useState("");
  const [isOnApiCall, setIsOnApiCall] = useState(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isErrored, setIsErrored] = useState<boolean>(false);
  const [errorText, setErrorText] = useState("");

  const onChange = (
    type: "name" | "email" | "phone" | "message",
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // creating clean slate
    !isErrored && setIsErrored(false);
    errorText && setErrorText("");
    isSuccess && setIsSuccess(false);

    if (type === "name") {
      setName(e.target.value);
      return;
    } else if (type === "email") {
      setEmail(e.target.value);
      return;
    } else if (type === "phone") {
      setPhone(e.target.value);
      return;
    } else if (type === "message") {
      setMessage(e.target.value);
      return;
    }
  };

  const onRecaptchaChange = (value: any) => {
    setRecapToken(value);
    if (value && errorText === "Please, confirm that you're not a robot.") {
      setIsErrored(false);
      setErrorText("");
    }
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!recapToken) {
      setIsErrored(true);
      setErrorText("Please, confirm that you're not a robot.");
      return;
    }

    const data = { name, email, desc: message, phone };

    // production env are included in build files so we don't have to create env keys in deployment environments
    setIsOnApiCall(true);
    fetch(process.env.GATSBY_FORM_SUBMIT_ENDPOINT as string, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(() => {
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setRecapToken("");
        setIsSuccess(true);
        setIsOnApiCall(false);
      })
      .catch(() => {
        setIsErrored(true);
        setErrorText("Something's wrong. Please try again.");
        setIsOnApiCall(false);
      });
  };
  return (
    <div css={styles.formContainer(isVisible)}>
      <form css={styles.form} onSubmit={onSubmit}>
        <div css={styles.formHeader}>
          <span>Let's Get in Touch</span>
        </div>
        <div style={{ display: "flex", marginBottom: "2rem" }}>
          <TextField
            css={styles.input}
            style={{ marginBottom: 0, marginRight: "1rem" }}
            id="name"
            label="Name*"
            value={name}
            onChange={(e: ChangeEvent<HTMLInputElement>) => onChange("name", e)}
            required
          />
          <TextField
            css={styles.input}
            id="phone"
            type="number"
            label="Phone (optional)"
            value={phone}
            onChange={(e: ChangeEvent<HTMLInputElement>) => onChange("phone", e)}
          />
        </div>

        <TextField
          css={styles.input}
          id="email"
          type="email"
          label="Email address*"
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) => onChange("email", e)}
          required
        />
        <TextArea
          css={styles.textArea}
          id="message"
          label="Message*"
          value={message}
          required
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => onChange("message", e)}
        />
        <ReCAPTCHA
          sitekey="6LcxRIAbAAAAAIaULkuAPjY5SgbMyhUp14fCQHdC"
          onChange={onRecaptchaChange}
          onExpired={() => onRecaptchaChange("")}
        />
        {errorText && <span css={styles.errorText}>{errorText}</span>}
        <button css={styles.button} disabled={isOnApiCall}>
          {isOnApiCall ? "Loading . . . " : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
