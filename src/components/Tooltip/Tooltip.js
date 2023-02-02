import React from "react";
import PropTypes from "prop-types";
import { Tooltip as TooltipM } from '@salesforce/design-system-react';

function Tooltip(props) {
  return (
    <TooltipM {...props}/>
  )
}

Tooltip.propTypes = {
  children: PropTypes.node,
  content: PropTypes.node,
  align: PropTypes.oneOf(['top', 'top left', 'top right', 'right', 'right top', 'right bottom', 'bottom', 'bottom left', 'bottom right', 'left', 'left top', 'left bottom']),
  // assistiveText
  // dialogClassName
  hasAnchoredNubbin: PropTypes.bool,
  hasStaticAlignment: PropTypes.bool,
  hoverCloseDelay: PropTypes.number,
  hoverOpenDelay: PropTypes.number,
  // id: PropTypes.string,
  // label: PropTypes.shape({
    // learnMoreAfter: PropTypes.string,
    // learnMoreBefore: PropTypes.string,
  // }),
  isOpen: PropTypes.bool,
  // onRequestTargetElement: PropTypes.func,
  // triggerClassName
  position: PropTypes.oneOf(['absolute', 'overflowBoundaryElement', 'relative']),
  // triggerStyle: PropTypes.object,
  theme: PropTypes.oneOf(['info', 'error']),
  variant: PropTypes.oneOf(['base', 'learnMore', 'list-item']),

};

export default Tooltip;