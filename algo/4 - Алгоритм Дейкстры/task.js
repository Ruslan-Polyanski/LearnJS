
const graph = {}

graph.a = {b: 2, c: 1}
graph.b = {f: 7}
graph.c = {d: 5, e: 2}
graph.f = {g: 1}
graph.d = {f: 2}
graph.e = {f: 1}
graph.g = {}


function minPath(graph, start, end) {
  const distanceAtoPoint = {}
  const checkedPoints = []
  let neighbourPoints = {}

  Object.keys(graph).forEach(point => {
    if(point !== start) {
      let value = graph[start][point]
      distanceAtoPoint[point] = value || 1000000000;
    }
  })

  // console.log(distanceAtoPoint)

  let point = findPointMinDistanceAtoPoint(distanceAtoPoint, checkedPoints)

  // console.log(point)

  while (point) {
    const distance = distanceAtoPoint[point]
    neighbourPoints = graph[point]

    Object.keys(neighbourPoints).forEach(pointNeighbor => {
      let newDistance = distance + neighbourPoints[pointNeighbor]
      if(newDistance < distanceAtoPoint[pointNeighbor]) {
        distanceAtoPoint[pointNeighbor] = newDistance;
      }
    })
  
    checkedPoints.push(point)
    point = findPointMinDistanceAtoPoint(distanceAtoPoint, checkedPoints)
  }

  return distanceAtoPoint;

}


function findPointMinDistanceAtoPoint(distanceAtoPoint, checkedPoints) {
  let mindistance = 1000000000;
  let pointMinDistance;

  Object.keys(distanceAtoPoint).forEach(point => {
    let distance = distanceAtoPoint[point];

    if(distance < mindistance && !checkedPoints.includes(point)) {
      mindistance = distance
      pointMinDistance = point
    }

  })

  return pointMinDistance;

}

minPath(graph, 'a', 'g')
