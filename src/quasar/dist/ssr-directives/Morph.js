/*!
 * Quasar Framework v2.0.3
 * (c) 2015-present Razvan Stoenescu
 * Released under the MIT License.
 */

'use strict';

// import { createObjectProperty } from '@vue/compiler-dom'

// export default (dir) => {
//   const name = dir.arg
//     ? '\'' + dir.arg.content.split(':')[ 0 ] + '\''
//     : false

//   return {
//     props: [
//       createObjectProperty(
//         'class',
//         `${ dir.exp.content } && ${dir.exp.content}.model === ${ name } ? '' : 'q-morph--invisible'`
//       )
//     ]
//   }
// }

// temporarily avoid importing from @vue/compiler-dom

var Morph_ssr = (dir) => {
  const name = dir.arg
    ? '\'' + dir.arg.content.split(':')[ 0 ] + '\''
    : false;

  return {
    props: [
      {
        type: 16,
        loc: {
          source: '',
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 1, offset: 0 }
        },
        key: {
          type: 4,
          loc: { source: '', start: { line: 1, column: 1, offset: 0 }, end: { line: 1, column: 1, offset: 0 } },
          content: 'class',
          isStatic: true,
          constType: 3
        },
        value: `${ dir.exp.content } && ${ dir.exp.content }.model === ${ name } ? '' : 'q-morph--invisible'`
      }
    ]
  }
};

module.exports = Morph_ssr;
