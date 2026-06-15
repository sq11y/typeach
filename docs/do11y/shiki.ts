import type { ThemeRegistration } from "shiki";

const colors = {
  pink: "var(--pink-70)",
  blue: "var(--turquoise-70)",
  purple: "var(--purple-70)",
  orange: "var(--orange-70)",
  neutral: "var(--fg)",
  fadedNeutral: "var(--grey-70)",
};

export const theme: ThemeRegistration = {
  name: "do11y",
  fg: "var(--fg)",
  bg: "var(--grey-10)",

  tokenColors: [
    {
      name: "Comments",
      scope: "comment",
      settings: {
        foreground: colors.fadedNeutral,
        fontStyle: "italic",
      },
    },
    {
      name: "Constants",
      scope: "constant",
      settings: {
        foreground: colors.pink,
      },
    },
    {
      name: "Escape characters",
      scope: "constant.character.escape",
      settings: {
        foreground: colors.blue,
      },
    },
    {
      name: "Named entities",
      scope: "entity.name",
      settings: {
        foreground: colors.orange,
      },
    },
    {
      name: "Function names",
      scope: "entity.name.function",
      settings: {
        foreground: colors.blue,
      },
    },
    {
      name: "Tags",
      scope: "entity.name.tag",
      settings: {
        foreground: colors.pink,
        fontStyle: "normal",
      },
    },
    {
      name: "Static types",
      scope: ["entity.name.type", "storage.type.cs"],
      settings: {
        foreground: colors.orange,
      },
    },
    {
      name: "Tag attributes",
      scope: "entity.other.attribute-name",
      settings: {
        foreground: colors.blue,
        fontStyle: "normal",
      },
    },
    {
      name: "Inherited classes",
      scope: "entity.other.inherited-class",
      settings: {
        foreground: colors.orange,
      },
    },
    {
      name: "CSS ID selectors",
      scope: "entity.other.attribute-name.id",
      settings: {
        foreground: colors.blue,
      },
    },
    {
      name: "Pseudo CSS",
      scope: [
        "entity.other.attribute-name.pseudo-element",
        "entity.other.attribute-name.pseudo-class",
      ],
      settings: {
        foreground: colors.orange,
      },
    },
    {
      name: "Numbers",
      scope: ["constant.numeric"],
      settings: {
        foreground: colors.orange,
      },
    },
    {
      name: "Variable names",
      scope: ["entity.name.variable", "variable"],
      settings: {
        foreground: colors.pink,
      },
    },
    {
      name: "Keywords",
      scope: "keyword",
      settings: {
        foreground: colors.purple,
        fontStyle: "normal",
      },
    },
    {
      name: "Operators",
      scope: "keyword.operator",
      settings: {
        foreground: colors.neutral,
      },
    },
    {
      name: "Special operators",
      scope: [
        "keyword.operator.new",
        "keyword.operator.expression",
        "keyword.operator.logical",
        "keyword.operator.delete",
      ],
      settings: {
        foreground: colors.purple,
      },
    },
    {
      name: "Units",
      scope: "keyword.other.unit",
      settings: {
        foreground: colors.pink,
      },
    },
    {
      name: "Markup headings",
      scope: ["markup.heading", "entity.name.section"],
      settings: {
        foreground: colors.pink,
      },
    },
    {
      name: "Markup bold",
      scope: "markup.bold",
      settings: {
        foreground: colors.purple,
        fontStyle: "bold",
      },
    },
    {
      name: "Markup italics",
      scope: "markup.italic",
      settings: {
        foreground: colors.blue,
        fontStyle: "italic",
      },
    },
    {
      name: "Markup code",
      scope: ["markup.inline.raw", "markup.fenced_code.block"],
      settings: {
        foreground: colors.pink,
      },
    },
    {
      name: "Markup links",
      scope: "markup.underline.link",
      settings: {
        foreground: colors.orange,
      },
    },
    {
      name: "Storage keywords",
      scope: "storage",
      settings: {
        foreground: colors.purple,
        fontStyle: "normal",
      },
    },
    {
      name: "Strings",
      scope: ["string.quoted", "string.template"],
      settings: {
        foreground: colors.orange,
      },
    },
    {
      name: "Regex",
      scope: "string.regexp",
      settings: {
        foreground: colors.pink,
      },
    },
    {
      name: "Markup link descriptions",
      scope: "string.other.link",
      settings: {
        foreground: colors.pink,
      },
    },
    {
      name: "Provided (support) values",
      scope: "support",
      settings: {
        foreground: colors.orange,
      },
    },
    {
      name: "Provided functions",
      scope: "support.function",
      settings: {
        foreground: colors.blue,
      },
    },
    {
      name: "Provieded variables",
      scope: "support.variable",
      settings: {
        foreground: colors.pink,
      },
    },
    {
      name: "Object/JSON property names",
      scope: ["support.type.property-name", "meta.object-literal.key"],
      settings: {
        foreground: colors.neutral,
      },
    },
    {
      name: "CSS property names",
      scope: "support.type.property-name.css",
      settings: {
        foreground: colors.neutral,
      },
    },
    {
      name: "Language variables",
      scope: ["variable.language"],
      settings: {
        foreground: colors.orange,
        fontStyle: "italic",
      },
    },
    {
      name: "Parameters",
      scope: "variable.parameter",
      settings: {
        fontStyle: "italic",
      },
    },
    {
      name: "Embedded template punctuation",
      scope: "string.template meta.embedded",
      settings: {
        foreground: colors.neutral,
      },
    },
    {
      name: "Tag brackets",
      scope: "punctuation.definition.tag",
      settings: {
        foreground: colors.pink,
        fontStyle: "normal",
      },
    },
    {
      name: "Key/value separators",
      scope: "punctuation.separator",
      settings: {
        foreground: colors.neutral,
      },
    },
    {
      name: "Template expressions",
      scope: "punctuation.definition.template-expression",
      settings: {
        foreground: colors.purple,
      },
    },
    {
      name: "Embedded section punctuation",
      scope: "punctuation.section.embedded",
      settings: {
        foreground: colors.purple,
      },
    },
    {
      name: "Markup list punctuation",
      scope: "punctuation.definition.list",
      settings: {
        foreground: colors.pink,
      },
    },
  ],
};
