/* NshmpError type definitions */

import { D3LinePlot } from '../D3LinePlot';

/**
 * Error class that will create a Bootstrap modal with the error message.
 * 
 * @extends Error
 * @author Brandon Clayton
 */
export class NshmpError extends Error {

  /**
   * Create a Boostrap modal with an error message.
   *  
   * @param {String} errorMessage The error message to display.
   */
  constructor(errorMessage: string)

  /** Error message */
  message: string;

  /** Error modal overlay element */
  el: HTMLElement;

  /** Error modal header element */
  headerEl: HTMLElement;

  /** Error modal body element */
  bodyEl: HTMLElement;

  /** Error modal footer element */
  footerEl: HTMLElement;

  /**
   * Check an array of web service responses to see if any web service
   *    response has "status" = "error".
   * 
   * If a web service has an error a NshmpError is thrown
   * 
   * If a web service response has status error and the 
   *    supplied plot has a method clearData, it will be invoked
   *    for the upper panel and lower panel.
   * 
   * @param responses The web service responses 
   * @param plots The plots to clear
   */
  static checkResponses(responses: object[], ...plots: D3LinePlot[] | object[]): void;

  /**
   * Check a web service response to see for "status" = "error".
   * 
   * If a web service has an error, a native JavaScript 
   *    Error is thrown to allow a catch method to catch it.
   * 
   * If a web service response has status error and the 
   *    supplied plot has a method clearData, it will be invoked
   *    for the upper panel and lower panel.
   * 
   * @param response The response 
   * @param plots The plots to clear 
   */
  static checkResponse(response: object, ...plots: D3LinePlot[] | object[]): void;

  /**
   * Convience method to throw a new NshmpError.
   * If the error message equals 'cancel' an error is not thrown,
   *    useful when canceling a Promise.
   * 
   * @param errorMessage The exception message to use
   */
  static throwError(errorMessage: string): void;

}
