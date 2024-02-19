export const prospectValidations = (prospectData, context) => {
  const validateEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  const validateNum = /^[0-9]+$/;
  const validPassword = /(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,}$/;

  if (prospectData.name === "") {
    return [['The "Name" field cannot be empty.'], { name: true }];
  }

  if (prospectData.email !== "") {
    if (!validateEmail.test(prospectData.email)) {
      return [["Invalid email."], { email: true }];
    }
  }

  if (prospectData.cellphone !== "") {
    if (!validateNum.test(prospectData.cellphone)) {
      return [["Invalid cellphone"], { cellphone: true }];
    }
  }
  if (prospectData.client === "" || prospectData.client === null) {
    return [
      ['you must select a "Client" to register the prospect.'],
      { lastName: true },
    ];
  }

  if (prospectData.user === "" || prospectData.user === null) {
    return [
      ['you must select a "User" to register the prospect.'],
      { lastName: true },
    ];
  }

  return { valid: true };
};
