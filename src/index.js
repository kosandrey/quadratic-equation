module.exports = function solveEquation(equation) {
  var smbls = [];
  smbls = equation.split(" ");
  var a = Number(smbls[0]);
  var b = Number(smbls[4]);
  var c = Number(smbls[8]);
  if (smbls [3] == '-')
    b = -b;
  if (smbls [7] == '-')
    c = -c;
  var buff_d = b*b - 4*a*c;
  var d = Math.sqrt(buff_d);
  var x1 = (-b - d) / (2*a);
  var x2 = (-b + d) / (2*a);
  x1 = Math.round(x1);
  x2 = Math.round(x2);
  if (x1 < x2) return[x1, x2];
  else return [x2, x1];
  // your implementation
}
