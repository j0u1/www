export default function NotFound() {
  return (
    <div className="flex justify-center items-center gap-4 text-additional mb-8">
      <span className="text-2xl">:/</span>
      <p className="flex flex-col">
        <span>Такого проекта не существует,</span>
        <span>перепроверьте введёное значение</span>
      </p>
    </div>
  )
}