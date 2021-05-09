import Input from "./input";
import { useMutation } from "@apollo/client";
import { CREATE_SUBSCRIBER } from "../graphql/mutation";
import { useState } from "react";

interface SocialProps {}

const Social: React.FC<SocialProps> = () => {
  const [input, setInput] = useState("");
  //TODO tell user they succesffuly signed up
  const [addSubscriber, { error }] = useMutation(CREATE_SUBSCRIBER, {
    variables: {
      email: input,
    },
  });
  const handleAddSubscriber = async () => {
    try {
      await addSubscriber();
      setInput("");
    } catch (e) {}
  };
  return (
    <>
      <span className='newsletter'>Signup for my newsletter</span>
      {error && (
        <div className='error-card'>
          <h4 className='error-card__title'>Oops!</h4>
          <span className='error-card__message'>
            {error.message === "ValidationError"
              ? "Must be a valid email"
              : "Email is already registered"}
          </span>
        </div>
      )}
      <Input
        type='text'
        placeholder='email'
        popup
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <span className='btn btn--black mt-1' onClick={handleAddSubscriber}>
        sign up
      </span>
    </>
  );
};
export default Social;
