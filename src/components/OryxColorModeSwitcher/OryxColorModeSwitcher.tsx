import useTheme from "@/store/theme";

function OryxColorModeSwitcher() {
  const [, themeActions] = useTheme();

  return (
    <oryx-color-mode-selector onClick={() => { themeActions.toggle() }}></oryx-color-mode-selector>
  );
}

export default OryxColorModeSwitcher;
