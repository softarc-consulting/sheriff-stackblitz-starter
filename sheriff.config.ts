import { SheriffConfig } from '@softarc/sheriff-core';


export const config: SheriffConfig = {
  modules: {
    'src/app': {
      'shared/<shared>': ['domain:shared'],
      '<domain>': {
        feature: ['type:feature'],
        ui: ['type:ui'],
        data: ['type:data'],
        model: ['type:model'],
      },
    }
  },
  enableBarrelLess: true,
  depRules: {
    root: ['noTag', 'type:feature'],
    noTag: 'noTag',

    'type:feature': ['type:*'],
    'type:ui': 'type:model',
    'type:data': 'type:model',
    'type:model': [],
  },
  entryFile: 'src/main.ts',
};
