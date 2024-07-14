import { Accordion } from "./Accordion";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Molecules/Accordion",
  component: Accordion,
};

const TemplateChild = () => (
  <div>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus
    rhoncus pellentesque. Praesent id velit nec ante convallis eleifend. Quisque
    venenatis porta tristique. In maximus, quam ac varius laoreet, ipsum ligula
    aliquam orci, vel gravida ante nisl nec tortor. Cras in justo ornare,
    faucibus neque nec, faucibus orci. Praesent nibh lacus, dapibus vitae sapien
    nec, viverra pulvinar felis. Sed elementum dui magna, et ultrices elit
    egestas vel. Duis porta malesuada mattis. Morbi at nunc eget nisl laoreet
    viverra. Etiam sed lacinia lorem.
  </div>
);

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  title: "Accordion",
  argTypes: {
    label: {
      control: {
        type: "text",
      },
    },
  },
};

export const Basic: StoryObj<typeof Accordion> = {
  args: {
    label: "Accordion",
    children: <TemplateChild />,
  },
};

export const AccordionRecursion: StoryObj<typeof Accordion> = {
  args: {
    label: "Outer Accordion",
    children: (
      <>
        <TemplateChild />
        <Accordion label="Inner Accordion">
          <TemplateChild />
        </Accordion>
      </>
    ),
  },
};

// export const ActiveItem: StoryObj<typeof Accordion> = {
//   ...Basic,
//   args: {
//     ...Basic.args,

//   },
// };
