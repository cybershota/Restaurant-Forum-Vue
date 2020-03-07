import moment from "moment"

console.log(moment)

export const fromNowFilter = {
  // ...
}

export const emptyImageFilter = {
  filters: {
    emptyImage(src) {
      return src || "https://via.placeholder.com/350x220/DFDFDF?text=No+Image"
    }
  }
}
