import palettePickerIcon from "./images/palette-picker-icon.png";
import palettePickerScreenshot from "./images/palette-picker.png";
import palettePickerPreview from "./images/preview-palette.png";
import forecastIcon from "./images/forecast-it-already-icon.png";
import forecastScreenshot from "./images/weather-app.png";
import forecastPreview from "./images/preview-forecast.png";
import bonVoyageIcon from "./images/plane.png";
import bonVoyageScreenshot from "./images/bon-voyage-screenshot.png";
import bonVoyagePreview from "./images/bon-voyage-preview.png";
import huddleIcon from "./images/huddle-icon.png";
import huddleScreenshot from "./images/huddle-screenshot.png";
import huddlePreview from "./images/huddle-preview.png";

export const projects = {
  palettePicker: {
    name: "Palette Picker",
    icon: palettePickerIcon,
    github: "https://github.com/AthenaC/palette-picker",
    web: "https://athenac.github.io/palette-picker/",
    screenshot: palettePickerScreenshot,
    preview: palettePickerPreview,
    description:
      "Palette Picker is a simple and intuitive web app that helps users create, customize, and save color palettes for creative projects. Whether you're a designer, artist, or color enthusiast, the app allows you to generate harmonious palettes, lock favorite colors, and store them using local storage for easy access. This ensures that saved palettes remain available across sessions, making it a versatile tool that boosts creativity, saves time, and ensures consistent color choices for projects like graphic design, web development, and more.",
  },

  weatherApp: {
    name: "FORECAST IT ALREADY!",
    icon: forecastIcon,
    github: "https://github.com/Forecast-It-Already/Forecast-It-Already",
    web: "https://forecast-it-already.github.io/Forecast-It-Already/",
    screenshot: forecastScreenshot,
    preview: forecastPreview,
    description:
      "Forecast It Already! is a user-friendly weather application that provides accurate and up-to-date weather information for any location. By utilizing three distinct API endpoints, the app delivers comprehensive data, including current conditions, hourly updates, and detailed multi-day forecasts. The clean and intuitive interface ensures that users can easily access the information they need to plan their activities, making it an invaluable tool for travelers, outdoor enthusiasts, and anyone seeking reliable weather insights.",
  },

  bonVoyage: {
    name: "Bon Voyage!",
    icon: bonVoyageIcon,
    github: "https://github.com/auteenie/bon-voyage",
    web: "https://auteenie.github.io/bon-voyage/",
    screenshot: bonVoyageScreenshot,
    preview: bonVoyagePreview,
    description:
      "Bon Voyage! is designed for explorers with a passion for travel. Our app lets users collect digital passport stamps, track their journeys, and discover new destinations. Whether you're reminiscing about past adventures or planning your next getaway, Bon Voyage! turns your travels into a beautifully curated experience.",
  },

  huddle: {
    name: "Huddle",
    icon: huddleIcon,
    github: "https://github.com/AXA-Civic-Tech/huddle",
    web: "https://huddle-fh55.onrender.com/",
    screenshot: huddleScreenshot,
    preview: huddlePreview,
    description:
      "Huddle is a civic tech platform built to connect New Yorkers through local events and shared community issues. Users can browse, post, and interact with neighborhood updates in real time. Built with the PERN stack (PostgreSQL, Express, React, Node), the app features user authentication, post creation/editing, upvoting, and interactive frontend components powered by React Router and dynamic state management.",
  },
};
