import points from './points.json'

export default points.map(point=>{
  point.weight *= 1000
  return point
})

