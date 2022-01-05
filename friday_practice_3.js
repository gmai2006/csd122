// String manipulation
const lyric = `I said a hip hop, the hippie to the hippie,
To the hip, hip hop, and you don't stop, a rock it
To the bang bang boogie, say, up jump the boogie,
To the rhythm of the boogie, the beat
Now, what you hear is not a test,
I'm rappin' to the beat,
And me, the groove, and my friends
Are gonna try to move your feet.
See, I am Wonder Mike,
And I'd like to say hello,
To the black, to the white, the red and the brown,
The purple and yellow.
But first, I gotta bang-bang, the boogie to the boogie,
Say up jump the boogie to the bang bang boogie,
Let's rock, you don't stop,
Rock the rhythm that'll make your body rock.
Well so far, you've heard my voice,
But I brought two friends along,
And the next on the mic is my man Hank,
C'mon, Hank, sing that song!
`;

const stop_words = ['a', 'the', 'and', 'an', 'she', 'you', 'he', 'to', 'on', 'your', 'i', 'her', 'from'];
const lema = [["i've", "I"], ["you're", "you"], ["there's", "there"], ["it's", "it"]];
const remove_words = [['.', ''], [',', '']];
const tokenize_string = (str) => {
  if (!str) return [];
  const result = str.trim().toLowerCase().split(/ |\n/g);
  return result
    .filter(s => s.length > 0)
    .filter(s => !stop_words.includes(s));
    // .map(s => replace_keyword(s));
}

const replace = (arr, original, target) => { 
  for (let index = 0; index < arr.length; index++) {
    arr[index] = arr[index].replace(original, target); 
  }
}

const replaceAll = (arr, lema) => {
  for (item of lema) {
    replace(arr, item[0], item[1]);
  }
  return arr;
}


const compute_frequency = (arr) => {
  const freq = new Map();
  for (const word of arr) {
    if (freq.has(word)) {
      freq.set(word, freq.get(word) + 1);
    }
    else freq.set(word, 1);
  }
  return freq;
}

const get_max_freq = (map_obj) => {
  let max_val = 0;
  let max_key = undefined;
  for ([key, value] of map_obj.entries() ) {
    if (value > max_val) {
      max_val = value;
      max_key = key;
    }
  }
  return [max_key, max_val];
}

const replace_keyword = (str) => {
  const replace_words = ['some'];
  return (replace_words.includes(str)) ? '_' + str : str;
}

const convert_emoji = (val) => {
  if (val > 3) return '😜';
  else if (val == 3) return '😐';
  return '😟';
}

const create_emoji = (freq) => {
  result = {};
  for (const prop in freq) {
    console.log(prop + ', ' + convert_emoji(freq[prop]));
  }
  // return freq.map(v => convert_emoji(v));
}
const tokens = tokenize_string(lyric);
const tokens2 = replaceAll(tokens, lema);
const tokens3 = replaceAll(tokens2, remove_words);
const map = compute_frequency(tokens3);
const most_interesting_term = get_max_freq(map);
console.log(map);
console.log(most_interesting_term);

// const frequencies = compute_frequency(tokens);
// // console.log(frequencies);
// console.log(create_emoji(frequencies));
// recursive algorithm