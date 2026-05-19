/**
 * ============================================================
 *  SOLOHIVE — CONFIG FILE
 *  Edit this file to set up your blog. That's it!
 * ============================================================
 */

const BLOG_CONFIG = {

  // ----------------------------------------------------------
  //  YOUR HIVE IDENTITY
  // ----------------------------------------------------------
  hiveUsername: "villasmilhfoto",          // Your Hive account name (no @)
  hiveNode:     "https://api.hive.blog", // API node (leave this as-is)

  // ----------------------------------------------------------
  //  HIVE FRONTEND
  //  Which Hive frontend to use for profile links, "Ver en Hive",
  //  @mention links, and #tag links throughout the site.
  //  Common options:
  //    "hive.blog"    — Hive
  //    "peakd.com"    — default
  //    "ecency.com"   — Ecency
  //  You can also enter any custom frontend domain e.g. "inleo.io"
  // ----------------------------------------------------------
  hiveFrontend: "hive.blog",


  //  To show posts from a Hive community instead of a single
  //  user, set hiveCommunity to the community tag e.g. "hive-123456".
  //  Leave as "" to show only your own posts (default).
  //  When set, hiveUsername is still used for your avatar/about box.
  // ----------------------------------------------------------
  hiveCommunity: "",  // e.g. "hive-174578"  — leave "" for single-user mode

  // ----------------------------------------------------------
  //  YOUR SITE
  // ----------------------------------------------------------
  siteTitle:    "VHFoto Hive",                    // Displayed in the header & browser tab
  siteTagline:  "Cree en ti... Apasionado de la fotografía y la tecnología", // Shown under the title in the header
  siteUrl:      "https://yourdomain.com",     // Your domain (used for share links)
  postsPerPage: 10,                           // Posts per page — max 19 (Hive API limit)
  defaultTag:   "",                           // Filter to one tag only — leave "" for all posts

  // ----------------------------------------------------------
  //  FAVICON
  //  URL to your favicon image. Can be a full URL or a path
  //  relative to your site e.g. "favicon.png" or "images/icon.png"
  //  Leave as "" to use the browser default (no favicon).
  //  Recommended size: 32x32 or 64x64 px. PNG or ICO format.
  // ----------------------------------------------------------
  favicon: "favicon.svg",  // e.g. "favicon.png"  or  "https://yourdomain.com/icon.png"

  // ----------------------------------------------------------
  //  COMMENT FILTER
  //  Hide comments from accounts with a reputation score at or
  //  below this value. Uses the same 0–100 scale as PeakD.
  //    0  = only hide negative-reputation accounts (PeakD default)
  //   25  = hide brand-new / untrusted accounts (good spam filter)
  //   -1  = show all comments with no filtering
  // ----------------------------------------------------------
  minCommentReputation: 20,

  // ----------------------------------------------------------
  //  SOCIAL LINKS  (leave blank "" to hide any icon)
  // ----------------------------------------------------------
  social: {
    hive:      "villasmilhfoto", // Links to hive.blog/@yourusername
    twitter:   "villasmilhfoto",  // e.g. "yourhandle"  (no @)
    instagram: "villasmilhfoto/",
    youtube:   "",
    website:   "",             // Any other URL — shown as a globe icon
  },

  // ----------------------------------------------------------
  //  SIDEBAR WIDGETS
  //  Paste any HTML snippet (AdSense, Buy Me a Coffee, Amazon
  //  Associates banners, email signup forms, etc.) into a slot.
  //  Leave a slot as "" (empty backticks) to hide it entirely.
  // ----------------------------------------------------------
  sidebar: {

    // Short bio shown at the top of the sidebar.
    aboutText: "Bienvenido a mi blog. Escribo sobre temas que me interesan. Todo el contenido se almacena en la cadena de bloques de Hive.",

    // Paste your HTML snippet between the backticks:
    widget1: ``,
    widget2: ``,
    widget3: ``,

  },

  // ----------------------------------------------------------
  //  FOOTER
  // ----------------------------------------------------------

  // Text shown in the footer on every page.
  footerText: "Desarrollado con la cadena de bloques Hive. El contenido es resistente a la censura y se almacena de forma permanente en la cadena de bloques.",

  // Footer widget — paste any HTML snippet here (e.g. a banner ad,
  // affiliate disclosure, email signup). Leave as "" to hide.
  footerWidget: ``,

};
