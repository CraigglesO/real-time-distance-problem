# real-time-distance-problem [![travis][travis-image]][travis-url] [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url]

[![Greenkeeper badge](https://badges.greenkeeper.io/CraigglesO/real-time-distance-problem.svg)](https://greenkeeper.io/)

[travis-image]: https://travis-ci.org/CraigglesO/real-time-distance-problem.svg?branch=master
[travis-url]: https://travis-ci.org/CraigglesO/real-time-distance-problem
[npm-image]: https://img.shields.io/npm/v/real-time-distance-problem.svg
[npm-url]: https://npmjs.org/package/real-time-distance-problem
[downloads-image]: https://img.shields.io/npm/dm/real-time-distance-problem.svg
[downloads-url]: https://npmjs.org/package/real-time-distance-problem

### A Real Time Distance Problem Solver

Two variables are growing at variables speeds. This solves the time A catches up to B, if at all.

## Install

``` javascript
npm install real-time-distance-problem
```

## Usage
``` javascript
import RTDP from "real-time-distance-problem"

let rtdp = new RTDP(15);

let a = 0;
let b = 50;
setInterval(() => {
    let result = rtdp(a,b);
    console.log('time till a catches up to be:', result);
    a += 10;
    b += 5;
}, 2500); // Every two and a half seconds update.

```

## ISC License (Open Source Initiative)

ISC License (ISC)
Copyright 2017 <CraigglesO>
Copyright (c) 2004-2010 by Internet Systems Consortium, Inc. ("ISC")
Copyright (c) 1995-2003 by Internet Software Consortium


Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
