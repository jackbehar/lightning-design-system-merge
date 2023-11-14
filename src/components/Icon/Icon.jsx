import React from "react";
import PropTypes from "prop-types";
import { Icon as IconM } from '@salesforce/design-system-react';

function Icon(props) {
	return (
		<IconM {...props} />
	);
}
// ### Prop Types
Icon.propTypes = {

	/**
	 * Icon category from [lightningdesignsystem.com/icons/](https://www.lightningdesignsystem.com/icons/)
	 */
	category: PropTypes.oneOf([
		'action',
		'custom',
		'doctype',
		'standard',
		'utility',
	]).isRequired,
	/**
	 * Name of the icon. Visit <a href='http://www.lightningdesignsystem.com/resources/icons'>Lightning Design System Icons</a> to reference icon names.
	 */
	name: PropTypes.string,
	/**
	  * Size of the icon. Visit [lightningdesignsystem.com/components/icons/#flavor-sizes](https://www.lightningdesignsystem.com/components/icons/#flavor-sizes)
	  */
	size: PropTypes.oneOf(['xx-small', 'x-small', 'small', 'medium', 'large']),
	/**
	 * Icon color variants
	 */
	colorVariant: PropTypes.oneOf([
		'base',
		'default',
		'error',
		'light',
		'warning',
		'success',
	]),
	/**
	 * CSS classes that are applied to the SVG.
	 * @uxpinignoreprop 
	 */
	className: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.object,
		PropTypes.string,
	]),
	/**
	 * CSS classes that are applied to the span.
	 * @uxpinignoreprop 
	 */
	containerClassName: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.object,
		PropTypes.string,
	]),
	/**
	 * Styles that are applied to the span.
	 * @uxpinignoreprop 
	 */
	containerStyle: PropTypes.object,

	/**
	 * A custom SVG object to use instead of the supplied SLDS icons, look in `design-system-react/icons` for examples and syntax.
	 * @uxpinignoreprop  
	*/
	icon: PropTypes.object,
	/**
	 * Setting `inverse` to true will switch the color of the icon: light to dark, dark to light.
	 */
	inverse: PropTypes.bool,

	/**
	 * Path to the icon. This will override any global icon settings
	 * @uxpinignoreprop 
	 */
	path: PropTypes.string,
	/**
	 * Background theme color for the icon. **Only compatible with icon category `standard`**
	 * @uxpinignoreprop  
	*/
	productTheme: PropTypes.string,

	/**
	 * Custom styles to be passed to the SVG. Could be used to change icon or background color.
	 */
	style: PropTypes.object,
	/**
	 * Title attribute for the icon container
	 */
	title: PropTypes.string,
	/**
	 * **Assistive text for accessibility.**
	 * This object is merged with the default props object on every render.
	 * * `label`: Text that is visually hidden but read aloud by screenreaders to tell the user what the icon means. Naked icons must have assistive text, however, if you also have visible descriptive text with the icon, declare this prop as <code>assistiveText=''</code>.
	 */
	assistiveText: PropTypes.shape({
		label: PropTypes.string,
	}),
};


export default Icon;
