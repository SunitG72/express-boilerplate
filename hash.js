

var all_characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];

var len2 = ['[','l','b','o','B','O','1','%','<','}','c','p','C','P','2','&','=','~']
var len3 = ['+','\\','d','q','D','Q','3','\'', '>','k','x']
var len4 = ['8',',',']','a','n','A','N','0','$',';','|','e','r','E','R','4','(','?','j','w','J']
var len5 = ['W','9','-','^','m','z','M','Z','#',':','{','f','s','F','S','5',')','@','i','v','I','V']
var len6 = ['K','X','!','.','_','y','L','Y','"','/','`','g','t','G','T','6','*','h','u','H','U','7']

var col2 = [];
var col3 = [];
var col4 = [];
var col5 = [];
var col6 = [];

var range1 = len2.length;
var range2 = len3.length;
var range3 = len4.length;
var range4 = len5.length;
var range5 = len6.length;

function generate_random_string(characters, length) {
  var random_indices = [];
  while (random_indices.length < length) {
    var random_index = Math.floor(Math.random() * characters.length);
    if (!random_indices.includes(random_index)) {
      random_indices.push(random_index);
    }
  }
  var random_string = "";
  for (var i = 0; i < length; i++) {
    random_string += characters[random_indices[i]];
  }
  return random_string;
}

let pt3 = 0;
while (pt3 != range2) {
  var r = generate_random_string(all_characters, 3);
  if (!col3.includes(r)) {
    if (col3.length > 0) {
      var skip = false;
      for (var i = 0; i < col2.length; i++) {
        if (r.includes(col2[i])) {
          skip = true;
          break;
        }
      }
      if (!skip) {
        for (var i = 0; i < col3.length; i++) {
          if (
            r[0] === col3[i][0] ||
            r[0] === col3[i][col3[i].length - 1] ||
            r[r.length - 1] === col3[i][0] ||
            r[r.length - 1] === col3[i][col3[i].length - 1]
          ) {
            r = generate_random_string(all_characters, 3);
            i = -1; // reset loop index to check again
          }
        }
        col3.push(r);
        pt3 += 1;
      }
    } else {
      col3.push(r);
      pt3 += 1;
    }
  }
}

let pt4 = 0;
while (pt4 !== range3) {
  let r = generate_random_string(all_characters, 4);
  if (!col4.includes(r)) {
    if (col4.length !== 0) {
      let containsInCol2 = false;
      for (let i = 0; i < col2.length; i++) {
        if (r.includes(col2[i])) {
          containsInCol2 = true;
          break;
        }
      }
      if (containsInCol2) {
        continue;
      }
      let containsInCol3 = col3.includes(r);
      if (containsInCol3) {
        continue;
      }
      for (let i = 0; i < col4.length; i++) {
        if (
          r[0] === col4[i][0] ||
          r[0] === col4[i][col4[i].length - 1] ||
          r[r.length - 1] === col4[i][0] ||
          r[r.length - 1] === col4[i][col4[i].length - 1]
        ) {
          r = generate_random_string(all_characters, 4);
          i = -1; // start again from the beginning of the loop
        }
      }
      col4.push(r);
      pt4++;
    } else {
      col4.push(r);
      pt4++;
    }
  }
}

let pt5 = 0;
while (pt5 != range4) {
  var r = generate_random_string(all_characters, 5);
  if (!col5.includes(r)) {
    if (col5.length != 0) {
      for (var i = 0; i < col2.length; i++) {
        if (r.includes(col2[i])) {
          continue;
        }
      }
      for (var i = 0; i < col3.length; i++) {
        if (r.includes(col3[i])) {
          continue;
        }
      }
      for (var i = 0; i < col4.length; i++) {
        if (r.includes(col4[i])) {
          continue;
        }
      }
      for (var i = 0; i < col5.length; i++) {
        if (
          r[0] == col5[i][0] ||
          r[0] == col5[i][col5[i].length - 1] ||
          r[r.length - 1] == col5[i][0] ||
          r[r.length - 1] == col5[i][col5[i].length - 1]
        ) {
          r = generate_random_string(all_characters, 5);
        }
      }
      col5.push(r);
      pt5 += 1;
    } else {
      col5.push(r);
      pt5 += 1;
    }
  }
}

let pt6 = 0;
while (pt6 != range5) {
  let r = generate_random_string(all_characters, 6);
  if (!col6.includes(r)) {
    if (col6.length != 0) {
      for (let i = 0; i < col2.length; i++) {
        if (r.includes(col2[i])) {
          continue;
        }
      }
      for (let i = 0; i < col3.length; i++) {
        if (r.includes(col3[i])) {
          continue;
        }
      }
      for (let i = 0; i < col4.length; i++) {
        if (r.includes(col4[i])) {
          continue;
        }
      }
      for (let i = 0; i < col5.length; i++) {
        if (r.includes(col5[i])) {
          continue;
        }
      }
      for (let i = 0; i < col6.length; i++) {
        if (
          r[0] == col6[i][0] ||
          r[0] == col6[i][col6[i].length - 1] ||
          r[r.length - 1] == col6[i][0] ||
          r[r.length - 1] == col6[i][col6[i].length - 1]
        ) {
          r = generate_random_string(all_characters, 6);
        }
      }
      col6.push(r);
      pt6 += 1;
    } else {
      col6.push(r);
      pt6 += 1;
    }
  }
}

const keyS =  {'!': 'D2[sY6', '"': 'h(3%=z', '#': 'q/Bke', '$': 'cM?=', '%': '}~', '&': 'f[', "'": 'REL', '(': ']:[s', ')': 'f-3ew', '*': 'Liv83Z', '+': '(J1', ',': '[Ze$', '-': '4(am!', '.': 'U)EZvc', '/': 'NsX]iM', '0': 'UhSp', '1': '^Z', '2': 'U0', '3': 'csO', '4': 'X%Wn', '5': '(D!]u', '6': '}R5jk*', '7': 'GA%QMr', '8': '/Y$0', '9': 'T[H4m', ':': '#5?B~', ';': 'x3;r', '<': 'S@', '=': 'gs', '>': 'w%V', '?': 'oY/!', '@': 'gR}5D', 'A': 'Pq$#', 'B': ':W', 'C': 'A%', 'D': 'gZQ', 'E': 'lW{_', 'F': ']zroc', 'G': 'Xd3Q80', 'H': 'osH&[k', 'I': 'h#(Nr', 'J': 'KmN.', 'K': '(<5M^Y', 'L': '[K-9jb', 'M': '!Y:tO', 'N': '2nvZ', 'O': '-a', 'P': 'qk', 'Q': 'k%5', 'R': 'eNb}', 'S': '_ZN$3', 'T': '1@Vg8y', 'U': '~{l&`8', 'V': '&uKhe', 'W': '%e-oF', 'X': '/%Cyl|', 'Y': 'Rik9!>', 'Z': '>;R6I', '[': 'co', '\\': '*4-', ']': 'GH#_', '^': 'Nn7)J', '_': ':Vx(MF', '`': '_bW}V7', 'a': 'WfA9', 'b': '=3', 'c': '!F', 'd': '7;e', 'e': '~;=m', 'f': '-U$ZM', 'g': 'Ho]`3n', 'h': '=~,9Z-', 'i': ')bGO;', 'j': 'Y?|R', 'k': '`2n', 'l': '/*', 'm': 'Q%i?B', 'n': 'S!J<', 'o': 'HR', 'p': 'w?', 'q': 's7[', 'r': '{Sjh', 's': 'QqAG6', 't': ')1Wf;~', 'u': 'W2fBzj', 'v': '}lC]/', 'w': 'yX,3', 'x': '!OF', 'y': 'is0Y{u', 'z': 'ZL*{q', '{': 'k!87X', '|': '8S=+', '}': 'D;', '~': 'su'}


export function encrypt(password) {
  let y = "";
  let list = [];
  for (let i = 0; i < password.length; i++) {
    for (let j in keyS) {
      if (password[i] === j) {
        list.push(keyS[j]);
      }
    }
  }
  for (let i = 0; i < list.length; i++) {
    y += list[i];
  }
  return y;
}



export function decrypt(password) {
  let y = "";
  while (password !== "") {
    for (let k = 1; k < 7; k++) {
      for (const [i, j] of Object.entries(keyS)) {
        if (password.slice(0, k) === j) {
          y += i;
          password = password.slice(k);
        }
      }
    }
  }
  return y;
}
