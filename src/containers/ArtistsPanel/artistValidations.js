export const artistValidations = (artistData, context) => {
  const validateEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  const validateNum = /^[0-9]+$/;
  const validPassword = /(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,}$/;

  if (artistData.name === "") {
    return [['The "Name" field cannot be empty.'], { name: true }];
  }

  if (artistData.lastName === "") {
    return [['The "Last name" field cannot be empty.'], { lastName: true }];
  }

  if (artistData.cellphone === "") {
    return [['The "Cellphone" field cannot be empty.'], { cellphone: true }];
  }

  if (artistData.cellphone !== "") {
    if (!validateNum.test(artistData.cellphone)) {
      return [["Invalid cellphone"], { cellphone: true }];
    }

    if (artistData.description === "") {
      return [
        ['The "Description" field cannot be empty.'],
        { description: true },
      ];
    }

    if (artistData.shortDescription === "") {
      return [
        ['The "Short description" field cannot be empty.'],
        { description: true },
      ];
    }

    if (artistData.primaryImage === "") {
      return [
        ['The "Primary image" field cannot be empty.'],
        { primaryImage: true },
      ];
    }

    if (artistData.secondaryImage === "") {
      return [
        ['The "Secondary image" field cannot be empty.'],
        { description: true },
      ];
    }

    if (artistData.eventDate === "") {
      return [
        ['The "Event date" field cannot be empty.'],
        { description: true },
      ];
    }

    return { valid: true };
  }
};

// import EditUser from "./EditUser";

// export const validateUserForm = (userData, context) => {
//   const validateEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
//   const validPassword = /(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,}$/;
//   const validateNum = /^[0-9]+$/;

//   let returnDataError = false;
//   let dataErrors = {
//     name: {
//       alert: "",
//       error: false,
//     },
//     email: {
//       alert: "",
//       error: false,
//     },
//     cellphone: {
//       alert: "",
//       error: false,
//     },
//     role: {
//       alert: "",
//       error: false,
//     },
//     repeatPassword: {
//       alert: "",
//       error: false,
//     },
//     password: {
//       alert: "",
//       error: false,
//     },
//   };

//   if (userData.name === "") {
//     // return [['el campo "Nombre" no puede estar vacío.'], { name: true }];
//     returnDataError = true;
//     dataErrors = {
//       ...dataErrors,
//       name: {
//         alert: 'el campo "Nombre" no puede estar vacío.',
//         error: true,
//       },
//     };
//   }
//   if (userData.email === "") {
//     // return [
//     //   ['El "Email" no puede estar vacío o tiene que tener formato correcto.'],
//     //   { email: true },
//     // ];
//     returnDataError = true;
//     dataErrors = {
//       ...dataErrors,
//       email: {
//         alert:
//           'El "Email" no puede estar vacío o tiene que tener formato correcto.',
//         error: true,
//       },
//     };
//   }
//   if (userData.email !== "" && !validateEmail.test(userData.email)) {
//     returnDataError = true;
//     dataErrors = {
//       ...dataErrors,
//       email: {
//         alert: "Correo electrónico inválido",
//         error: true,
//       },
//     };
//   }

//   if (userData.cellphone === "") {
//     returnDataError = true;
//     dataErrors = {
//       ...dataErrors,
//       cellphone: {
//         alert:
//           'El "Teléfono" no puede estar vacío o tiene que tener formato correcto.',
//         error: true,
//       },
//     };
//   }
//   if (!validateNum.test(userData.cellphone)) {
//     returnDataError = true;
//     dataErrors = {
//       ...dataErrors,
//       cellphone: {
//         alert: 'El campo "Teléfono" solo debe tener números.',
//         error: true,
//       },
//     };
//   }
//   if (userData.role === "") {
//     returnDataError = true;
//     dataErrors = {
//       ...dataErrors,
//       role: {
//         alert: "Debe seleccionar un rol.",
//         error: true,
//       },
//     };
//   }

//   if (context === "EditUser") {
//     if (userData.password.length) {
//       if (userData.repeatPassword === "") {
//         returnDataError = true;
//         dataErrors = {
//           ...dataErrors,
//           repeatPassword: {
//             alert: 'El campo "Repetir Contraseña" no puede estar vacío.',
//             error: true,
//           },
//         };
//       }
//       if (!validPassword.test(userData.password)) {
//         returnDataError = true;
//         dataErrors = {
//           ...dataErrors,
//           password: {
//             alert:
//               "El campo contraseña debe tener al menos 8 dígitos, una mayúscula y un número.",
//             error: true,
//           },
//         };
//       }

//       if (
//         userData.password !== "" &&
//         userData.repeatPassword !== "" &&
//         userData.password !== userData.repeatPassword
//       ) {
//         returnDataError = true;
//         dataErrors = {
//           ...dataErrors,
//           password: {
//             alert: "Las contraseñas no coinciden",
//             error: true,
//           },
//         };
//       }
//     }

//     if (userData.repeatPassword.length) {
//       if (userData.password === "") {
//         returnDataError = true;
//         dataErrors = {
//           ...dataErrors,
//           password: {
//             alert: 'El campo "Contraseña" no puede estar vacío.',
//             error: true,
//           },
//         };
//       }
//       if (!validPassword.test(userData.repeatPassword)) {
//         returnDataError = true;
//         dataErrors = {
//           ...dataErrors,
//           repeatPassword: {
//             alert:
//               "El campo Repetir contraseña debe tener al menos 8 dígitos, una mayúscula y un número.",
//             error: true,
//           },
//         };
//       }

//       if (
//         userData.password !== "" &&
//         userData.repeatPassword !== "" &&
//         userData.password !== userData.repeatPassword
//       ) {
//         returnDataError = true;
//         dataErrors = {
//           ...dataErrors,
//           password: {
//             alert: "Las contraseñas no coinciden",
//             error: true,
//           },
//         };
//       }
//     }

//     if (returnDataError) {
//       return dataErrors;
//     } else {
//       return { valid: true };
//     }
//   }

//   if (userData.password === "") {
//     returnDataError = true;
//     dataErrors = {
//       ...dataErrors,
//       password: {
//         alert: 'El campo "Contraseña" no puede estar vacío.',
//         error: true,
//       },
//     };
//   }

//   if (userData.repeatPassword === "") {
//     returnDataError = true;
//     dataErrors = {
//       ...dataErrors,
//       repeatPassword: {
//         alert: 'El campo "Repetir Contraseña" no puede estar vacío.',
//         error: true,
//       },
//     };
//   }

//   if (userData.password !== "" && !validPassword.test(userData.password)) {
//     returnDataError = true;
//     dataErrors = {
//       ...dataErrors,
//       password: {
//         alert:
//           "La contraseña debe tener al menos 8 dígitos, una mayúscula y un número.",
//         error: true,
//       },
//     };
//   }

//   if (
//     userData.password !== "" &&
//     userData.repeatPassword !== "" &&
//     userData.password !== userData.repeatPassword
//   ) {
//     returnDataError = true;
//     dataErrors = {
//       ...dataErrors,
//       password: {
//         alert: "Las contraseñas no coinciden",
//         error: true,
//       },
//     };
//   }
//   if (returnDataError) {
//     return dataErrors;
//   } else {
//     return { valid: true };
//   }
// }
