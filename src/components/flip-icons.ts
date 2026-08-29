export type FlipMaterialIcon = {
  name: string;
  glyph: string;
  paths?: string[];
  fillPaths?: string[];
  /** Use a bundled SVG asset instead of Material Icons / inline paths. */
  svgSrc?: string;
};

/** Material Icons used on flipconnect.com.au */
export const flipWebsiteIcons: FlipMaterialIcon[] = [
  { name: "Search", glyph: "search" },
  { name: "Account", glyph: "account_circle" },
  { name: "Menu", glyph: "menu" },
  { name: "Arrow up", glyph: "keyboard_arrow_up" },
  { name: "Arrow down", glyph: "keyboard_arrow_down" },
  { name: "Chevron left", glyph: "chevron_left" },
  { name: "Chevron right", glyph: "chevron_right" },
  { name: "Person", glyph: "person" },
  { name: "Call", glyph: "call" },
  { name: "Email", glyph: "sms" },
  { name: "Mail", glyph: "email" },
  { name: "Help", glyph: "live_help" },
  {
    name: "Support",
    glyph: "headset_mic",
  },
  { name: "Cancel", glyph: "cancel" },
  { name: "Star", glyph: "star" },
  {
    name: "Diamond",
    glyph: "",
    paths: [
      "M5 9 8 5h8l3 4-7 10L5 9Z",
      "M8 5l4 4 4-4",
      "M5 9h14",
      "M12 9v10",
    ],
  },
  {
    name: "Home shield",
    glyph: "",
    paths: [
      "M4.5 11 12 4.5 19.5 11V19.5H4.5V11Z",
      "M4.5 11 12 4.5 19.5 11",
    ],
    fillPaths: ["M12 9.2 15.4 11V13.6C15.4 15.7 13.9 17.2 12 18.1 10.1 17.2 8.6 15.7 8.6 13.6V11L12 9.2Z"],
  },
  {
    name: "Check box",
    glyph: "",
    paths: [
      "M6 5.5h12.5",
      "M5.5 6.5v11a1.5 1.5 0 0 0 1.5 1.5h10a1.5 1.5 0 0 0 1.5-1.5V8.5",
      "M8.3 12.3 11.1 15 18.5 7.8",
    ],
  },
  { name: "Home", glyph: "home" },
  { name: "Wifi", glyph: "wifi" },
  { name: "Done", glyph: "check_circle" },
  { name: "Info", glyph: "info" },
  { name: "Lock", glyph: "lock" },
  { name: "Location", glyph: "location_on" },
];
