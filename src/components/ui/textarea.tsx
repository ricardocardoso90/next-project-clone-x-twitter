type Props = {
  rows: number;
  value?: string;
  placeholder: string;
};

export function Textarea({ rows, value, placeholder }: Props) {
  return (
    <div className="has-[:focus]:border-white flex items-center rounded-3xl border-2 border-gray-700">
      <textarea
        rows={rows}
        value={value}
        placeholder={placeholder}
        className="flex-1 outline-none bg-transparent h-full p-5 resize-none"
      >

      </textarea>
    </div>
  )
};