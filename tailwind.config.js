module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: { min: "200px", max: "550px" },
      md: { min: "551px", max: "1050px" },
    },
    extend: {
      colors: {
        bluegray_51: "#edeef3",
        bluegray_50: "#edeef4",
        light_blue_300: "#56c6ff",
        red_200: "#eda08d",
        red_201: "#e4b4ac",
        red_202: "#e49689",
        red_203: "#d09383",
        deep_orange_900: "#bc5600",
        deep_purple_A201: "#6e5be9",
        deep_orange_300: "#ff9060",
        deep_purple_A400: "#7511ff",
        purple_A400: "#ff04db",
        deep_orange_101: "#ffd3c5",
        deep_purple_A200: "#7a40f2",
        deep_orange_100: "#f5cdc0",
        lime_300: "#e0ff66",
        bluegray_50_99: "#ececf499",
        amber_500: "#ffc60d",
        gray_200: "#f2f1f1",
        cyan_200: "#78ebf0",
        deep_purple_700_7f: "#3921d87f",
        indigo_50_ce: "#e6e5f1ce",
        white_A700: "#ffffff",
        deep_orange_50: "#fae0d8",
        deep_orange_51: "#ffe0d7",
        red_900: "#7b0000",
        red_101: "#fbddd4",
        red_102: "#f5d3c7",
        red_300: "#d1736e",
        red_103: "#ffd8cb",
        red_104: "#f9d9ce",
        amber_A200: "#ffd93b",
        gray_50: "#f9f9f9",
        red_100: "#fbded4",
        black_900: "#000000",
        yellow_700: "#f4c327",
        black_901: "#110809",
        gray_700_54: "#64646454",
        gray_903: "#292929",
        gray_904: "#3d2920",
        indigo_300_ce: "#7e77efce",
        gray_800_6b: "#4848486b",
        gray_901: "#090f20",
        gray_902: "#172032",
        indigo_50: "#e6e5f1",
        orange_900: "#c35901",
        gray_900: "#242424",
        bluegray_300_90: "#9897ad90",
        gray_100: "#f5f5f5",
        cyan_300: "#39cbe8",
        bluegray_301: "#9797ac",
        bluegray_300: "#9897ad",
        indigo_A401: "#424bff",
        indigo_A400: "#3d63e8",
      },
      borderRadius: {
        radius2: "2px",
        radius8: "8px",
        radius10: "10px",
        radius11: "11px",
        radius22: "22px",
        radius25: "25px",
        radius28: "28px",
        radius50: "50%",
      },
      fontFamily: { mulish: "Mulish", poppins: "Poppins", lato: "Lato" },
      letterSpacing: {
        ls1: "1px",
        ls01599999964237213: "0.1599999964237213px",
        ls00001714286336209625: "0.0001714286336209625px",
        ls05983337759971619: "0.5983337759971619px",
        ls06942856907844543: "0.6942856907844543px",
        ls07692862749099731: "0.7692862749099731px",
        ls10257149934768677: "1.0257149934768677px",
        ls000010774980910355225: "0.00010774980910355225px",
        ls010999999940395355: "0.10999999940395355px",
        ls11571428775787354: "1.1571428775787354px",
        ls011999999731779099: "0.11999999731779099px",
        ls012999999523162842: "0.12999999523162842px",
        ls014000000059604645: "0.14000000059604645px",
        ls018571433424949646: "0.18571433424949646px",
      },
      boxShadow: { bs: "0px 6px  18px 0px #7e77efce" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};