const numberWithCommas = (num) =>
  String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export default numberWithCommas;
