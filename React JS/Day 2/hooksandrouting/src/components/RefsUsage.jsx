import React, { useRef } from "react";

function RefsUsage() {
  const jobTypeRef = useRef(null);
  const handleChange = () => {
    alert(`You have selected ${jobTypeRef.current.value}`); //aslo explored scrollToView()
  };
  return (
    <div>
      <p>Select Job Type</p>
      <select ref={jobTypeRef} onChange={handleChange}>
        <option value="Work from office">Work from office</option>
        <option value="Work from home">Work from home</option>
      </select>
    </div>
  );
}

export default RefsUsage;
