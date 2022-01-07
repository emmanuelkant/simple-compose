[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- ABOUT THE PROJECT -->
## Simple Compose

This is just a simple, zero dependency, vanilla JavaScript, 100% compatible with all browsers and straight forward compose of functions.

Here's why this exists:
1) Redux compose is awesome, but is heavy;
2) I searched for another composes libraries, but I don't find anything that I like;
3) Come on, this "library" has less than 400 bytes what more do you want?

### Built With

Vanilla Javascript and nothing more.

### Installation

1. Install the lib
   ```sh
   npm install simple-compose
   ```
   or
   ```sh
   yarn add simple-compose
   ```
2. Use it
   ```js
   import { compose } from 'simple-compose';

   /* Your code */

   export default compose(fn1, fn2, fn3, fn4, fn5, fn6, ..... f284)(mySimpleFunc)
   ```

### Note

In case you need. The function that is returned by the `compose` function, can accept as many params as you want but the subsequence function doesn't. Those functions just accept only one param, which is the param that the last function returned. See the examples below:

## Wrong :red_circle:

```js
   function fn1(param1, param2, param3) {
      /** Implementation */
   }

   function fn2(param1, param2, param3) {
      /** Implementation */
   }

   compose(fn1, fn2)('foo', 'bar', 'xar');
```

## Right :white_check_mark:

```js
   function fn1(param) {
      /** Implementation */
   }

   function fn2(param1, param2, param3) {
      /** Implementation */
   }

   compose(fn1, fn2)('foo', 'bar', 'xar');
```

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->
## Contact

Emmanuel Kant Duarte - [@emmanuelkantf](https://twitter.com/emmanuelkantf) - emmanuelkant.duarte@gmail.com

Project Link: [https://github.com/emmanuelkant/simple-compose](https://github.com/emmanuelkant/simple-compose)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[forks-shield]: https://img.shields.io/github/forks/emmanuelkant/simple-compose.svg?style=for-the-badge
[forks-url]: https://github.com/emmanuelkant/simple-compose/network/members
[stars-shield]: https://img.shields.io/github/stars/emmanuelkant/simple-compose.svg?style=for-the-badge
[stars-url]: https://github.com/emmanuelkant/simple-compose/stargazers
[license-shield]: https://img.shields.io/github/license/emmanuelkant/simple-compose.svg?style=for-the-badge
[license-url]: https://github.com/emmanuelkant/simple-compose/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/emmanuel-kant-duarte
[product-screenshot]: images/screenshot.png
