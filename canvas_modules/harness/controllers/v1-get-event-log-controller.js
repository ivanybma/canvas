/*******************************************************************************
 * Licensed Materials - Property of IBM
 * (c) Copyright IBM Corporation 2017. All Rights Reserved.
 *
 * Note to U.S. Government Users Restricted Rights:
 * Use, duplication or disclosure restricted by GSA ADP Schedule
 * Contract with IBM Corp.
 *******************************************************************************/
// Modules
const log4js = require("log4js");

const logger = log4js.getLogger("v1-get-events-controller");
const constants = require("../lib/constants");

// Public Methods ------------------------------------------------------------->

module.exports.get = _get;

function _get(req, res) {
	logger.info("Retreiving event log");
	if (req.session.events) {
		res.status(constants.HTTP_STATUS_OK);
		res.json(req.session.events);
	} else {
		res.status(constants.HTTP_STATUS_NOT_FOUND);
		res.json({ error: "Unable to find event log" });
	}
}