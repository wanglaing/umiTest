// @ts-nocheck
import { Plugin } from '/sandbox/node_modules/umi/node_modules/@umijs/runtime';

const plugin = new Plugin({
  validKeys: ['modifyClientRenderOpts','patchRoutes','rootContainer','render','onRouteChange','getInitialState','initialStateConfig','request',],
});

export { plugin };
