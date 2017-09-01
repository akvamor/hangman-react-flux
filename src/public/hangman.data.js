import bar from '../imgs/bar.png';
import head from '../imgs/head.png';
import neck from '../imgs/neck.png';
import corpus from '../imgs/corpus.png';
import rightArm from '../imgs/right-arm.png';
import leftArm from '../imgs/left-arm.png';
import hand from '../imgs/right-hand.png';
import leg from '../imgs/right-leg.png';
import foot from '../imgs/right-foot.png';

const imgArray = [
  {
    src: bar,
    width: 224,
    left: -146,
    top: 0,
    zIndex: 1,
    alt: 'bar',
  },
  {
    src: head,
    width: 96,
    left: 7,
    top: -15,
    zIndex: 2,
    alt: 'head',
  },
  {
    src: neck,
    width: 23,
    left: 43,
    top: -33,
    zIndex: 1,
    alt: 'neck',
  },
  {
    src: corpus,
    width: 52,
    left: 29,
    top: -44,
    zIndex: 2,
    alt: 'corpus',
  },
  {
    src: rightArm,
    width: 63,
    left: 63,
    top: -122,
    zIndex: 1,
    alt: 'right arm',
  },
  {
    src: leftArm,
    width: 63,
    left: -14,
    top: -184,
    zIndex: 1,
    alt: 'left arm',
  },
  {
    src: hand,
    width: 15,
    left: 115,
    top: -195,
    zIndex: 0,
    alt: 'right hand',
  },
  {
    src: hand,
    width: 15,
    left: -18,
    top: -211,
    zIndex: 0,
    alt: 'left hand',
  },
  {
    src: leg,
    width: 41,
    left: 56,
    top: -202,
    zIndex: 1,
    alt: 'right leg',
  },
  {
    src: leg,
    width: 41,
    left: 13,
    top: -292,
    zIndex: 1,
    transform: 'scaleX(-1)',
    alt: 'left leg',
  },
  {
    src: foot,
    width: 42,
    left: 76,
    top: -303,
    zIndex: 0,
    alt: 'right foot',
  },
  {
    src: foot,
    width: 42,
    left: -9,
    top: -321,
    zIndex: 0,
    transform: 'scaleX(-1)',
    alt: 'left foot',
  },

];

// const imgArray = [
//   {
//     src: bar,
//     left: -255,
//     top: 0,
//     zIndex: 1,
//     alt: 'bar',
//   },
//   {
//     src: head,
//     left: 52,
//     top: -30,
//     zIndex: 2,
//     alt: 'head',
//   },
//   {
//     src: neck,
//     left: 124,
//     top: -64,
//     zIndex: 1,
//     alt: 'neck',
//   },
//   {
//     src: corpus,
//     left: 94,
//     top: -85,
//     zIndex: 2,
//     alt: 'corpus',
//   },
//   {
//     src: rightArm,
//     left: 158,
//     top: -250,
//     zIndex: 1,
//     alt: 'right arm',
//   },
//   {
//     src: leftArm,
//     left: 10,
//     top: -370,
//     zIndex: 1,
//     alt: 'left arm',
//   },
//   {
//     src: hand,
//     left: 261,
//     top: -398,
//     zIndex: 0,
//     alt: 'right hand',
//   },
//   {
//     src: hand,
//     left: 4,
//     top: -425,
//     zIndex: 0,
//     alt: 'left hand',
//   },
//   {
//     src: leg,
//     left: 149,
//     top: -410,
//     zIndex: 1,
//     alt: 'right leg',
//   },
//   {
//     src: leg,
//     left: 61,
//     top: -585,
//     zIndex: 1,
//     transform: 'scaleX(-1)',
//     alt: 'left leg',
//   },
//   {
//     src: foot,
//     left: 189,
//     top: -610,
//     zIndex: 0,
//     alt: 'right foot',
//   },
//   {
//     src: foot,
//     left: 18,
//     top: -645,
//     zIndex: 0,
//     transform: 'scaleX(-1)',
//     alt: 'left foot',
//   },

// ];

export default imgArray;