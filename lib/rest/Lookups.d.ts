/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Domain = require('../base/Domain');
import TwilioClient = require('./Twilio');
import V1 = require('./lookups/V1');
import { PhoneNumberListInstance } from './lookups/v1/phoneNumber';


/**
 * Initialize lookups domain
 */
declare class Lookups extends Domain {
  /**
   * Initialize lookups domain
   *
   * @param twilio - The twilio client
   */
  constructor(twilio: TwilioClient);

  /**
   * PhoneNumber resource
   */
  readonly phoneNumbers: PhoneNumberListInstance;
  readonly v1: V1;
}

export = Lookups;
