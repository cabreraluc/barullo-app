export const calendarValidations = (activityData) => {
  console.log(activityData);
  if (activityData.prospect === "") {
    return [['The "Prospect" field cannot be empty.'], { name: true }];
  }

  if (activityData.details === "") {
    return [['The "Details" field cannot be empty.'], { name: true }];
  }

  if (activityData.title === "") {
    return [['The "Title" field cannot be empty.'], { name: true }];
  }

  return { valid: true };
};
