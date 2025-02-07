import { render } from "./dom-helpers.js";
import { themeToggle } from "./theme-toggle.js";
import emailjs from "@emailjs/browser";

const handleSubmit = (event) => {
  event.preventDefault();

  const form = event.target;

  const emailData = {
    name: form.querySelector("#name").value,
    email: form.querySelector("#email").value,
    subject: form.querySelector("#subject").value,
    message: form.querySelector("#message").value,
  };

  emailjs
    .send("service_n5z3lfp", "template_ym6suwe", emailData, "qFXtcP8yUw6UGnjTK")
    .then((response) => {
      console.log("Email sent successfully!");

      const submitButton = form.querySelector(".submit");
      submitButton.textContent = "Sending...";

      setTimeout(() => {
        submitButton.textContent = "Sent!";
      }, 1000);

      form.reset();
    })
    .catch((error) => {
      console.error("Email failed to send:", error);
    });
};

const main = () => {
  render();
  document.querySelector("form").addEventListener("submit", handleSubmit);
  themeToggle();
};

main();
