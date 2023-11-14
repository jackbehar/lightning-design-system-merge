import React from "react";
import PropTypes from "prop-types";
import { BreadCrumb as BreadcrumbM } from '@salesforce/design-system-react';
function Breadcrumb(props) {


console.log(trail)
	return (
		<BreadcrumbM
		id="test"
		assistiveText={{ label: 'Two item breadcrumb' }}
		{...props}
	/>
	);
}

Breadcrumb.propTypes = {
		/**
	 * **Assistive text for accessibility.**
	 * This object is merged with the default props object on every render.
	 * * `label`: The assistive text for the breadcrumb trail.
	 */
		assistiveText: PropTypes.shape({
			label: PropTypes.string,
		}),
		/**
		 * A unique ID is needed in order to support keyboard navigation, ARIA support, and connect the dropdown to the triggering button.
		 */
		id: PropTypes.string,
		/**
		 * Overflow menu of the type [Dropdown](/components/menu-dropdowns)
		 */
		overflowDropdownMenu: PropTypes.node,
		/**
		 * Custom styles to be passed to the containing `nav` tag
		 */
		styleContainer: PropTypes.object,
		/**
		 * An array of anchor elements that define the path to the current record.
		 */
		trail: PropTypes.array,
};

Breadcrumb.defaultProps={
id: "eee",
}

export default Breadcrumb;
