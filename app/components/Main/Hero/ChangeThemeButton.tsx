type ThemeButtonProps = {
  toggle: () => void
}

export default function ChangeThemeButton({ toggle }: ThemeButtonProps) {
  return (
    <div className="absolute top-4 right-6.5 z-1 flex flex-col gap-4 transition-all duration-300">
      <div onClick={toggle} className="group/theme relative cursor-pointer">
        <div className="bg-additional group-hover/theme:bg-accent dark:group-hover/theme:bg-additional absolute size-5.5 rounded-full transition-all duration-300" />
        <div
          className="relative size-5.5 translate-x-1.5 -translate-y-1.5 transition-all duration-300 dark:translate-x-0 dark:translate-y-0"
        >
          <div
            className="bg-background dark:bg-additional dark:group-hover/theme:bg-accent absolute size-5.5 rounded-full transition-all duration-300"
          />
        </div>
      </div>
    </div>
  )
}