import P from '../../UI/Heading/P';
import { FrownIcon } from 'lucide-react';

export default function NotFound({ className }: { className?: string }) {
  return (
    <div className={`col-span-full flex min-h-24 ${className ?? ''}`}>
      <P className="m-auto flex size-fit items-center gap-2">
        Такого проекта не существует <FrownIcon className="size-6" />
      </P>
    </div>
  );
}
