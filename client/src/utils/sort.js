const compareKey = key =>
  (a, b) => {
    if (a[key] < b[key]) {
      return -1
    }
    if (a[key] > b[key]) {
      return 1
    }
    return 0
  }


  export const titleAZ = arr => arr.sort(compareKey('title'))
  export const titleZA = arr => arr.sort(compareKey('title')).reverse()
  export const artistAZ= arr => arr.sort(compareKey('artist'))
  export const artistZA = arr => arr.sort(compareKey('artist')).reverse()
