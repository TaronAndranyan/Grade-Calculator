function grade_calculator(){
  var partgrade = document.getElementById("part_grade")
  var homeworkgrade = document.getElementById("homework_grade")
  var prmil1 = document.getElementById("prmil1")
  var prmil2 = document.getElementById("prmil2")
  var prmil3 = document.getElementById("prmil3")
  var final grade = document.getElementById("mycurrentgrade").innerHTML = 10% * partgrade + 20% * homeworkgrade + 20% * prmil1 + 20% * prmil2 + 30% * prmil3
  return mycurrentgrade
}
