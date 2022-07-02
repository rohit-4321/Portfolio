import React, { useState } from "react";
import ContainerHeading from "../common/ContainerHeading";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";
import TickSvg from "../../resources/tickmark.svg";
import {
  IconContainerStyled,
  InputMessageBox,
  InputStyled,
  MessageContainerStyled,
  SendButtonStyled,
  StyledForm,
  StyledLoading,
  StyledSvg,
} from "../styled/Contact.style";
import { WrapperMain } from "../styled/MainContentWrapper.style";

function Contact() {
  return (
    <>
      <ContainerHeading heading={"Contact Me"} />
      <WrapperMain>
        <MessageContainer />
      </WrapperMain>
    </>
  );
}

const MessageContainer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [buttonState, setButtonState] = useState("idle");
  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonState("loading");
    emailjs
      .send(
        "service_pymaanj",
        "template_gwh8ybi",
        {
          from_name: name,
          message: message,
          subject: subject,
          from_email: email,
        },
        "9ASPBnYFl8wYeOrMa"
      )
      .then((result) => {
        console.log("Emailjs :Success");
        console.log(result);
        setButtonState("success");
        setName("");
        setEmail("");
        setMessage("");
        setSubject("");
      })
      .catch((err) => {
        console.log("Emailjs :Error");
        console.log(err);
      });
  };
  const onTextChange = (e, setText) => {
    setText(e.target.value);
  };

  return (
    <StyledForm
      onSubmit={handleSubmit}
      // data-aos="zoom-in"
    >
      <MessageContainerStyled>
        <InputStyled
          placeholder={"Name"}
          value={name}
          onChange={(e) => onTextChange(e, setName)}
        />
        <InputStyled
          value={email}
          placeholder={"Email"}
          type="email"
          onChange={(e) => onTextChange(e, setEmail)}
        />

        <InputStyled
          value={subject}
          placeholder={"Subject"}
          onChange={(e) => onTextChange(e, setSubject)}
        />
        <InputMessageBox
          value={message}
          placeholder={"Message"}
          onChange={(e) => onTextChange(e, setMessage)}
        />
        <SendButtonStyled type="submit">
          {buttonState === "idle" ? (
            <span>Send</span>
          ) : buttonState === "loading" ? (
            <StyledLoading />
          ) : (
            <StyledSvg src={TickSvg} />
          )}
        </SendButtonStyled>
        <IconContainer />
      </MessageContainerStyled>
    </StyledForm>
  );
};

const IconContainer = () => {
  return (
    <IconContainerStyled>
      <img src={require("../../resources/github.png")} alt="img" />
      <img src={require("../../resources/gmails.png")} alt="img" />
      <img src={require("../../resources/linkedins.png")} alt="img" />
    </IconContainerStyled>
  );
};
export default Contact;

// const InputBox = (props) => {
//   return <InputStyled placeholder={props.placeholder} />;
// };
