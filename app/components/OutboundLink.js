"use client";

import { trackOutboundLink } from "./Analytics";

export default function OutboundLink({ href, className, children, toolName, ...rest }) {
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noreferrer"
      onClick={() => trackOutboundLink(href, toolName)}
      {...rest}
    >
      {children}
    </a>
  );
}
