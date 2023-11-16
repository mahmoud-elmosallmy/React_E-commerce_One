const FormatPrice = ({price}) => {
  return Intl.NumberFormat("en-US", {
        style:"currency",
        currency: "USD",
        maximumFractionDigits: 2,
    }).format(price / 5)
}

export default FormatPrice