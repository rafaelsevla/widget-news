export const renderDate = (date) => {
  const newDate = date.split("T")[0].split("-")
  return `${newDate[2]}/${newDate[1]}/${newDate[0]}`
}
