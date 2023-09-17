export const groupByTwoKeys = (data: any, key1: string, key2: string) => {
  if (!data || data.length === 0) return []
  return data.reduce((acc: any, item: any) => {
    const value1 = item[key1]
    const value2 = item[key2]

    if (!acc[value1]) {
      acc[value1] = {}
    }

    if (!acc[value1][value2]) {
      acc[value1][value2] = []
    }

    acc[value1][value2].push(item)

    return acc
  }, {})
}
