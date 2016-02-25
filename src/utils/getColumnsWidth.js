const getColumnsWidth = (columns) => {
  return columns.reduce((acc, col) => {
    const {width, minWidth} = col 
    const colWidth = Math.max(width || 0, minWidth || 0)

    return acc + colWidth
  }, 0)
}

export default getColumnsWidth