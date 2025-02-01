import { DoughType } from "@/types";

interface DoughSelectionProps {
  dough: DoughType;
  setDough: React.Dispatch<React.SetStateAction<DoughType>>;
}

const doughOptions = [
  { label: "Traditional", value: "traditional" },
  { label: "Thin", value: "thin" },
] as const;

export const DoughSelection = ({ dough, setDough }: DoughSelectionProps) => {
  return (
    <ul className="mb-8 flex items-center justify-center lg:justify-start gap-x-12 font-medium">
      {doughOptions.map(({ label, value }) => (
        <li key={value}>
          <label
            htmlFor={value}
            className="flex items-center gap-2 cursor-pointer"
          >
            <input
              type="radio"
              name="dough"
              value={value}
              id={value}
              checked={dough === value}
              onChange={() => setDough(value)}
              className="appearance-none size-4 border border-gray-400 rounded-full checked:bg-gradient-to-r checked:from-primary checked:to-secondary checked:border-secondary"
              aria-labelledby={`${value}-label`}
            />
            <span id={`${value}-label`}>{label}</span>
          </label>
        </li>
      ))}
    </ul>
  );
};
