import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import SelectButton from "primevue/selectbutton";
import { list, root } from "postcss";

const primevueConfig = {
  theme: {
    preset: Aura,
    options: {
      cssLayer: {
        name: "primevue",
        order: "tailwind-base, tailwind-utilities, primevue",
      },
    },
  },
  pt: {
    floatlabel: {
      root: {
        class: [
          "!flex",
          "flex-col",
          "flex-nowrap",
          "justify-start",
          "items-start",
          "mb-10 lg:mb-16",
          "[&>*:last-child]:text-surface-0 dark:[&>*:last-child]:text-white/60",
          "[&>*:last-child]:duration-500",
          /*    "[&>*:last-child]:text-xl",
          "[&>*:last-child]:lg:text-2xl",
          "[&>*:last-child]:text-surface-0 dark:[&>*:last-child]:text-white/60",
          "[&>*:last-child]:top-3/4",
          "[&>*:last-child]:-translate-y-1/2",
          "[&>*:last-child]:left-3",
          "[&>*:last-child]:pointer-events-none",
          "[&>*:last-child]:transition-all",
          "[&>*:last-child]:duration-500",
          "[&>*:last-child]:ease",
          "[&>*:last-child]:has-[:focus]:-top-3",
          "[&>*:last-child]:has-[:focus]:text-sm",
          "[&>*:last-child]:has-[.filled]:-top-3",
          "[&>*:last-child]:has-[.filled]:text-sm", */
        ],
      },
    },

    textarea: {
      root: {
        class: [
          "relative",
          "!bg-transparent",
          "!border-b-4 !border-t-0 !border-r-0 !border-l-0",
          "!rounded-none",
          "focus:border-primary hover:border-primary",
          "w-full",
          "!h-16",
          "!text-surface-0 dark:text-white/60",
          "!text-xl",
        ],
      },
    },
    button: {
      root: {
        class: [
          "mx-auto",
          "text-lg lg:text-xl",
          "bg-primary",
          "uppercase",
          "!border-0",
          "tracking-widest",
          "mt-4 lg:mt-6 mb-4",
          "duration-300",
          "hover:ease-in hover:duration-300",
          "hover:bg-[#ab6f4e]",
        ],
      },
      label: {
        class: ["!font-bold", "text-xl"],
      },
    },
    select: {
      option: {
        class: ["capitalize", "!text-iggrey", "!font-semibold"],
      },
    },
  },
};

export default function setupPrimeVue(app) {
  app.use(PrimeVue, primevueConfig);
}
