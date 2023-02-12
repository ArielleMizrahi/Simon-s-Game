import React from "react";

interface MessageProps {
  message: string;
}

const Message: React.FC<MessageProps> = ({ message }) => {
  return (
    <p>
      {message}
    </p>
  );
};

export default Message;
