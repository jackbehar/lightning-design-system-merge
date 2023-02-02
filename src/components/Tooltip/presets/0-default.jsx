import * as React from "react";
import Tooltip from "../Tooltip";
import Button from "../../Button/Button"

export default (
  <Tooltip
    uxpId="tool-tip-1"
    content="I am a tooltip!">
      <Button uxpId="tool-tip-1-button" variant="neutral">I have a tooltip!</Button>
  </Tooltip>
);
