export default function NotFound() {
  return (
    <div className="text-additional mb-8 flex items-center justify-center gap-4">
      <span className="text-3xl text-(--additional-foreground)">:/</span>
      <p className="flex flex-col">
        <span>Такого проекта не существует,</span>
        <span>перепроверьте введёное значение</span>
      </p>
    </div>
  )
}