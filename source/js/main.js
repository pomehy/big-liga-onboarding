import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';

import {initModals} from './modules/init-modals';
import {preloader} from './modules/preloader';
// Utils
// ---------------------------------

ieFix();
iosVhFix();
preloader();

// Modules
// ---------------------------------

initModals();
