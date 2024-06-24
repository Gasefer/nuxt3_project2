let select2_auditing = document.getElementById("deliverySelect");
if (select2_auditing) {
  $(document).ready(function () {
    $(".js-example-basic-single").select2({
      language: {
        noResults: function () {
          return "Немає результатів пошуку"; // Ваш власний текст
        },
      },
    });

    // Використання Select2 API для обробки події change
    $("#deliverySelect").on("change", function () {
      let selectedValue = $(this).val();

      let novaPoshtaBlock = document.getElementById("novaPoshtaBlock");
      let courierNpBlock = document.getElementById("courierNpBlock");
      let pickupStoreBlock = document.getElementById("pickupStoreBlock");

      // Приховуємо всі блоки спочатку
      novaPoshtaBlock.style.display = "none";
      courierNpBlock.style.display = "none";
      pickupStoreBlock.style.display = "none";

      // Показуємо потрібний блок залежно від вибраного значення
      switch (selectedValue) {
        case "nova_poshta":
          novaPoshtaBlock.style.display = "block";
          break;
        case "courier_np":
          courierNpBlock.style.display = "block";
          break;
        case "pickup_store":
          pickupStoreBlock.style.display = "block";
          break;
      }
    });
    $(".js-example-basic-single-city").select2({
      placeholder: "Виберіть місто",
      language: {
        noResults: function () {
          return "Немає результатів пошуку"; // Ваш власний текст
        },
      },
    });
    $(".js-example-basic-single-viddilenya").select2({
      placeholder: "Виберіть відділення",
      language: {
        noResults: function () {
          return "Немає результатів пошуку"; // Ваш власний текст
        },
      },
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const radioContainers = document.querySelectorAll(
    ".checkout_radio-container"
  );

  radioContainers.forEach((container) => {
    const radioInput = container.querySelector(".form-check-input");
    const spanElement = container.querySelector(".checkout_radio-span");

    const updateSpanVisibility = () => {
      radioContainers.forEach((c) => {
        c.style.background = "#f8f8f8";
        c.querySelector(".checkout_radio-span").style.display = "none";
      });
      if (radioInput.checked) {
        spanElement.style.display = "block";
        container.style.background = "#E9E8E8";
      }
    };

    // Initial check to handle the state when the page loads
    updateSpanVisibility();

    // Add event listener for change events
    radioInput.addEventListener("change", updateSpanVisibility);
  });
});
