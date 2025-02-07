import palettePickerIcon from "./images/palette-picker-icon.png";
import palettePickerScreenshot from "./images/palette-picker.png";
import palettePickerPreview from "./images/preview-palette.png";
import forecastIcon from "./images/forecast-it-already-icon.png";
import forecastScreenshot from "./images/weather-app.png";
import forecastPreview from "./images/preview-forecast.png";

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
};
