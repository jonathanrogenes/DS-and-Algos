function walk(maze:string[], wall: string, curr: Point, end: Point, seen: boolean[][]) {
  //1 base case
  // off the map
  if (curr.x < 0 || curr.x >= maze[0].length ||
      curr.y < 0 || curr.y >= maze.length) {
        return false
      }

  // on a wall
  if (maze[curr.y][curr.x] === wall) {
    return false
  }

  // if at end
  if (curr.x === end.x && curr.y === end.y) {
    return false
  }

  // if seen before
  if (seen[curr.x][curr.y]) {
    return false
  }
}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {

}
