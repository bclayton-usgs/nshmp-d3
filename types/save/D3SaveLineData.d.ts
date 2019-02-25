/* D3SaveLineData type definitions */

import { D3LineData } from './data/D3LineData';

/**
 * Save D3LineData to a CSV file
 * 
 * Use D3SaveLineData.saveCSV
 * 
 * @class D3SaveLineData
 * @author Brandon Clayton
 */
export class D3SaveLineData {

  /**
   * @private 
   * Use D3SaveLineData.saveCSV
   *  
   * @param fileFormat The file format: 'csv'
   * @param lineDatas The D3LineData(s)
   */
  private constructor(fileFormat: string, ...lineDatas: D3LineData[]);

  /**
   * Save D3LineData(s) to CSV files.
   * 
   * @param  lineDatas The data
   */
  static saveCSV(...lineDatas: D3LineData[]): D3SaveLineData;

}
