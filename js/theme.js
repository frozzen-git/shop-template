(() => {
  "use strict";

  const bsExtraSmall = 576;
  const bsExtraLarge = 1200;

  //     window.matchMedia(`(width < ${bsExtraLarge}px)`).addEventListener('change', onMobileSizeEvent)

  //     function onMobileSizeEvent(mql) {
  // console.log(mql.media, mql.matches)
  // if (mql.matches) {

  //             document.querySelectorAll('#header-buttons .dropdown-btn').forEach((element) => {
  //             console.log(element, element.checkVisibility())
  //             // console.log(bootstrap.Dropdown.getInstance(element))
  //             //    let dropdown = bootstrap.Dropdown.getInstance(element)
  //             //    console.log(dropdown.getConfig())
  //     //         // element.addEventListener('show.bs.dropdown', (e) => {
  //     //         //     console.log(e, element)
  //     //         //     console.log(bootstrap.Dropdown.getInstance(element))
  //     //         // })
  //         })

  // }
  // else {

  // }
  //     }

  window.addEventListener("DOMContentLoaded", () => {
    [...document.querySelectorAll("#header-buttons .dropdown-toggle")].map(
      (element) =>
        new bootstrap.Dropdown(element, {
          popperConfig(defaultBsPopperConfig) {
            const newPopperConfig = Object.assign({}, defaultBsPopperConfig);
            if (window.innerWidth < bsExtraLarge) {
              if (window.innerHeight >= bsExtraSmall) {
                newPopperConfig.placement = "right";
              } else {
                newPopperConfig.placement = "top";
              }

              let offset = newPopperConfig.modifiers.find(
                (modifier) => modifier.name == "offset"
              );
              if (typeof offset !== "undefined") {
                offset.options.offset = [0, 10];
              }
            }
            return newPopperConfig;
          },
        })
    );

    //         document.querySelectorAll('#header-buttons .dropdown-btn').forEach((element) => {
    //         })
  });
})();
