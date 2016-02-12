/**
* Roc
*
* This need to be exported for something to be considered a valid Roc package or plugin.
* There is also a requirement on that a `name` is defined and at least one more thing.
*/
export roc from './roc';

/**
* Commands
*
* This is exported for convenance so other packages can access it.
*/
export clean from './commands/clean';

/**
* Helpers
*
* This is exported for convenance so other packages can access it.
*/
export cleanPromise from './helpers/clean-promise';
export getValueFromPotentialObject from './helpers/get-value-from-potential-object';