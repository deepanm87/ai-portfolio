import { defineField, defineType } from "sanity";

export default defineType({
  name: "navigation",
  title: "Navigation",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Link Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "href",
      title: "Link URL",
      type: "string",
      description:
        "Page anchor (e.g., '#about') or external URL (e.g., 'https://github.com/username')",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "icon",
      title: "Icon Name",
      type: "string",
      description: "Tabler icon name (e.g., 'IconHome', 'IconBrandGithub')",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "isExternal",
      title: "External Link",
      type: "boolean",
      description: "Toggle if this link goes to an external website",
      initialValue: false,
    }),
    defineField({
      name: "isVisible",
      title: "Show in Navigation",
      type: "boolean",
      description: "Toggle to show/hide this link in the navigation dock",
      initialValue: true,
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first",
      initialValue: 0,
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "href",
      order: "order",
      isVisible: "isVisible",
    },
    prepare(selection) {
      const { title, subtitle, order, isVisible } = selection;
      return {
        title: `${order}. ${title}${!isVisible ? " (Hidden)" : ""}`,
        subtitle: subtitle,
      };
    },
  },
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
});