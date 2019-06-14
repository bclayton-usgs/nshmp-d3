/* jQuery setup */
import jquery = require('jquery');
const $: JQueryStatic = jquery;
(<any>window).jQuery = jquery;
import bootstrap = require('bootstrap');

/** Type definitions for nshmp-d3 */
export * from './axes';
export * from './data';
export * from './legend';
export * from './options';
export * from './plot';
export * from './save';
export * from './util';
export * from './view';
