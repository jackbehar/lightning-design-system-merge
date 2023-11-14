import React from "react";
import PropTypes from "prop-types";
import { Card as CardM } from '@salesforce/design-system-react';

function Card(props) {
	return (
		<CardM {...props} />
	);
}

Card.propTypes = {
/**
	 * CSS classes to be added to the card body (wraps children).
	 */
bodyClassName: PropTypes.oneOfType([
	PropTypes.array,
	PropTypes.object,
	PropTypes.string,
]),
/**
 * The main section of the card. It often contains a `DataTable` or `Tile`.
 */
children: PropTypes.node,
/**
 * CSS classes to be added to the card.
 */
className: PropTypes.oneOfType([
	PropTypes.array,
	PropTypes.object,
	PropTypes.string,
]),
/**
 * Replaces the body (that is the children) with the specified empty state, this will also remove header actions, the filter, and the icon. If the default empty state is wanted, set to `true`.
 */
empty: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),
/**
 * Adds a filter input to the card header.
 */
filter: PropTypes.node,
/**
 * Footer often contains pagination.
 */
footer: PropTypes.node,
/**
 * Allows card to have no header, and ignores header related props altogether.
 */
hasNoHeader: PropTypes.bool,
/**
 * Allows a custom header (the media object with the icon in the first column). `icon`, `heading` and other props are passed into the media object from Card if present. Use `design-system-react/components/media-object` to create your own custom header.
 */
header: PropTypes.node,
/**
 * The heading is the name of the related item group and should only contain inline elements.
 */
heading: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
/**
 * Actions to perform on selected items or actions that are not specific to one item such as adding an item. If no group actions are needed, then the number of selected items is often present.
 */
headerActions: PropTypes.node,
/**
 * Icon associated with the items within the `body`.
 */
icon: PropTypes.node,
/**
 * Set the HTML `id` of the card. This also sets the `id` of the filter and the header actions.
 */
id: PropTypes.string,
/**
 * Custom styles to be added to the card.
 */
style: PropTypes.object,
};

export default Card;
