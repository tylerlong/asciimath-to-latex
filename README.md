# AsciiMath to LaTeX converter

[AsciiMath](http://asciimath.org/) to [LaTeX](https://www.latex-project.org/) converter.


## Installation

```
yarn add asciimath-to-latex
```


## Usage


```ts
import asciimath2latex from 'asciimath-to-latex';
```

```javascript
const asciimath2latex = require('asciimath-to-latex').default;
```

```javascript
const asciimath = '2=(((3-x)xx2)/(3-x))'
console.log(`asciimath: ${asciimath}`)
const latex = asciimath2latex(asciimath)
console.log(`latex: ${latex}`)
```


## Demo project

[demo project](https://github.com/tylerlong/asciimath-to-latex-demo)


## Credits

I forgot where I copied the original code from. It's probably [here](https://github.com/asciimath/asciimathml/blob/master/asciimath-based/ASCIIMathTeXImg.js).
