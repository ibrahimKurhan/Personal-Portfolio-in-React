import React, { useEffect } from "react";
import { CookieDeclarationContainer } from "./cookie-declaration.styles";
import { getProps } from "./props-extractor";

const CookieDeclaration = ({ children }) => {
  const id = "cookieDeclarationContainer";
  const items = children[0].props?.children;
  const labels = { declarationId: "declarationId", language: "language" };

  const { declarationId, language } = getProps(items, labels);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://consent.cookiebot.com/${declarationId}/cd.js`;
    script.async = true;
    script.id = "CookieDeclaration";
    script.setAttribute("data-culture", language);
    document.getElementById(id).append(script);
    return () => {
      document.getElementById(id).remove(script);
    };
  }, []);
  return <CookieDeclarationContainer id={id} />;
};

export default CookieDeclaration;
