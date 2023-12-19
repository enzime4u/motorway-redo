export function validateDateOfBirth(dob) {
  // date format (DD/MM/YYYY)
  const testDOB = new RegExp(
    "^(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[012])/(19|20)\\d\\d$"
  );

  if (!testDOB.test(dob)) {
    return false;
  }

  const [day, month, year] = dob.split("/");
  const dobDate = new Date(year, month - 1, day);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return dobDate <= today;
}
