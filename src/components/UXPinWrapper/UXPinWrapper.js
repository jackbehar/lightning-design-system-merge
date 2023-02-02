// eslint-disable-next-line no-unused-vars
import React from "react";
import IconSettings from '@salesforce/design-system-react/components/icon-settings';
import '@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css'

export default function UXPinWrapper({ children }) {
  return <IconSettings iconPath ="/assets/icons">{children}</IconSettings>;
  // return children;
}
