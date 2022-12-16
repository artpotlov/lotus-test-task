export type TMember = {
  id: string;
  name: string;
  standartQuality: string;
  prodTime: number;
  garantTime: number;
  paymentCondition: number;
  price: number;
}

export type TBiddingTimer = {
  currentMemberID: string;
  updatedLotTime: number;
}
