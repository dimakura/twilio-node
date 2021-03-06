/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Version = require('../../base/Version');
import { AssistantListInstance } from './understand/assistant';


/**
 * Initialize the Understand version of Preview
 */
declare class Understand extends Version {
  /**
   * Initialize the Understand version of Preview
   *
   * @param domain - The twilio domain
   */
  constructor(domain: any);

  readonly assistants: AssistantListInstance;
}

export = Understand;
