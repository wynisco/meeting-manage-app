
const addDaystoDate = (date,days) => {
    date.setDate(date.getDate() + days)
    return date
  }
  const subtractDaystoDate = (date,days) => {
    date.setDate(date.getDate() - days)
    return date
  }

  export {addDaystoDate,subtractDaystoDate}