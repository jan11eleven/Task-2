export default function validate(validateName, text) {
  const NAME = 'name';
  const MOBILE = 'mobile';
  const EMAIL = 'email';
  if (validateName === NAME) {
    const isNotEmpty = text !== '' || text != undefined || text != null;

    const regex = /^[a-zA-Z\s]+$/;
    const isOnlyAlphabetsAndSpaces = regex.test(text);

    const isLessThanTwentyOneChars = text.length <= 20;

    return isNotEmpty && isOnlyAlphabetsAndSpaces && isLessThanTwentyOneChars;
  }

  if (validateName === MOBILE) {
    const isNotEmpty = text !== '' || text != undefined || text != null;

    const regex = /^[0-9]+$/;
    const isOnlyNumbers = regex.test(text);

    const isEqualTenChars = text.length == 10;

    return isNotEmpty && isOnlyNumbers && isEqualTenChars;
  }

  if (validateName === EMAIL) {
    const isNotEmpty = text !== '' || text != undefined || text != null;

    const regex = /^[a-zA-Z][a-zA-Z0-9.]{1,9}@[a-zA-Z]{2,20}\.[a-zA-Z]{2,10}$/;
    const isValidEmail = regex.test(text);

    return isNotEmpty && isValidEmail;
  }
}
