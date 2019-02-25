/* Preconditions type definitions */

/**
 * Static convenience methods to check whether a method or
 *    constructor was invoked correctly.
 * 
 * If a precondition is not statisfied a NshmpError is thrown.
 * 
 * @class Preconditions
 * @author Brandon Clayton
 */
export class Preconditions {

  /** @private */
  private constructor()

  /**
   * Ensures the truth of an expression.
   * 
   * @param expression Expression to check 
   * @param errorMessage The exception message to use if the
   *    expression fails
   */
  static checkArgument(expression: boolean, errorMessage: string): void;

  /**
   * Check whether an argument is an array.
   * 
   * @param arr The array to test 
   * @param errorMessage An optional error message to show
   */
  static checkArgumentArray(arr: any[], errorMessage?: string): void;

  /**
   * Check whether an argument is an array and all elements
   *    inside are of specific type.
   * 
   * @param arr Array to check
   * @param type Type inside array to check
   */
  static checkArgumentArrayInstanceOf(arr: any[], type: object): void;

  /**
   * Check whether an array is of certain length.
   * 
   * @param arr The array to test
   * @param length The length the array should be
   */
  static checkArgumentArrayLength(arr: any[], length: number): void;

  /**
   * Check whether an argument is an array and all elements inside the
   *    array are of a specificed type.
   * 
   * @param arr The array to test 
   * @param type The type of data inside the array
   * @param errorMessage An optional error message to show
   */
  static checkArgumentArrayOf(arr: any[], type: object, errorMessage?: string): void; 

  /**
   * Check whether an argument is a boolean.
   * 
   * @param val The value to test 
   */
  static checkArgumentBoolean(val: any): void;

  /**
   * Check whether an argument is an integer.
   * 
   * @param val The value to test 
   */
  static checkArgumentInteger(val: any): void;

  /**
   * Check whether an argument is a certain instance of a type.
   * 
   * @param val The value to check 
   * @param type The type of instance the value should be
   */
  static checkArgumentInstanceOf(val: any, type: object): void;

  /**
   * Check whether an argument is a HTMLElement
   * 
   * @param val The value to check 
   */
  static checkArgumentInstanceOfHTMLElement(val: any): void;

  /**
   * Check whether an argument is a Map
   * 
   * @param val The value to check 
   */
  static checkArgumentInstanceOfMap(val: any): void;

  /**
   * Check whether an argument is a Set
   * 
   * @param {Object} val The value to check 
   */
  static checkArgumentInstanceOfSet(val: any): void;

  /**
   * Check whether an argument is a SVGElement
   * 
   * @param val The value to check 
   */
  static checkArgumentInstanceOfSVGElement(val: any): void;

  /**
   * Check whether an argument is a number.
   * 
   * @param val The value to test 
   */
  static checkArgumentNumber(val: any): void;

  /**
   * Check whether an argument is an object.
   * 
   * @param val The value to test 
   */
  static checkArgumentObject(val: any): void;

  /**
   * Check whether a property exists in an object.
   * 
   * @param obj The object to check 
   * @param property The property to see if exists
   */
  static checkArgumentObjectProperty(obj: object, property: string): void;

  /**
   * Check whether an argument is a string.
   * 
   * @param val The string to test 
   */
  static checkArgumentString(val: any): void;

  /**
   * Test whether an argument is of a specific type.
   * 
   * @param val The value to test 
   * @param type The type the value should be 
   */
  static checkArgumentTypeOf(val: any, type: string): void;

  /**
   * Check whether a value is null.
   * 
   * @param val The value to test 
   * @param errorMessage Optional error message 
   */
  static checkNotNull(val: any, errorMessage?: string): void;

  /**
   * Check whether a value is undefined.
   * 
   * @param val The value to test 
   * @param errorMessage Optional error message 
   */
  static checkNotUndefined(val: any, errorMessage?: string): void;

  /**
   * Ensures the truth of an expression.
   * 
   * @param expression Expression to check 
   * @param errorMessage The exception message to use if the
   *    expression fails
   */
  static checkState(expression: boolean, errorMessage: string): void;

  /**
   * Check whether a value is an array.
   * 
   * @param arr The array to test 
   * @param errorMessage An optional error message to show
   */
  static checkStateArray(arr: any, errorMessage?: string): void;

  /**
   * Check whether an argument is an array and all elements
   *    inside are of specific type.
   * 
   * @param arr Array to check
   * @param type Type inside array to check
   */
  static checkStateArrayInstanceOf(arr: any[], type: object): void;

  /**
   * Check whether an array is of certain length.
   * 
   * @param arr The array to test
   * @param length The length the array should be
   */
  static checkStateArrayLength(arr: any[], length: number): void;

  /**
   * Check whether a value is an array and all elements inside the
   *    array are of a specificed type.
   * 
   * @param arr The array to test 
   * @param type The type of data inside the array
   * @param errorMessage An optional error message to show
   */
  static checkStateArrayOf(arr: any[], type: string, errorMessage?: string): void;

  /**
   * Check whether a value is a boolean.
   * 
   * @param val The value to test 
   */
  static checkStateBoolean(val: any): void;

  /**
   * Check whether a value is a integer.
   * 
   * @param val The value to test 
   */
  static checkStateInteger(val: any): void;

  /**
   * Check whether a value is a certain instance of a type.
   * 
   * @param val The value to check 
   * @param type The type of instance the value should be
   */
  static checkStateInstanceOf(val: any, type: object): void;

  /**
   * Check whether an argument is a HTMLElement
   * 
   * @param val The value to check 
   */
  static checkStateInstanceOfHTMLElement(val: any): void;

  /**
   * Check whether an argument is a Map
   * 
   * @param val The value to check 
   */
  static checkStateInstanceOfMap(val: any): void;

  /**
   * Check whether an argument is a Set
   * 
   * @param val The value to check 
   */
  static checkStateInstanceOfSet(val: any): void;

  /**
   * Check whether an argument is a SVGElement
   * 
   * @param val The value to check 
   */
  static checkStateInstanceOfSVGElement(val: any): void;

  /**
   * Check whether a value is a number.
   * 
   * @param val The value to test 
   */
  static checkStateNumber(val: any): void;

  /**
   * Check whether a value is an object.
   * 
   * @param val The value to test 
   */
  static checkStateObject(val: any): void;

  /**
   * Check whether a property exists in an object.
   * 
   * @param obj The object to check 
   * @param property The property to see if exists
   */
  static checkStateObjectProperty(obj: object, property: string): void;

  /**
   * Check whether a value is a string.
   * 
   * @param val The string to test 
   */
  static checkStateString(val: any): void;

  /**
   * Test whether a value is of a specific type.
   * 
   * @param val The value to test 
   * @param type The type the value should be 
   */
  static checkStateTypeOf(val: any, type: string): void;

}
