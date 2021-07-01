import React from "react";

function calculateTime (minutes) {
  if ( minutes < 30 ) {
    let result = ""
    const totalCoffees = Math.ceil(minutes / 5)
    let i = 0
    while (i < totalCoffees) {
      result += "☕️"
      i++
    }
    return `${result} ${minutes} read`
  } else {
    let result = ""
    const totalBento = Math.ceil(minutes / 10)
    let i = 0
    while (i < totalBento) {
      result += "🍱"
      i++
    }
    return `${result} ${minutes} read`
  }
}

function Article ({ title, date = "January 1, 1970", preview, minutes }) {
  return <article>
    <h3>{title}</h3>
    <small>{date} • {calculateTime(minutes)}</small>
    <p>{preview}</p>
  </article>
}

export default Article
