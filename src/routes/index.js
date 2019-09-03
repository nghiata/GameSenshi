import { withLastLocation } from 'react-router-last-location'
import { onSignedInRouting } from 'routes/onSignedInRouting'

import { Router } from 'routes/Router'
import {
	setLastRoute,
	removeLastRoute,
	goLastRoute,
} from 'routes/getSetLastRoute'

import {
	ROUTE_PAGE_INDEX,
	ROUTE_PAGE_PROFILE,
	ROUTE_PAGE_SIGN_UP,
	ROUTE_PAGE_SIGN_IN,
	ROUTE_PAGE_SETTINGS,
	ROUTE_PAGE_SETTINGS_COMMON,
	ROUTE_PAGE_SETTINGS_GENERAL,
	ROUTE_PAGE_SETTINGS_PAYMENT,
	ROUTE_PAGE_SETTINGS_ACCOUNT,
	ROUTE_PAGE_SETTINGS_NOTIFICATION,
	ROUTE_PAGE_PASSWORD_RESET,
	ROUTE_PAGE_404,
	history,
} from 'routes/constants'

export {
	Router,
	history,
	withLastLocation,
	onSignedInRouting,
	setLastRoute,
	removeLastRoute,
	goLastRoute,
	ROUTE_PAGE_INDEX,
	ROUTE_PAGE_PROFILE,
	ROUTE_PAGE_SIGN_UP,
	ROUTE_PAGE_SIGN_IN,
	ROUTE_PAGE_SETTINGS,
	ROUTE_PAGE_SETTINGS_COMMON,
	ROUTE_PAGE_SETTINGS_GENERAL,
	ROUTE_PAGE_SETTINGS_PAYMENT,
	ROUTE_PAGE_SETTINGS_ACCOUNT,
	ROUTE_PAGE_SETTINGS_NOTIFICATION,
	ROUTE_PAGE_PASSWORD_RESET,
	ROUTE_PAGE_404,
}
