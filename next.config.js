/** @type {import('next').NextConfig} */

const {withFrameworkConfig} = require("./framework/common/config")

module.exports = withFrameworkConfig({
    framework: {
      name: process.env.NEXT_PUBLIC_FRAMEWORK
    },
  reactStrictMode: true,
  i18n: {
    locales: ["en-US", "es"],
    defaultLocale: "en-US"
  }
})

