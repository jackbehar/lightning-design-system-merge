// eslint-disable-next-line no-unused-vars
import React from "react";
import { IconSettings } from '@salesforce/design-system-react';
import '@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css'
import standardSprite from '@salesforce-ux/design-system/assets/icons/standard-sprite/svg/symbols.svg';
import actionSprite from '@salesforce-ux/design-system/assets/icons/action-sprite/svg/symbols.svg';
import customSprite from '@salesforce-ux/design-system/assets/icons/custom-sprite/svg/symbols.svg';
import doctypeSprite from '@salesforce-ux/design-system/assets/icons/doctype-sprite/svg/symbols.svg';
import utilitySprite from '@salesforce-ux/design-system/assets/icons/utility-sprite/svg/symbols.svg';

export default function UXPinWrapper({ children }) {
  return (
    <IconSettings
      standardSprite={standardSprite}
      actionSprite={actionSprite}
      customSprite={customSprite}
      doctypeSprite={doctypeSprite}
      utilitySprite={utilitySprite}>
      {children}
    </IconSettings>
  )
}
