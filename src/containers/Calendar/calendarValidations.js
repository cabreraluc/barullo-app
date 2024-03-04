export const calendarValidations = (activityData) => {
  console.log(activityData);

  if (activityData.title === "") {
    return [['The "Title" field cannot be empty.'], { name: true }];
  }

  return { valid: true };
};
