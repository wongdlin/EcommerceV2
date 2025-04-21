import { RadioGroup, Radio } from '@headlessui/react';
import { classNames } from '../utils/classNames';

function ColorPicker({selectedColor, setSelectedColor, colors}) {
  return (
    <div>
      <h3 className="text-sm font-medium text-gray-900">Color</h3>

      <fieldset aria-label="Choose a color" className="mt-4">
        <RadioGroup
          value={selectedColor}
          onChange={setSelectedColor}
          className="flex items-center gap-x-3"
        >
          {colors.map((color) => (
            <Radio
              key={color.name}
              value={color}
              aria-label={color.name}
              className={classNames(
                color.selectedClass,
                "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-hidden data-checked:ring-2 data-focus:data-checked:ring-3 data-focus:data-checked:ring-offset-1"
              )}
            >
              <span
                aria-hidden="true"
                className={classNames(
                  color.class,
                  "size-8 rounded-full border border-black/10"
                )}
              />
            </Radio>
          ))}
        </RadioGroup>
      </fieldset>
    </div>
  );
}
export default ColorPicker;
