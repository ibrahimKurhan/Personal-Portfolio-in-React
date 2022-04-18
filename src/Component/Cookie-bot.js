import React from "react";

const CookieBot = ({ language = "en" }) => {
  const domainGroupId = "c42c8167-e793-4487-9f45-7032486b6ee7";

  return (
    <script
      id="Cookiebot"
      src="https://consent.cookiebot.com/uc.js"
      data-cbid={domainGroupId}
      data-blockingmode="auto"
      type="text/javascript"
      data-culture={language}
    />
  );
};

export default CookieBot;
