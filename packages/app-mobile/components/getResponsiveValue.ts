// getResponsiveValue() returns the corresponding value for
// a particular device screen width based on a valueMap argument
// and breakpoints.
//
// Breakpoints:
// sm: < 481px
// md: >= 481px
// lg: >= 769px
// xl: >= 1025px
// xxl: >= 1201px
//
// Eg. [ 10, 15, 20, 25, 30 ] means { sm: 10, md: 15, lg: 20, xl: 25, xxl: 30 }
// [10] and [10, 15] are equivalent to { sm: 10 } and { sm: 10, md: 15 } respectively
//
// More Info: https://discourse.joplinapp.org/t/week-4-report/26117
import { Dimensions } from 'react-native';

export interface ValueMap {
	// Value to use on small-width displays
    sm?: number;
	// Value to use on medium-width displays
    md?: number;
	// Value to use on large-width displays
    lg?: number;
	// Value to use on extra-large width displays
    xl?: number;
	// Value to use on extra-extra-large width displays
    xxl?: number;
}

export default function getResponsiveValue(valueMap: ValueMap): number {
	if (Object.keys(valueMap).length === 0) {
		throw 'valueMap cannot be an empty object!';
	}

	const width = Dimensions.get('window').width;
	let value: number;
	const { sm, md, lg, xl, xxl } = valueMap;

	// This handles cases where certain values are omitted
	if ((!!xxl) || (xxl === 0)) {
		value = xxl;
	}

	if ((!!xl) || (xl === 0)) {
		value = xl;
	}

	if ((!!lg) || (lg === 0)) {
		value = lg;
	}

	if ((!!md) || (md === 0)) {
		value = md;
	}

	if ((!!sm) || (sm === 0)) {
		value = sm;
	}

	if (width >= 481 && ((!!md) || (md === 0))) {
		value = md;
	}

	if (width >= 769 && ((!!lg) || (lg === 0))) {
		value = lg;
	}

	if (width >= 1025 && ((!!xl) || (xl === 0))) {
		value = xl;
	}

	if (width >= 1201 && ((!!xxl) || (xxl === 0))) {
		value = xxl;
	}

	return value;
}
