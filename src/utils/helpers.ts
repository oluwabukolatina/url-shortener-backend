const Helpers = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  generateAlphaNumericCharacters(length:number) {
    let result = '';
    const characters = '012ABCDEFGHIJKLMNOPQRSTU89abcdefghijklmnopqrstuvwxyz34567VWXYZ';
    const charactersLength = characters.length;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  },

};

export default Helpers;
