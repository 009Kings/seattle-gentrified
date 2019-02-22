import points from './points.json'

export default points.map(point=>{
  point.value *= 20
  return point
})

