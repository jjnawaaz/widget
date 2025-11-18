const types = ["Performance", "Operations", "Customers", "Finance"];

export const data = [
  {
    title: "Transactions Overview",
    content:
      "Track the total number and volume of transactions. Quickly spot peaks, dips and trends across your payment flow.",
    type: types[0],
    id: 1,
  },
  {
    title: "Customers Insight",
    content:
      "Track the balance between new and returning customers. Understand trends and identify growth oppurtunities over time.",
    type: types[2],
    id: 2,
  },
  {
    title: "Refunds & Chargebacks",
    content:
      "Understand how much revenue is lost due to refunds and disputes. Identify risky segments and reduce unnecessary chum",
    type: types[3],
    id: 3,
  },
  {
    title: "Payout Delays",
    content:
      "Track the total number and volume of transactions. Quickly spot peaks, dips and trends across your payment flow.",
    type: types[1],
    id: 4,
  },
];

export const detailsOptions = [
  "All",
  "Online Payments",
  "In-store Sales",
  "Subscriptions",
];

export const detailsButtonData = [
  {
    heading: "Highlight high-risk transactions",
    sub_heading:
      "Mark transactions that are flagged as high risk in this widget.",
  },
  {
    heading: "Show net revenue impact",
    sub_heading: "Display how refunds and chargebacks affect your net sales.",
  },
];
