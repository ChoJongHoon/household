const formatMoney = (money: number) =>
  money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export default formatMoney;
