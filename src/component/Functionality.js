function emailValidator(email) {
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return pattern.test(email);
}

function DataValidation(data) {
  if (!data.name || !data.message || !data.email || !data.subject) {
    window.alert("Fill all the fields");
    return false;
  } else if (!emailValidator(data.email)) {
    window.alert("Enter valid Email!");
    return false;
  }
  return true;
}

export { DataValidation };
