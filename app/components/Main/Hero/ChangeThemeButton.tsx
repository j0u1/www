type ThemeButtonProps = {
  toggle: () => void
}

export default function ChangeThemeButton({ toggle }: ThemeButtonProps) {
  return (
    <div onClick={toggle} className="relative cursor-pointer group/theme">
      <div className="absolute rounded-full transition-all duration-300 size-5.5 bg-additional group-hover/theme:bg-accent dark:group-hover/theme:bg-additional" />
      <div
        className="relative size-5.5 duration-300 transition-all -translate-y-1.5 translate-x-1.5 dark:translate-y-0 dark:translate-x-0"
      >
        <div
          className="absolute size-5.5 rounded-full duration-300 transition-all bg-background dark:bg-additional dark:group-hover/theme:bg-accent"
        />
      </div>
    </div>
  )
}