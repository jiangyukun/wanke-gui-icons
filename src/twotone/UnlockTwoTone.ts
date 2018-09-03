// This icon file is generated by build/generateIcons.ts
// tslint:disable

import { IconDefinitionGetter } from '../types';
const temp: any = function UnlockTwoTone(
  primaryColor: string,
  secondaryColor: string
) {
  return {
    name: 'unlock',
    theme: 'twotone',
    nameWithTheme: 'unlock-twotone',
    tag: 'svg',
    attrs: {
      xmlns: 'http://www.w3.org/2000/svg',
      class: 'icon',
      viewBox: '0 0 1024 1024'
    },
    children: [
      {
        tag: 'path',
        attrs: {
          fill: secondaryColor,
          d:
            'M232 840h560V536H232v304zm280-226c26.5 0 48 21.5 48 48 0 16.1-7.9 30.3-20 39v53c0 4.4-3.6 8-8 8h-40c-4.4 0-8-3.6-8-8v-53c-12.1-8.7-20-22.9-20-39 0-26.5 21.5-48 48-48z'
        },
        children: []
      },
      {
        tag: 'path',
        attrs: {
          d:
            'M484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53c12.1-8.7 20-22.9 20-39 0-26.5-21.5-48-48-48s-48 21.5-48 48c0 16.1 7.9 30.3 20 39z',
          fill: primaryColor
        },
        children: []
      },
      {
        tag: 'path',
        attrs: {
          d:
            'M832 464H332V240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v68c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-68c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zm-40 376H232V536h560v304z',
          fill: primaryColor
        },
        children: []
      }
    ]
  };
};
temp.nameWithTheme = 'unlock-twotone';
const UnlockTwoTone: IconDefinitionGetter = temp;
export default UnlockTwoTone;