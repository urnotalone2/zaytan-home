import { Button, TextInput } from '@mantine/core';
import { useState } from 'react';
import tw from 'twin.macro';
interface Props {
  onClick: (value: string) => void;
}
export function SectionOneInput(props: Props) {
  const [state, setState] = useState('');
  return (
    <div className="flex gap-2 flex-col sm:flex-row">
      <TextInput
        styles={{
          root: tw` w-full sm:w-80 `,
          input: tw`py-5 focus-within:border-black`,
        }}
        placeholder="Enter your email"
        onChange={(e) => setState(e.target.value)}
      />
      <Button
        className="bg-black hover:!bg-gray-700 rounded-lg max-w-full"
        size={'md'}
        onClick={() => props.onClick(state)}
      >
        Join now
      </Button>
    </div>
  );
}