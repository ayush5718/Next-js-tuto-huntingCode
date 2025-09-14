import React from "react";

const Dummy = () => {
  return (
    <>
      {/* this is a dummy css which is component based css if we keep global keyword in the
      attribute then the specific style will be global throughout the project and we can use these styling for any component or any page directly */}
      <style jsx>
        {`
          .dummy {
            color: yellow;
          }
        `}
      </style>
      <div className="dummy">Dummy</div>;
    </>
  );
};

export default Dummy;
