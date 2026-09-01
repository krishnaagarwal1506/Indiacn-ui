// Registry of UI components for documentation
import * as React from 'react';

export interface IRegistryEntry {
  name: string;
  description: string;
  type: 'registry:ui' | 'registry:example' | 'registry:style';
  component: React.ComponentType<any> | React.LazyExoticComponent<React.ComponentType<any>> | null;
  code?: string;
  registryDependencies?: string[];
  files?: Array<{
    path: string;
    type: string;
    target: string;
  }>;
  categories?: string[];
  meta?: Record<string, any>;
}

import { AccordionDefault, AccordionMultiple } from '@/components/examples/accordion-demo';
import { AccordionBorderless } from '@/components/examples/accordion-demo';
import {
  AlertAdditionalContent,
  AlertDefault,
  AlertDismissible,
  AlertSimple,
  AlertThemes,
  AlertWithIcon,
  AlertWithLink,
} from '@/components/examples/alert-demo';
import {
  AvatarDefault,
  AvatarGroupDemo,
  AvatarShapes,
  AvatarSizes,
  AvatarWithBadge,
} from '@/components/examples/avatar-demo';
import {
  BadgeDefault,
  BadgeHeadings,
  BadgeOutlined,
  BadgePill,
  BadgeSizes,
  BadgeThemes,
  BadgeVariants,
} from '@/components/examples/badge-demo';
import {
  BreadcrumbCustomSeparator,
  BreadcrumbDefault,
  BreadcrumbWithEllipsis,
} from '@/components/examples/breadcrumb-demo';
import {
  ButtonDefault,
  ButtonLoading,
  ButtonSizes,
  ButtonThemes,
  ButtonVariants,
  ButtonWithIcons,
} from '@/components/examples/button-demo';
import {
  ButtonGroupDefault,
  ButtonGroupThemes,
  ButtonGroupToolbar,
  ButtonGroupVertical,
} from '@/components/examples/button-group-demo';
import { CardDefault, CardGrid, CardSimple, CardWithImage } from '@/components/examples/card-demo';
import { CardElevated } from '@/components/examples/card-demo';
import {
  CarouselAutoPlay,
  CarouselDark,
  CarouselDefault,
} from '@/components/examples/carousel-demo';
import {
  CheckboxDefault,
  CheckboxGroup,
  CheckboxStates,
} from '@/components/examples/checkbox-demo';
import {
  ChipDefault,
  ChipDismissible,
  ChipDisabled,
  ChipSelectable,
  ChipSizes,
  ChipThemes,
  ChipVariants,
  ChipWithIcon,
} from '@/components/examples/chip-demo';
import { CollapseDefault } from '@/components/examples/collapse-demo';
import {
  DropdownDark,
  DropdownDefault,
  DropdownDisabledItems,
  DropdownWithShortcuts,
} from '@/components/examples/dropdown-demo';
import {
  EmptyStateCustomMedia,
  EmptyStateDefault,
  EmptyStateWithAction,
  EmptyStateWithDescription,
} from '@/components/examples/empty-state-demo';
import {
  IndicatorAttached,
  IndicatorCounts,
  IndicatorDefault,
  IndicatorThemes,
} from '@/components/examples/indicator-demo';
import {
  InputDefault,
  InputSizes,
  InputStates,
  InputWithIcons,
} from '@/components/examples/input-demo';
import {
  ListGroupActionable,
  ListGroupActive,
  ListGroupContextual,
  ListGroupDefault,
  ListGroupDisabled,
  ListGroupFlush,
  ListGroupWithBadges,
} from '@/components/examples/list-group-demo';
import { ModalDefault, ModalScrollable, ModalSizes } from '@/components/examples/modal-demo';
import {
  OffcanvasBodyScroll,
  OffcanvasDefault,
  OffcanvasSides,
} from '@/components/examples/offcanvas-demo';
import {
  PaginationDefault,
  PaginationJoined,
  PaginationSizes,
  PaginationWithEllipsis,
} from '@/components/examples/pagination-demo';
import { PopoverDefault, PopoverPlacements } from '@/components/examples/popover-demo';
import {
  ProgressDefault,
  ProgressMultiple,
  ProgressSizes,
  ProgressStriped,
  ProgressThemes,
  ProgressWithLabel,
} from '@/components/examples/progress-demo';
import {
  RadioGroupDefault,
  RadioGroupDisabled,
  RadioGroupHorizontal,
} from '@/components/examples/radio-group-demo';
import { SearchDefault, SearchSizes } from '@/components/examples/search-demo';
import { SearchWithTrailingActions } from '@/components/examples/search-demo';
import {
  SeparatorDefault,
  SeparatorInList,
  SeparatorVertical,
} from '@/components/examples/separator-demo';
import { SkeletonCard, SkeletonDefault, SkeletonList } from '@/components/examples/skeleton-demo';
import {
  SpinnerDefault,
  SpinnerGrow,
  SpinnerSizes,
  SpinnerThemes,
} from '@/components/examples/spinner-demo';
import {
  StepperDefault,
  StepperVertical,
  StepperWarning,
} from '@/components/examples/stepper-demo';
import { SwitchDefault, SwitchDisabled, SwitchSizes } from '@/components/examples/switch-demo';
import {
  TabsDefault,
  TabsDisabled,
  TabsPills,
  TabsUnderline,
} from '@/components/examples/tabs-demo';
import {
  TextareaDefault,
  TextareaStates,
  TextareaWithCount,
} from '@/components/examples/textarea-demo';
import { ToastDefault, ToastSimple, ToastThemes } from '@/components/examples/toast-demo';
import { ToastStatuses } from '@/components/examples/toast-demo';
import {
  TooltipDefault,
  TooltipPlacements,
  TooltipThemes,
} from '@/components/examples/tooltip-demo';
import {
  TypographyBlockquote,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyInlineCode,
  TypographyLarge,
  TypographyLead,
  TypographyList,
  TypographyMuted,
  TypographyP,
  TypographySmall,
  TypographyTable,
} from '@/components/examples/typography-demo';
import { Accordion } from '@/components/ui/accordion';
import { Alert, AlertDescription, AlertLink, AlertTitle } from '@/components/ui/alert';
import { Avatar } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/button-group';
import { Card } from '@/components/ui/card';
import { Carousel } from '@/components/ui/carousel';
import { Checkbox } from '@/components/ui/checkbox';
import { Chip } from '@/components/ui/chip';
import { Collapse } from '@/components/ui/collapse';
import { Dropdown } from '@/components/ui/dropdown';
import { EmptyState } from '@/components/ui/empty-state';
import { Indicator } from '@/components/ui/indicator';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ListGroup } from '@/components/ui/list-group';
import { Modal } from '@/components/ui/modal';
import { Offcanvas } from '@/components/ui/offcanvas';
import { Pagination } from '@/components/ui/pagination';
import { Popover } from '@/components/ui/popover';
import { Progress, ProgressBar } from '@/components/ui/progress';
import { RadioGroup } from '@/components/ui/radio-group';
import { Search } from '@/components/ui/search';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { Spinner } from '@/components/ui/spinner';
import { Stepper } from '@/components/ui/stepper';
import { Switch } from '@/components/ui/switch';
import { Tabs } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Toast } from '@/components/ui/toast';
import { Tooltip } from '@/components/ui/tooltip';
import {
  Body1,
  Body2,
  Body3,
  Display1,
  Display2,
  Display3,
  Display4,
  Display5,
  Display6,
  Headline1,
  Headline2,
  Headline3,
  Headline4,
  Headline5,
  Headline6,
  Label1,
  Label2,
  Label3,
  Title1,
  Title2,
  Title3,
} from '@/components/ui/typography';

export const Index: Record<string, IRegistryEntry> = {
  // ── UI components ──────────────────────────────────────────────
  badge: {
    name: 'badge',
    description: 'Small count and labeling component',
    type: 'registry:ui',
    component: Badge,
    files: [{ path: 'components/ui/badge.tsx', type: 'registry:ui', target: '' }],
  },
  alert: {
    name: 'alert',
    description: 'Contextual feedback message component',
    type: 'registry:ui',
    component: Alert,
    files: [{ path: 'components/ui/alert.tsx', type: 'registry:ui', target: '' }],
  },
  'alert-title': {
    name: 'alert-title',
    description: 'Alert title subcomponent',
    type: 'registry:ui',
    component: AlertTitle,
    files: [{ path: 'components/ui/alert.tsx', type: 'registry:ui', target: '' }],
  },
  'alert-description': {
    name: 'alert-description',
    description: 'Alert description subcomponent',
    type: 'registry:ui',
    component: AlertDescription,
    files: [{ path: 'components/ui/alert.tsx', type: 'registry:ui', target: '' }],
  },
  'alert-link': {
    name: 'alert-link',
    description: 'Alert link subcomponent',
    type: 'registry:ui',
    component: AlertLink,
    files: [{ path: 'components/ui/alert.tsx', type: 'registry:ui', target: '' }],
  },
  breadcrumb: {
    name: 'breadcrumb',
    description: 'Navigation breadcrumb component',
    type: 'registry:ui',
    component: Breadcrumb,
    files: [{ path: 'components/ui/breadcrumb.tsx', type: 'registry:ui', target: '' }],
  },
  spinner: {
    name: 'spinner',
    description: 'Loading spinner indicator',
    type: 'registry:ui',
    component: Spinner,
    files: [{ path: 'components/ui/spinner.tsx', type: 'registry:ui', target: '' }],
  },
  progress: {
    name: 'progress',
    description: 'Progress bar component',
    type: 'registry:ui',
    component: Progress,
    files: [{ path: 'components/ui/progress.tsx', type: 'registry:ui', target: '' }],
  },
  'progress-bar': {
    name: 'progress-bar',
    description: 'Individual progress bar segment',
    type: 'registry:ui',
    component: ProgressBar,
    files: [{ path: 'components/ui/progress.tsx', type: 'registry:ui', target: '' }],
  },
  chip: {
    name: 'chip',
    description: 'Compact chip/tag element',
    type: 'registry:ui',
    component: Chip,
    files: [{ path: 'components/ui/chip.tsx', type: 'registry:ui', target: '' }],
  },
  accordion: {
    name: 'accordion',
    description: 'Collapsible content sections',
    type: 'registry:ui',
    component: Accordion,
    files: [{ path: 'components/ui/accordion.tsx', type: 'registry:ui', target: '' }],
  },
  card: {
    name: 'card',
    description: 'Flexible content container',
    type: 'registry:ui',
    component: Card,
    files: [{ path: 'components/ui/card.tsx', type: 'registry:ui', target: '' }],
  },
  pagination: {
    name: 'pagination',
    description: 'Page navigation component',
    type: 'registry:ui',
    component: Pagination,
    files: [{ path: 'components/ui/pagination.tsx', type: 'registry:ui', target: '' }],
  },
  'button-group': {
    name: 'button-group',
    description: 'Group buttons together',
    type: 'registry:ui',
    component: ButtonGroup,
    files: [{ path: 'components/ui/button-group.tsx', type: 'registry:ui', target: '' }],
  },
  'list-group': {
    name: 'list-group',
    description: 'List collection component',
    type: 'registry:ui',
    component: ListGroup,
    files: [{ path: 'components/ui/list-group.tsx', type: 'registry:ui', target: '' }],
  },
  modal: {
    name: 'modal',
    description: 'Dialog overlay component',
    type: 'registry:ui',
    component: Modal,
    files: [{ path: 'components/ui/modal.tsx', type: 'registry:ui', target: '' }],
  },
  dropdown: {
    name: 'dropdown',
    description: 'Dropdown menu component',
    type: 'registry:ui',
    component: Dropdown,
    files: [{ path: 'components/ui/dropdown.tsx', type: 'registry:ui', target: '' }],
  },
  tabs: {
    name: 'tabs',
    description: 'Tabbed content component',
    type: 'registry:ui',
    component: Tabs,
    files: [{ path: 'components/ui/tabs.tsx', type: 'registry:ui', target: '' }],
  },
  toast: {
    name: 'toast',
    description: 'Notification toast component',
    type: 'registry:ui',
    component: Toast,
    files: [{ path: 'components/ui/toast.tsx', type: 'registry:ui', target: '' }],
  },
  tooltip: {
    name: 'tooltip',
    description: 'Hover tooltip component',
    type: 'registry:ui',
    component: Tooltip,
    files: [{ path: 'components/ui/tooltip.tsx', type: 'registry:ui', target: '' }],
  },
  popover: {
    name: 'popover',
    description: 'Floating content panel',
    type: 'registry:ui',
    component: Popover,
    files: [{ path: 'components/ui/popover.tsx', type: 'registry:ui', target: '' }],
  },
  collapse: {
    name: 'collapse',
    description: 'Collapsible content toggle',
    type: 'registry:ui',
    component: Collapse,
    files: [{ path: 'components/ui/collapse.tsx', type: 'registry:ui', target: '' }],
  },
  offcanvas: {
    name: 'offcanvas',
    description: 'Sliding panel component',
    type: 'registry:ui',
    component: Offcanvas,
    files: [{ path: 'components/ui/offcanvas.tsx', type: 'registry:ui', target: '' }],
  },
  search: {
    name: 'search',
    description: 'Search input component',
    type: 'registry:ui',
    component: Search,
    files: [{ path: 'components/ui/search.tsx', type: 'registry:ui', target: '' }],
  },
  stepper: {
    name: 'stepper',
    description: 'Step progress indicator',
    type: 'registry:ui',
    component: Stepper,
    files: [{ path: 'components/ui/stepper.tsx', type: 'registry:ui', target: '' }],
  },
  skeleton: {
    name: 'skeleton',
    description: 'Loading placeholder animation',
    type: 'registry:ui',
    component: Skeleton,
    files: [{ path: 'components/ui/skeleton.tsx', type: 'registry:ui', target: '' }],
  },
  separator: {
    name: 'separator',
    description: 'Visual content divider',
    type: 'registry:ui',
    component: Separator,
    files: [{ path: 'components/ui/separator.tsx', type: 'registry:ui', target: '' }],
  },
  button: {
    name: 'button',
    description: 'A reusable button component with multiple variants and sizes',
    type: 'registry:ui',
    component: Button,
    files: [{ path: 'components/ui/button.tsx', type: 'registry:ui', target: '' }],
  },
  body1: {
    name: 'body1',
    description: 'Body typography component for regular text',
    type: 'registry:ui',
    component: Body1,
    files: [{ path: 'components/ui/typography.tsx', type: 'registry:ui', target: '' }],
  },
  body2: {
    name: 'body2',
    description: 'Body typography component for secondary text',
    type: 'registry:ui',
    component: Body2,
    files: [{ path: 'components/ui/typography.tsx', type: 'registry:ui', target: '' }],
  },
  body3: {
    name: 'body3',
    description: 'Body typography component for small text',
    type: 'registry:ui',
    component: Body3,
    files: [{ path: 'components/ui/typography.tsx', type: 'registry:ui', target: '' }],
  },
  display1: {
    name: 'display1',
    description: 'Large display typography for hero sections',
    type: 'registry:ui',
    component: Display1,
    files: [{ path: 'components/ui/typography.tsx', type: 'registry:ui', target: '' }],
  },
  display2: {
    name: 'display2',
    description: 'Display typography for large headings',
    type: 'registry:ui',
    component: Display2,
    files: [{ path: 'components/ui/typography.tsx', type: 'registry:ui', target: '' }],
  },
  display3: {
    name: 'display3',
    description: 'Display typography for medium-large headings',
    type: 'registry:ui',
    component: Display3,
    files: [{ path: 'components/ui/typography.tsx', type: 'registry:ui', target: '' }],
  },
  display4: {
    name: 'display4',
    description: 'Display typography for prominent headings',
    type: 'registry:ui',
    component: Display4,
    files: [{ path: 'components/ui/typography.tsx', type: 'registry:ui', target: '' }],
  },
  display5: {
    name: 'display5',
    description: 'Display typography for section headings',
    type: 'registry:ui',
    component: Display5,
    files: [{ path: 'components/ui/typography.tsx', type: 'registry:ui', target: '' }],
  },
  display6: {
    name: 'display6',
    description: 'Display typography for smaller display headings',
    type: 'registry:ui',
    component: Display6,
    files: [{ path: 'components/ui/typography.tsx', type: 'registry:ui', target: '' }],
  },
  headline1: {
    name: 'headline1',
    description: 'Headline typography for main page headings',
    type: 'registry:ui',
    component: Headline1,
    files: [{ path: 'components/ui/typography.tsx', type: 'registry:ui', target: '' }],
  },
  headline2: {
    name: 'headline2',
    description: 'Headline typography for section headings',
    type: 'registry:ui',
    component: Headline2,
    files: [{ path: 'components/ui/typography.tsx', type: 'registry:ui', target: '' }],
  },
  headline3: {
    name: 'headline3',
    description: 'Headline typography for subsection headings',
    type: 'registry:ui',
    component: Headline3,
    files: [{ path: 'components/ui/typography.tsx', type: 'registry:ui', target: '' }],
  },
  headline4: {
    name: 'headline4',
    description: 'Headline typography for card headings',
    type: 'registry:ui',
    component: Headline4,
    files: [{ path: 'components/ui/typography.tsx', type: 'registry:ui', target: '' }],
  },
  headline5: {
    name: 'headline5',
    description: 'Headline typography for component headings',
    type: 'registry:ui',
    component: Headline5,
    files: [{ path: 'components/ui/typography.tsx', type: 'registry:ui', target: '' }],
  },
  headline6: {
    name: 'headline6',
    description: 'Headline typography for small headings',
    type: 'registry:ui',
    component: Headline6,
    files: [{ path: 'components/ui/typography.tsx', type: 'registry:ui', target: '' }],
  },
  label1: {
    name: 'label1',
    description: 'Label typography for button and form text',
    type: 'registry:ui',
    component: Label1,
    files: [{ path: 'components/ui/typography.tsx', type: 'registry:ui', target: '' }],
  },
  label2: {
    name: 'label2',
    description: 'Label typography for small buttons and tags',
    type: 'registry:ui',
    component: Label2,
    files: [{ path: 'components/ui/typography.tsx', type: 'registry:ui', target: '' }],
  },
  label3: {
    name: 'label3',
    description: 'Label typography for tiny labels and captions',
    type: 'registry:ui',
    component: Label3,
    files: [{ path: 'components/ui/typography.tsx', type: 'registry:ui', target: '' }],
  },
  title1: {
    name: 'title1',
    description: 'Title typography for list items and card titles',
    type: 'registry:ui',
    component: Title1,
    files: [{ path: 'components/ui/typography.tsx', type: 'registry:ui', target: '' }],
  },
  title2: {
    name: 'title2',
    description: 'Title typography for buttons and form labels',
    type: 'registry:ui',
    component: Title2,
    files: [{ path: 'components/ui/typography.tsx', type: 'registry:ui', target: '' }],
  },
  title3: {
    name: 'title3',
    description: 'Title typography for compact headings',
    type: 'registry:ui',
    component: Title3,
    files: [{ path: 'components/ui/typography.tsx', type: 'registry:ui', target: '' }],
  },

  // ── Typography examples ────────────────────────────────────────
  H1: {
    name: 'H1',
    description: 'Heading 1 example',
    type: 'registry:example',
    component: TypographyH1,
    code: `import { Headline1 } from '@/components/ui/typography';

export default function Component() {
  return <Headline1>Taxing Laughter: The Joke Tax Chronicles</Headline1>;
}`,
    files: [
      { path: 'components/examples/typography-demo.tsx', type: 'registry:example', target: '' },
    ],
  },
  H2: {
    name: 'H2',
    description: 'Heading 2 example',
    type: 'registry:example',
    component: TypographyH2,
    code: `import { Headline2 } from '@/components/ui/typography';

export default function Component() {
  return <Headline2>The People of the Kingdom</Headline2>;
}`,
    files: [
      { path: 'components/examples/typography-demo.tsx', type: 'registry:example', target: '' },
    ],
  },
  H3: {
    name: 'H3',
    description: 'Heading 3 example',
    type: 'registry:example',
    component: TypographyH3,
    code: `import { Headline3 } from '@/components/ui/typography';

export default function Component() {
  return <Headline3>The Joke Tax</Headline3>;
}`,
    files: [
      { path: 'components/examples/typography-demo.tsx', type: 'registry:example', target: '' },
    ],
  },
  Paragraph: {
    name: 'Paragraph',
    description: 'Paragraph example',
    type: 'registry:example',
    component: TypographyP,
    code: `import { Body1 } from '@/components/ui/typography';

export default function Component() {
  return (
    <Body1>
      The king, seeing how much happier his subjects were, realized the error of
      his ways and repealed the joke tax.
    </Body1>
  );
}`,
    files: [
      { path: 'components/examples/typography-demo.tsx', type: 'registry:example', target: '' },
    ],
  },
  Blockquote: {
    name: 'Blockquote',
    description: 'Blockquote example',
    type: 'registry:example',
    component: TypographyBlockquote,
    code: `import { Body1 } from '@/components/ui/typography';

export default function Component() {
  return (
    <blockquote className="border-l-4 border-zinc-300 pl-4 italic dark:border-zinc-700">
      <Body1>
        "After all," he said, "everyone enjoys a good joke, so it's only fair
        that they should pay for the privilege."
      </Body1>
    </blockquote>
  );
}`,
    files: [
      { path: 'components/examples/typography-demo.tsx', type: 'registry:example', target: '' },
    ],
  },
  Table: {
    name: 'Table',
    description: 'Table example',
    type: 'registry:example',
    component: TypographyTable,
    code: `import { Title2, Body2 } from '@/components/ui/typography';

export default function Component() {
  return (
    <div className="w-full overflow-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="h-12 px-4 text-left align-middle font-medium">
              <Title2>King's Treasury</Title2>
            </th>
            <th className="h-12 px-4 text-left align-middle font-medium">
              <Title2>People's happiness</Title2>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="p-4 align-middle"><Body2>Empty</Body2></td>
            <td className="p-4 align-middle"><Body2>Overflowing</Body2></td>
          </tr>
          <tr className="border-b">
            <td className="p-4 align-middle"><Body2>Modest</Body2></td>
            <td className="p-4 align-middle"><Body2>Satisfied</Body2></td>
          </tr>
          <tr>
            <td className="p-4 align-middle"><Body2>Full</Body2></td>
            <td className="p-4 align-middle"><Body2>Ecstatic</Body2></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}`,
    files: [
      { path: 'components/examples/typography-demo.tsx', type: 'registry:example', target: '' },
    ],
  },
  List: {
    name: 'List',
    description: 'List example',
    type: 'registry:example',
    component: TypographyList,
    code: `import { Body2 } from '@/components/ui/typography';

export default function Component() {
  return (
    <ul className="ml-6 list-disc [&>li]:mt-2">
      <li><Body2>1st level of puns: 5 gold coins</Body2></li>
      <li><Body2>2nd level of jokes: 10 gold coins</Body2></li>
      <li><Body2>3rd level of one-liners: 20 gold coins</Body2></li>
    </ul>
  );
}`,
    files: [
      { path: 'components/examples/typography-demo.tsx', type: 'registry:example', target: '' },
    ],
  },
  'Inline Code': {
    name: 'Inline Code',
    description: 'Inline code example',
    type: 'registry:example',
    component: TypographyInlineCode,
    code: `import { Body1 } from '@/components/ui/typography';

export default function Component() {
  return (
    <Body1>
      Run the following command:{' '}
      <code className="relative rounded bg-zinc-100 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold dark:bg-zinc-800">
        npm install
      </code>
    </Body1>
  );
}`,
    files: [
      { path: 'components/examples/typography-demo.tsx', type: 'registry:example', target: '' },
    ],
  },
  Lead: {
    name: 'Lead',
    description: 'Lead text example',
    type: 'registry:example',
    component: TypographyLead,
    code: `import { Display3 } from '@/components/ui/typography';

export default function Component() {
  return (
    <Display3 className="text-muted-foreground">
      A modal dialog that interrupts the user with important content and expects a response.
    </Display3>
  );
}`,
    files: [
      { path: 'components/examples/typography-demo.tsx', type: 'registry:example', target: '' },
    ],
  },
  Large: {
    name: 'Large',
    description: 'Large text example',
    type: 'registry:example',
    component: TypographyLarge,
    code: `import { Title1 } from '@/components/ui/typography';

export default function Component() {
  return <Title1>Are you absolutely sure?</Title1>;
}`,
    files: [
      { path: 'components/examples/typography-demo.tsx', type: 'registry:example', target: '' },
    ],
  },
  Small: {
    name: 'Small',
    description: 'Small text example',
    type: 'registry:example',
    component: TypographySmall,
    code: `import { Label1 } from '@/components/ui/typography';

export default function Component() {
  return <Label1>Email address</Label1>;
}`,
    files: [
      { path: 'components/examples/typography-demo.tsx', type: 'registry:example', target: '' },
    ],
  },
  Muted: {
    name: 'Muted',
    description: 'Muted text example',
    type: 'registry:example',
    component: TypographyMuted,
    code: `import { Body2 } from '@/components/ui/typography';

export default function Component() {
  return <Body2 className="text-muted-foreground">Enter your email address.</Body2>;
}`,
    files: [
      { path: 'components/examples/typography-demo.tsx', type: 'registry:example', target: '' },
    ],
  },

  // ── Badge examples ────────────────────────────────────────────
  BadgeDefault: {
    name: 'BadgeDefault',
    description: 'Default badge example',
    type: 'registry:example',
    component: BadgeDefault,
    code: `import { Badge } from '@/components/ui/badge';

export default function Component() {
  return <Badge>Badge</Badge>;
}`,
    files: [{ path: 'components/examples/badge-demo.tsx', type: 'registry:example', target: '' }],
  },
  BadgeVariants: {
    name: 'BadgeVariants',
    description: 'Badge variants example',
    type: 'registry:example',
    component: BadgeVariants,
    code: `import { Badge } from '@/components/ui/badge';

export default function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge variant="filled">Filled</Badge>
      <Badge variant="outlined">Outlined</Badge>
      <Badge variant="tonal">Tonal</Badge>
    </div>
  );
}`,
    files: [{ path: 'components/examples/badge-demo.tsx', type: 'registry:example', target: '' }],
  },
  BadgeThemes: {
    name: 'BadgeThemes',
    description: 'Badge themes example',
    type: 'registry:example',
    component: BadgeThemes,
    code: `import { Badge } from '@/components/ui/badge';

export default function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge theme="primary">Primary</Badge>
      <Badge theme="secondary">Secondary</Badge>
      <Badge theme="success">Success</Badge>
      <Badge theme="danger">Danger</Badge>
      <Badge theme="warning">Warning</Badge>
    </div>
  );
}`,
    files: [{ path: 'components/examples/badge-demo.tsx', type: 'registry:example', target: '' }],
  },
  BadgeOutlined: {
    name: 'BadgeOutlined',
    description: 'Badge outlined example',
    type: 'registry:example',
    component: BadgeOutlined,
    code: `import { Badge } from '@/components/ui/badge';

export default function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge variant="outlined" theme="primary">Primary</Badge>
      <Badge variant="outlined" theme="secondary">Secondary</Badge>
      <Badge variant="outlined" theme="success">Success</Badge>
      <Badge variant="outlined" theme="danger">Danger</Badge>
      <Badge variant="outlined" theme="warning">Warning</Badge>
    </div>
  );
}`,
    files: [{ path: 'components/examples/badge-demo.tsx', type: 'registry:example', target: '' }],
  },
  BadgePill: {
    name: 'BadgePill',
    description: 'Badge pill shape example',
    type: 'registry:example',
    component: BadgePill,
    code: `import { Badge } from '@/components/ui/badge';

export default function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge shape="pill" theme="primary">Primary</Badge>
      <Badge shape="pill" theme="secondary">Secondary</Badge>
      <Badge shape="pill" theme="success">Success</Badge>
      <Badge shape="pill" theme="danger">Danger</Badge>
      <Badge shape="pill" theme="warning">Warning</Badge>
    </div>
  );
}`,
    files: [{ path: 'components/examples/badge-demo.tsx', type: 'registry:example', target: '' }],
  },
  BadgeSizes: {
    name: 'BadgeSizes',
    description: 'Badge sizes example',
    type: 'registry:example',
    component: BadgeSizes,
    code: `import { Badge } from '@/components/ui/badge';

export default function Component() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  );
}`,
    files: [{ path: 'components/examples/badge-demo.tsx', type: 'registry:example', target: '' }],
  },
  BadgeHeadings: {
    name: 'BadgeHeadings',
    description: 'Badges inside heading elements',
    type: 'registry:example',
    component: BadgeHeadings,
    files: [{ path: 'components/examples/badge-demo.tsx', type: 'registry:example', target: '' }],
  },

  // ── Alert examples ────────────────────────────────────────────
  AlertDefault: {
    name: 'AlertDefault',
    description: 'Default alert example',
    type: 'registry:example',
    component: AlertDefault,
    code: `import { Info } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

export default function Component() {
  return (
    <Alert theme="primary">
      <Info className="size-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>You can add components to your app using the cli.</AlertDescription>
    </Alert>
  );
}`,
    files: [{ path: 'components/examples/alert-demo.tsx', type: 'registry:example', target: '' }],
  },
  AlertThemes: {
    name: 'AlertThemes',
    description: 'Alert themes example',
    type: 'registry:example',
    component: AlertThemes,
    code: `import { AlertCircle, CheckCircle2, Info, TriangleAlert } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

export default function Component() {
  return (
    <div className="flex w-full flex-col gap-4">
      <Alert theme="primary">
        <Info className="size-4" />
        <AlertTitle>Info</AlertTitle>
        <AlertDescription>This is a primary alert for general information.</AlertDescription>
      </Alert>
      <Alert theme="success">
        <CheckCircle2 className="size-4" />
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>Your changes have been saved successfully.</AlertDescription>
      </Alert>
      <Alert theme="danger">
        <AlertCircle className="size-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Something went wrong. Please try again.</AlertDescription>
      </Alert>
      <Alert theme="warning">
        <TriangleAlert className="size-4" />
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>Your session is about to expire.</AlertDescription>
      </Alert>
    </div>
  );
}`,
    files: [{ path: 'components/examples/alert-demo.tsx', type: 'registry:example', target: '' }],
  },
  AlertDismissible: {
    name: 'AlertDismissible',
    description: 'Dismissible alert example',
    type: 'registry:example',
    component: AlertDismissible,
    code: `import { CheckCircle2 } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

export default function Component() {
  return (
    <Alert theme="success" dismissible>
      <CheckCircle2 className="size-4" />
      <AlertTitle>Success!</AlertTitle>
      <AlertDescription>Your changes have been saved.</AlertDescription>
    </Alert>
  );
}`,
    files: [{ path: 'components/examples/alert-demo.tsx', type: 'registry:example', target: '' }],
  },
  AlertWithLink: {
    name: 'AlertWithLink',
    description: 'Alert with link example',
    type: 'registry:example',
    component: AlertWithLink,
    code: `import { Info } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription, AlertLink } from '@/components/ui/alert';

export default function Component() {
  return (
    <Alert theme="primary">
      <Info className="size-4" />
      <AlertTitle>Update available</AlertTitle>
      <AlertDescription>
        A new version is available. <AlertLink href="#">Update now</AlertLink>.
      </AlertDescription>
    </Alert>
  );
}`,
    files: [{ path: 'components/examples/alert-demo.tsx', type: 'registry:example', target: '' }],
  },
  AlertSimple: {
    name: 'AlertSimple',
    description: 'Simple alert without title',
    type: 'registry:example',
    component: AlertSimple,
    code: `import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function Component() {
  return (
    <Alert theme="danger">
      <AlertCircle className="size-4" />
      <AlertDescription>Your session has expired. Please log in again.</AlertDescription>
    </Alert>
  );
}`,
    files: [{ path: 'components/examples/alert-demo.tsx', type: 'registry:example', target: '' }],
  },
  AlertAdditionalContent: {
    name: 'AlertAdditionalContent',
    description: 'Alert with additional content and horizontal rule',
    type: 'registry:example',
    component: AlertAdditionalContent,
    files: [{ path: 'components/examples/alert-demo.tsx', type: 'registry:example', target: '' }],
  },
  AlertWithIcon: {
    name: 'AlertWithIcon',
    description: 'Alert with inline icon layout',
    type: 'registry:example',
    component: AlertWithIcon,
    files: [{ path: 'components/examples/alert-demo.tsx', type: 'registry:example', target: '' }],
  },

  // ── Breadcrumb examples ───────────────────────────────────────
  BreadcrumbDefault: {
    name: 'BreadcrumbDefault',
    description: 'Default breadcrumb example',
    type: 'registry:example',
    component: BreadcrumbDefault,
    code: `import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem,
  BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

export default function Component() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem><BreadcrumbLink href="#">Home</BreadcrumbLink></BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem><BreadcrumbLink href="#">Components</BreadcrumbLink></BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem><BreadcrumbPage>Breadcrumb</BreadcrumbPage></BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}`,
    files: [
      { path: 'components/examples/breadcrumb-demo.tsx', type: 'registry:example', target: '' },
    ],
  },
  BreadcrumbCustomSeparator: {
    name: 'BreadcrumbCustomSeparator',
    description: 'Breadcrumb with custom separator',
    type: 'registry:example',
    component: BreadcrumbCustomSeparator,
    code: `import { Slash } from 'lucide-react';
import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem,
  BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

export default function Component() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem><BreadcrumbLink href="#">Home</BreadcrumbLink></BreadcrumbItem>
        <BreadcrumbSeparator><Slash className="size-3.5" /></BreadcrumbSeparator>
        <BreadcrumbItem><BreadcrumbLink href="#">Components</BreadcrumbLink></BreadcrumbItem>
        <BreadcrumbSeparator><Slash className="size-3.5" /></BreadcrumbSeparator>
        <BreadcrumbItem><BreadcrumbPage>Breadcrumb</BreadcrumbPage></BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}`,
    files: [
      { path: 'components/examples/breadcrumb-demo.tsx', type: 'registry:example', target: '' },
    ],
  },
  BreadcrumbWithEllipsis: {
    name: 'BreadcrumbWithEllipsis',
    description: 'Breadcrumb with ellipsis',
    type: 'registry:example',
    component: BreadcrumbWithEllipsis,
    code: `import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink,
  BreadcrumbPage, BreadcrumbSeparator, BreadcrumbEllipsis,
} from '@/components/ui/breadcrumb';

export default function Component() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem><BreadcrumbLink href="#">Home</BreadcrumbLink></BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem><BreadcrumbEllipsis /></BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem><BreadcrumbLink href="#">Components</BreadcrumbLink></BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem><BreadcrumbPage>Breadcrumb</BreadcrumbPage></BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}`,
    files: [
      { path: 'components/examples/breadcrumb-demo.tsx', type: 'registry:example', target: '' },
    ],
  },

  // ── Spinner examples ──────────────────────────────────────────
  SpinnerDefault: {
    name: 'SpinnerDefault',
    description: 'Default spinner example',
    type: 'registry:example',
    component: SpinnerDefault,
    code: `import { Spinner } from '@/components/ui/spinner';

export default function Component() {
  return <Spinner />;
}`,
    files: [{ path: 'components/examples/spinner-demo.tsx', type: 'registry:example', target: '' }],
  },
  SpinnerThemes: {
    name: 'SpinnerThemes',
    description: 'Spinner themes example',
    type: 'registry:example',
    component: SpinnerThemes,
    code: `import { Spinner } from '@/components/ui/spinner';

export default function Component() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Spinner theme="primary" />
      <Spinner theme="secondary" />
      <Spinner theme="success" />
      <Spinner theme="danger" />
      <Spinner theme="warning" />
      <Spinner theme="neutral" />
    </div>
  );
}`,
    files: [{ path: 'components/examples/spinner-demo.tsx', type: 'registry:example', target: '' }],
  },
  SpinnerGrow: {
    name: 'SpinnerGrow',
    description: 'Growing spinner example',
    type: 'registry:example',
    component: SpinnerGrow,
    code: `import { Spinner } from '@/components/ui/spinner';

export default function Component() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Spinner variant="grow" theme="primary" />
      <Spinner variant="grow" theme="secondary" />
      <Spinner variant="grow" theme="success" />
      <Spinner variant="grow" theme="danger" />
      <Spinner variant="grow" theme="warning" />
    </div>
  );
}`,
    files: [{ path: 'components/examples/spinner-demo.tsx', type: 'registry:example', target: '' }],
  },
  SpinnerSizes: {
    name: 'SpinnerSizes',
    description: 'Spinner sizes example',
    type: 'registry:example',
    component: SpinnerSizes,
    code: `import { Spinner } from '@/components/ui/spinner';

export default function Component() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>
  );
}`,
    files: [{ path: 'components/examples/spinner-demo.tsx', type: 'registry:example', target: '' }],
  },

  // ── Progress examples ─────────────────────────────────────────
  ProgressDefault: {
    name: 'ProgressDefault',
    description: 'Default progress example',
    type: 'registry:example',
    component: ProgressDefault,
    code: `import { Progress } from '@/components/ui/progress';

export default function Component() {
  return <Progress value={60} />;
}`,
    files: [
      { path: 'components/examples/progress-demo.tsx', type: 'registry:example', target: '' },
    ],
  },
  ProgressWithLabel: {
    name: 'ProgressWithLabel',
    description: 'Progress with label example',
    type: 'registry:example',
    component: ProgressWithLabel,
    code: `import { Progress } from '@/components/ui/progress';

export default function Component() {
  return <Progress value={60} showLabel height="1.25rem" />;
}`,
    files: [
      { path: 'components/examples/progress-demo.tsx', type: 'registry:example', target: '' },
    ],
  },
  ProgressThemes: {
    name: 'ProgressThemes',
    description: 'Progress themes example',
    type: 'registry:example',
    component: ProgressThemes,
    code: `import { Progress, ProgressBar } from '@/components/ui/progress';

export default function Component() {
  return (
    <div className="flex w-full flex-col gap-4">
      <Progress value={20}><ProgressBar theme="primary" value={20} /></Progress>
      <Progress value={40}><ProgressBar theme="success" value={40} /></Progress>
      <Progress value={60}><ProgressBar theme="warning" value={60} /></Progress>
      <Progress value={80}><ProgressBar theme="danger" value={80} /></Progress>
    </div>
  );
}`,
    files: [
      { path: 'components/examples/progress-demo.tsx', type: 'registry:example', target: '' },
    ],
  },
  ProgressStriped: {
    name: 'ProgressStriped',
    description: 'Striped progress example',
    type: 'registry:example',
    component: ProgressStriped,
    code: `import { Progress, ProgressBar } from '@/components/ui/progress';

export default function Component() {
  return (
    <div className="flex w-full flex-col gap-4">
      <Progress value={30}><ProgressBar theme="primary" striped value={30} /></Progress>
      <Progress value={50}><ProgressBar theme="success" striped value={50} /></Progress>
      <Progress value={70}><ProgressBar theme="warning" striped animated value={70} /></Progress>
    </div>
  );
}`,
    files: [
      { path: 'components/examples/progress-demo.tsx', type: 'registry:example', target: '' },
    ],
  },
  ProgressMultiple: {
    name: 'ProgressMultiple',
    description: 'Multiple progress bars example',
    type: 'registry:example',
    component: ProgressMultiple,
    code: `import { Progress, ProgressBar } from '@/components/ui/progress';

export default function Component() {
  return (
    <Progress value={100}>
      <ProgressBar theme="primary" value={30} />
      <ProgressBar theme="success" value={20} />
      <ProgressBar theme="warning" value={15} />
    </Progress>
  );
}`,
    files: [
      { path: 'components/examples/progress-demo.tsx', type: 'registry:example', target: '' },
    ],
  },
  ProgressSizes: {
    name: 'ProgressSizes',
    description: 'Progress sizes example',
    type: 'registry:example',
    component: ProgressSizes,
    code: `import { Progress } from '@/components/ui/progress';

export default function Component() {
  return (
    <div className="flex w-full flex-col gap-4">
      <Progress value={50} height="0.25rem" />
      <Progress value={50} height="0.5rem" />
      <Progress value={50} height="1rem" />
      <Progress value={50} height="1.5rem" showLabel />
    </div>
  );
}`,
    files: [
      { path: 'components/examples/progress-demo.tsx', type: 'registry:example', target: '' },
    ],
  },

  // ── Chip examples ─────────────────────────────────────────────
  ChipDefault: {
    name: 'ChipDefault',
    description: 'Default chip example',
    type: 'registry:example',
    component: ChipDefault,
    code: `import { Chip } from '@/components/ui/chip';

export default function Component() {
  return <Chip>Label</Chip>;
}`,
    files: [{ path: 'components/examples/chip-demo.tsx', type: 'registry:example', target: '' }],
  },
  ChipVariants: {
    name: 'ChipVariants',
    description: 'Chip variants example',
    type: 'registry:example',
    component: ChipVariants,
    code: `import { Chip } from '@/components/ui/chip';

export default function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Chip variant="filled">Filled</Chip>
      <Chip variant="outlined">Outlined</Chip>
      <Chip variant="tonal">Tonal</Chip>
    </div>
  );
}`,
    files: [{ path: 'components/examples/chip-demo.tsx', type: 'registry:example', target: '' }],
  },
  ChipThemes: {
    name: 'ChipThemes',
    description: 'Chip themes example',
    type: 'registry:example',
    component: ChipThemes,
    code: `import { Chip } from '@/components/ui/chip';

export default function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Chip theme="primary">Primary</Chip>
      <Chip theme="secondary">Secondary</Chip>
      <Chip theme="success">Success</Chip>
      <Chip theme="danger">Danger</Chip>
      <Chip theme="warning">Warning</Chip>
    </div>
  );
}`,
    files: [{ path: 'components/examples/chip-demo.tsx', type: 'registry:example', target: '' }],
  },
  ChipSizes: {
    name: 'ChipSizes',
    description: 'Chip sizes example',
    type: 'registry:example',
    component: ChipSizes,
    code: `import { Chip } from '@/components/ui/chip';

export default function Component() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Chip size="sm">Small</Chip>
      <Chip size="md">Medium</Chip>
      <Chip size="lg">Large</Chip>
    </div>
  );
}`,
    files: [{ path: 'components/examples/chip-demo.tsx', type: 'registry:example', target: '' }],
  },
  ChipWithIcon: {
    name: 'ChipWithIcon',
    description: 'Chip with icon example',
    type: 'registry:example',
    component: ChipWithIcon,
    code: `import { Check, Star, User } from 'lucide-react';
import { Chip } from '@/components/ui/chip';

export default function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Chip icon={<Star />}>Favourite</Chip>
      <Chip icon={<Check />} theme="success">Approved</Chip>
      <Chip icon={<User />} theme="secondary">User</Chip>
    </div>
  );
}`,
    files: [{ path: 'components/examples/chip-demo.tsx', type: 'registry:example', target: '' }],
  },
  ChipDismissible: {
    name: 'ChipDismissible',
    description: 'Dismissible chip example',
    type: 'registry:example',
    component: ChipDismissible,
    code: `import { Check } from 'lucide-react';
import { Chip } from '@/components/ui/chip';

export default function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Chip onDismiss={() => {}}>Dismissible</Chip>
      <Chip onDismiss={() => {}} theme="danger">Remove</Chip>
      <Chip onDismiss={() => {}} theme="success" icon={<Check />}>Approved</Chip>
    </div>
  );
}`,
    files: [{ path: 'components/examples/chip-demo.tsx', type: 'registry:example', target: '' }],
  },
  ChipDisabled: {
    name: 'ChipDisabled',
    description: 'Disabled chip example',
    type: 'registry:example',
    component: ChipDisabled,
    code: `import { Chip } from '@/components/ui/chip';

export default function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Chip disabled>Disabled</Chip>
      <Chip disabled variant="filled">Disabled Filled</Chip>
    </div>
  );
}`,
    files: [{ path: 'components/examples/chip-demo.tsx', type: 'registry:example', target: '' }],
  },
  ChipSelectable: {
    name: 'ChipSelectable',
    description: 'Selectable chip toggle example',
    type: 'registry:example',
    component: ChipSelectable,
    files: [{ path: 'components/examples/chip-demo.tsx', type: 'registry:example', target: '' }],
  },

  // ── Accordion examples ────────────────────────────────────────
  AccordionDefault: {
    name: 'AccordionDefault',
    description: 'Default accordion example',
    type: 'registry:example',
    component: AccordionDefault,
    code: `import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

export default function Component() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>Yes. It comes with default styles that match the UX4G design system.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>Yes. It uses CSS animations for smooth transitions.</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}`,
    files: [
      { path: 'components/examples/accordion-demo.tsx', type: 'registry:example', target: '' },
    ],
  },
  AccordionMultiple: {
    name: 'AccordionMultiple',
    description: 'Multiple accordion example',
    type: 'registry:example',
    component: AccordionMultiple,
    code: `import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

export default function Component() {
  return (
    <Accordion type="multiple" className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Can I open multiple items?</AccordionTrigger>
        <AccordionContent>Yes. Set type="multiple" to allow multiple items open at once.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How does it work?</AccordionTrigger>
        <AccordionContent>Each item maintains its own state independently.</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}`,
    files: [
      { path: 'components/examples/accordion-demo.tsx', type: 'registry:example', target: '' },
    ],
  },

  // ── Card examples ─────────────────────────────────────────────
  CardDefault: {
    name: 'CardDefault',
    description: 'Default card example',
    type: 'registry:example',
    component: CardDefault,
    code: `import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';

export default function Component() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here.</CardDescription>
      </CardHeader>
      <CardContent><p className="text-sm">Card content.</p></CardContent>
      <CardFooter><Button size="sm">Action</Button></CardFooter>
    </Card>
  );
}`,
    files: [{ path: 'components/examples/card-demo.tsx', type: 'registry:example', target: '' }],
  },
  CardWithImage: {
    name: 'CardWithImage',
    description: 'Card with image example',
    type: 'registry:example',
    component: CardWithImage,
    code: `import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Component() {
  return (
    <Card className="w-[350px] overflow-hidden">
      <div className="h-48 bg-neutral-100">Image Placeholder</div>
      <CardHeader>
        <CardTitle>Card with Image</CardTitle>
        <CardDescription>Supporting text.</CardDescription>
      </CardHeader>
      <CardContent><p className="text-sm">Content text.</p></CardContent>
      <CardFooter className="gap-2">
        <Button size="sm">Primary</Button>
        <Button size="sm" variant="outlined">Secondary</Button>
      </CardFooter>
    </Card>
  );
}`,
    files: [{ path: 'components/examples/card-demo.tsx', type: 'registry:example', target: '' }],
  },
  CardSimple: {
    name: 'CardSimple',
    description: 'Simple card example',
    type: 'registry:example',
    component: CardSimple,
    code: `import { Card, CardContent } from '@/components/ui/card';

export default function Component() {
  return (
    <Card className="w-[350px]">
      <CardContent className="pt-6">
        <p className="text-sm">Simple card with only body content.</p>
      </CardContent>
    </Card>
  );
}`,
    files: [{ path: 'components/examples/card-demo.tsx', type: 'registry:example', target: '' }],
  },
  CardGrid: {
    name: 'CardGrid',
    description: 'Card grid layout example',
    type: 'registry:example',
    component: CardGrid,
    code: `import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export default function Component() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {['Primary', 'Secondary', 'Tertiary'].map((title) => (
        <Card key={title}>
          <CardHeader><CardTitle>{title}</CardTitle><CardDescription>Card description</CardDescription></CardHeader>
          <CardContent><p className="text-sm">Content for the card.</p></CardContent>
        </Card>
      ))}
    </div>
  );
}`,
    files: [{ path: 'components/examples/card-demo.tsx', type: 'registry:example', target: '' }],
  },

  // ── Pagination examples ───────────────────────────────────────
  PaginationDefault: {
    name: 'PaginationDefault',
    description: 'Default pagination example',
    type: 'registry:example',
    component: PaginationDefault,
    code: `import {
import { Label1 } from '@/components/ui/typography';

export default function Component() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href='#' />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#'>1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#' isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#'>3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href='#' />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}`,
    files: [
      { path: 'components/examples/pagination-demo.tsx', type: 'registry:example', target: '' },
    ],
  },
  PaginationWithEllipsis: {
    name: 'PaginationWithEllipsis',
    description: 'Pagination with ellipsis',
    type: 'registry:example',
    component: PaginationWithEllipsis,
    code: `import {
import { Label1 } from '@/components/ui/typography';

export default function Component() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href='#' />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#'>1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#'>2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#' isActive>
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#'>8</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href='#' />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}`,
    files: [
      { path: 'components/examples/pagination-demo.tsx', type: 'registry:example', target: '' },
    ],
  },
  PaginationSizes: {
    name: 'PaginationSizes',
    description: 'Pagination sizes example',
    type: 'registry:example',
    component: PaginationSizes,
    code: `import {
import { Label1 } from '@/components/ui/typography';

export default function Component() {
  return (
    <div className='flex flex-col gap-4'>
      <Pagination size='sm'>
        <PaginationContent>
          <PaginationItem>
            <PaginationLink href='#'>1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href='#' isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href='#'>3</PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      <Pagination size='lg'>
        <PaginationContent>
          <PaginationItem>
            <PaginationLink href='#'>1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href='#' isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href='#'>3</PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}`,
    files: [
      { path: 'components/examples/pagination-demo.tsx', type: 'registry:example', target: '' },
    ],
  },
  PaginationJoined: {
    name: 'PaginationJoined',
    description: 'Bootstrap-style pagination with shared borders',
    type: 'registry:example',
    component: PaginationJoined,
    code: `import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { Label1 } from '@/components/ui/typography';

export default function Component() {
  return (
    <Pagination variant='joined'>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href='#' aria-label='Previous page'>
            <Label1 className='sr-only'>Previous</Label1>
          </PaginationPrevious>
        </PaginationItem>
        {['1', '2', '3', '4', '5', '6', '7', '8'].map(page => (
          <PaginationItem key={page}>
            <PaginationLink href='#' isActive={page === '4'}>
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext href='#' aria-label='Next page'>
            <Label1 className='sr-only'>Next</Label1>
          </PaginationNext>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}`,
    files: [
      { path: 'components/examples/pagination-demo.tsx', type: 'registry:example', target: '' },
    ],
  },

  // ── Button examples ───────────────────────────────────────────
  ButtonDefault: {
    name: 'ButtonDefault',
    description: 'Default button example',
    type: 'registry:example',
    component: ButtonDefault,
    code: `import { Button } from '@/components/ui/button';

export default function Component() {
  return <Button>Primary Action</Button>;
}`,
    files: [{ path: 'components/examples/button-demo.tsx', type: 'registry:example', target: '' }],
  },
  ButtonVariants: {
    name: 'ButtonVariants',
    description: 'Button variant examples',
    type: 'registry:example',
    component: ButtonVariants,
    code: `import { Button } from '@/components/ui/button';

export default function Component() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button>Filled</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="tonal">Tonal</Button>
      <Button variant="text">Text</Button>
    </div>
  );
}`,
    files: [{ path: 'components/examples/button-demo.tsx', type: 'registry:example', target: '' }],
  },
  ButtonThemes: {
    name: 'ButtonThemes',
    description: 'Button theme examples',
    type: 'registry:example',
    component: ButtonThemes,
    code: `import { Button } from '@/components/ui/button';

export default function Component() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button theme="primary">Primary</Button>
      <Button theme="success">Success</Button>
      <Button theme="destructive">Destructive</Button>
    </div>
  );
}`,
    files: [{ path: 'components/examples/button-demo.tsx', type: 'registry:example', target: '' }],
  },
  ButtonSizes: {
    name: 'ButtonSizes',
    description: 'Button size examples',
    type: 'registry:example',
    component: ButtonSizes,
    code: `import { Button } from '@/components/ui/button';

export default function Component() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  );
}`,
    files: [{ path: 'components/examples/button-demo.tsx', type: 'registry:example', target: '' }],
  },
  ButtonWithIcons: {
    name: 'ButtonWithIcons',
    description: 'Buttons with icons',
    type: 'registry:example',
    component: ButtonWithIcons,
    code: `import { ArrowRight, Download, Search } from 'lucide-react';

import { Button } from '@/components/ui/button';

export default function Component() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button prefixIcon={<Search className="size-4" />}>Search</Button>
      <Button variant="outlined" suffixIcon={<ArrowRight className="size-4" />}>
        Continue
      </Button>
      <Button iconButton aria-label="Download">
        <Download className="size-4" />
      </Button>
    </div>
  );
}`,
    files: [{ path: 'components/examples/button-demo.tsx', type: 'registry:example', target: '' }],
  },
  ButtonLoading: {
    name: 'ButtonLoading',
    description: 'Loading and disabled button states',
    type: 'registry:example',
    component: ButtonLoading,
    code: `import { Button } from '@/components/ui/button';

export default function Component() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button loading>Submitting</Button>
      <Button variant="outlined" disabled>
        Disabled
      </Button>
    </div>
  );
}`,
    files: [{ path: 'components/examples/button-demo.tsx', type: 'registry:example', target: '' }],
  },

  // ── Button Group examples ─────────────────────────────────────
  ButtonGroupDefault: {
    name: 'ButtonGroupDefault',
    description: 'Default button group example',
    type: 'registry:example',
    component: ButtonGroupDefault,
    code: `import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/button-group';

export default function Component() {
  return (
    <ButtonGroup>
      <Button variant="outlined">Left</Button>
      <Button variant="outlined">Middle</Button>
      <Button variant="outlined">Right</Button>
    </ButtonGroup>
  );
}`,
    files: [
      { path: 'components/examples/button-group-demo.tsx', type: 'registry:example', target: '' },
    ],
  },
  ButtonGroupThemes: {
    name: 'ButtonGroupThemes',
    description: 'Button group themes example',
    type: 'registry:example',
    component: ButtonGroupThemes,
    code: `import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/button-group';

export default function Component() {
  return (
    <div className="flex flex-col gap-4">
      <ButtonGroup>
        <Button>Left</Button><Button>Middle</Button><Button>Right</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outlined">Left</Button><Button variant="outlined">Middle</Button><Button variant="outlined">Right</Button>
      </ButtonGroup>
    </div>
  );
}`,
    files: [
      { path: 'components/examples/button-group-demo.tsx', type: 'registry:example', target: '' },
    ],
  },
  ButtonGroupVertical: {
    name: 'ButtonGroupVertical',
    description: 'Vertical button group example',
    type: 'registry:example',
    component: ButtonGroupVertical,
    code: `import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/button-group';

export default function Component() {
  return (
    <ButtonGroup orientation="vertical">
      <Button variant="outlined">Top</Button>
      <Button variant="outlined">Middle</Button>
      <Button variant="outlined">Bottom</Button>
    </ButtonGroup>
  );
}`,
    files: [
      { path: 'components/examples/button-group-demo.tsx', type: 'registry:example', target: '' },
    ],
  },
  ButtonGroupToolbar: {
    name: 'ButtonGroupToolbar',
    description: 'Button toolbar example',
    type: 'registry:example',
    component: ButtonGroupToolbar,
    code: `import { Button } from '@/components/ui/button';
import { ButtonGroup, ButtonToolbar } from '@/components/ui/button-group';

export default function Component() {
  return (
    <ButtonToolbar>
      <ButtonGroup>
        <Button size="sm">1</Button><Button size="sm">2</Button><Button size="sm">3</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button size="sm" variant="outlined">4</Button><Button size="sm" variant="outlined">5</Button>
      </ButtonGroup>
    </ButtonToolbar>
  );
}`,
    files: [
      { path: 'components/examples/button-group-demo.tsx', type: 'registry:example', target: '' },
    ],
  },

  // ── List Group examples ───────────────────────────────────────
  ListGroupDefault: {
    name: 'ListGroupDefault',
    description: 'Default list group example',
    type: 'registry:example',
    component: ListGroupDefault,
    code: `import { ListGroup, ListGroupItem } from '@/components/ui/list-group';

export default function Component() {
  return (
    <ListGroup className="w-full max-w-sm">
      <ListGroupItem>An item</ListGroupItem>
      <ListGroupItem>A second item</ListGroupItem>
      <ListGroupItem>A third item</ListGroupItem>
    </ListGroup>
  );
}`,
    files: [
      { path: 'components/examples/list-group-demo.tsx', type: 'registry:example', target: '' },
    ],
  },
  ListGroupActive: {
    name: 'ListGroupActive',
    description: 'Active list group example',
    type: 'registry:example',
    component: ListGroupActive,
    code: `import { ListGroup, ListGroupItem } from '@/components/ui/list-group';

export default function Component() {
  return (
    <ListGroup className="w-full max-w-sm">
      <ListGroupItem active>An active item</ListGroupItem>
      <ListGroupItem>A second item</ListGroupItem>
    </ListGroup>
  );
}`,
    files: [
      { path: 'components/examples/list-group-demo.tsx', type: 'registry:example', target: '' },
    ],
  },
  ListGroupDisabled: {
    name: 'ListGroupDisabled',
    description: 'Disabled list group example',
    type: 'registry:example',
    component: ListGroupDisabled,
    code: `import { ListGroup, ListGroupItem } from '@/components/ui/list-group';

export default function Component() {
  return (
    <ListGroup className="w-full max-w-sm">
      <ListGroupItem disabled>A disabled item</ListGroupItem>
      <ListGroupItem>A second item</ListGroupItem>
    </ListGroup>
  );
}`,
    files: [
      { path: 'components/examples/list-group-demo.tsx', type: 'registry:example', target: '' },
    ],
  },
  ListGroupActionable: {
    name: 'ListGroupActionable',
    description: 'Actionable list group example',
    type: 'registry:example',
    component: ListGroupActionable,
    code: `import { ListGroup, ListGroupAction } from '@/components/ui/list-group';

export default function Component() {
  return (
    <ListGroup className="w-full max-w-sm">
      <ListGroupAction href="#" active>Current link</ListGroupAction>
      <ListGroupAction href="#">A second link</ListGroupAction>
      <ListGroupAction href="#" disabled>Disabled link</ListGroupAction>
    </ListGroup>
  );
}`,
    files: [
      { path: 'components/examples/list-group-demo.tsx', type: 'registry:example', target: '' },
    ],
  },
  ListGroupFlush: {
    name: 'ListGroupFlush',
    description: 'Flush list group example',
    type: 'registry:example',
    component: ListGroupFlush,
    code: `import { ListGroup, ListGroupItem } from '@/components/ui/list-group';

export default function Component() {
  return (
    <ListGroup flush className="w-full max-w-sm">
      <ListGroupItem>An item</ListGroupItem>
      <ListGroupItem>A second item</ListGroupItem>
    </ListGroup>
  );
}`,
    files: [
      { path: 'components/examples/list-group-demo.tsx', type: 'registry:example', target: '' },
    ],
  },
  ListGroupContextual: {
    name: 'ListGroupContextual',
    description: 'Contextual list group example',
    type: 'registry:example',
    component: ListGroupContextual,
    code: `import { ListGroup, ListGroupItem } from '@/components/ui/list-group';

export default function Component() {
  return (
    <ListGroup className="w-full max-w-sm">
      <ListGroupItem>Default</ListGroupItem>
      <ListGroupItem theme="primary">Primary</ListGroupItem>
      <ListGroupItem theme="success">Success</ListGroupItem>
      <ListGroupItem theme="danger">Danger</ListGroupItem>
      <ListGroupItem theme="warning">Warning</ListGroupItem>
    </ListGroup>
  );
}`,
    files: [
      { path: 'components/examples/list-group-demo.tsx', type: 'registry:example', target: '' },
    ],
  },
  ListGroupWithBadges: {
    name: 'ListGroupWithBadges',
    description: 'List group with badges example',
    type: 'registry:example',
    component: ListGroupWithBadges,
    code: `import { Badge } from '@/components/ui/badge';
import { ListGroup, ListGroupItem } from '@/components/ui/list-group';

export default function Component() {
  return (
    <ListGroup className="w-full max-w-sm">
      <ListGroupItem className="flex justify-between">A list item<Badge shape="pill">14</Badge></ListGroupItem>
      <ListGroupItem className="flex justify-between">A second item<Badge shape="pill">2</Badge></ListGroupItem>
    </ListGroup>
  );
}`,
    files: [
      { path: 'components/examples/list-group-demo.tsx', type: 'registry:example', target: '' },
    ],
  },

  // ── Modal examples ────────────────────────────────────────────
  ModalDefault: {
    name: 'ModalDefault',
    description: 'Default modal example',
    type: 'registry:example',
    component: ModalDefault,
    code: `import { Button } from '@/components/ui/button';
import { Modal, ModalTrigger, ModalContent, ModalHeader, ModalTitle, ModalBody, ModalFooter, ModalClose } from '@/components/ui/modal';

export default function Component() {
  return (
    <Modal>
      <ModalTrigger asChild><Button>Open Modal</Button></ModalTrigger>
      <ModalContent>
        <ModalHeader><ModalTitle>Modal Title</ModalTitle></ModalHeader>
        <ModalBody><p className="text-sm">Modal body content.</p></ModalBody>
        <ModalFooter>
          <ModalClose asChild><Button variant="outlined">Cancel</Button></ModalClose>
          <Button>Save Changes</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}`,
    files: [{ path: 'components/examples/modal-demo.tsx', type: 'registry:example', target: '' }],
  },
  ModalSizes: {
    name: 'ModalSizes',
    description: 'Modal sizes example',
    type: 'registry:example',
    component: ModalSizes,
    code: `import { Button } from '@/components/ui/button';
import { Modal, ModalTrigger, ModalContent, ModalHeader, ModalTitle, ModalBody, ModalFooter, ModalClose } from '@/components/ui/modal';

export default function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <Modal key={size}>
          <ModalTrigger asChild><Button variant="outlined">{size.toUpperCase()}</Button></ModalTrigger>
          <ModalContent size={size}>
            <ModalHeader><ModalTitle>{size.toUpperCase()} Modal</ModalTitle></ModalHeader>
            <ModalBody><p className="text-sm">This is a {size} sized modal.</p></ModalBody>
            <ModalFooter><ModalClose asChild><Button>Close</Button></ModalClose></ModalFooter>
          </ModalContent>
        </Modal>
      ))}
    </div>
  );
}`,
    files: [{ path: 'components/examples/modal-demo.tsx', type: 'registry:example', target: '' }],
  },
  ModalScrollable: {
    name: 'ModalScrollable',
    description: 'Scrollable modal example',
    type: 'registry:example',
    component: ModalScrollable,
    files: [{ path: 'components/examples/modal-demo.tsx', type: 'registry:example', target: '' }],
  },

  // ── Dropdown examples ─────────────────────────────────────────
  DropdownDefault: {
    name: 'DropdownDefault',
    description: 'Default dropdown example',
    type: 'registry:example',
    component: DropdownDefault,
    code: `import { Button } from '@/components/ui/button';
import { Dropdown, DropdownTrigger, DropdownContent, DropdownItem, DropdownLabel, DropdownSeparator } from '@/components/ui/dropdown';

export default function Component() {
  return (
    <Dropdown>
      <DropdownTrigger asChild><Button variant="outlined">Open Menu</Button></DropdownTrigger>
      <DropdownContent>
        <DropdownLabel>My Account</DropdownLabel>
        <DropdownSeparator />
        <DropdownItem>Profile</DropdownItem>
        <DropdownItem>Settings</DropdownItem>
        <DropdownSeparator />
        <DropdownItem>Log out</DropdownItem>
      </DropdownContent>
    </Dropdown>
  );
}`,
    files: [
      { path: 'components/examples/dropdown-demo.tsx', type: 'registry:example', target: '' },
    ],
  },
  DropdownWithShortcuts: {
    name: 'DropdownWithShortcuts',
    description: 'Dropdown with keyboard shortcuts',
    type: 'registry:example',
    component: DropdownWithShortcuts,
    code: `import { Button } from '@/components/ui/button';
import { Dropdown, DropdownTrigger, DropdownContent, DropdownItem, DropdownShortcut } from '@/components/ui/dropdown';

export default function Component() {
  return (
    <Dropdown>
      <DropdownTrigger asChild><Button variant="outlined">Actions</Button></DropdownTrigger>
      <DropdownContent className="w-56">
        <DropdownItem>New Tab <DropdownShortcut>⌘T</DropdownShortcut></DropdownItem>
        <DropdownItem>Copy <DropdownShortcut>⌘C</DropdownShortcut></DropdownItem>
      </DropdownContent>
    </Dropdown>
  );
}`,
    files: [
      { path: 'components/examples/dropdown-demo.tsx', type: 'registry:example', target: '' },
    ],
  },
  DropdownDisabledItems: {
    name: 'DropdownDisabledItems',
    description: 'Dropdown with disabled items',
    type: 'registry:example',
    component: DropdownDisabledItems,
    code: `import { Button } from '@/components/ui/button';
import { Dropdown, DropdownTrigger, DropdownContent, DropdownItem, DropdownSeparator } from '@/components/ui/dropdown';

export default function Component() {
  return (
    <Dropdown>
      <DropdownTrigger asChild><Button variant="outlined">Options</Button></DropdownTrigger>
      <DropdownContent>
        <DropdownItem>Edit</DropdownItem>
        <DropdownSeparator />
        <DropdownItem disabled>Archive</DropdownItem>
      </DropdownContent>
    </Dropdown>
  );
}`,
    files: [
      { path: 'components/examples/dropdown-demo.tsx', type: 'registry:example', target: '' },
    ],
  },
  DropdownDark: {
    name: 'DropdownDark',
    description: 'Dark themed dropdown menu',
    type: 'registry:example',
    component: DropdownDark,
    files: [
      { path: 'components/examples/dropdown-demo.tsx', type: 'registry:example', target: '' },
    ],
  },

  // ── Tabs examples ─────────────────────────────────────────────
  TabsDefault: {
    name: 'TabsDefault',
    description: 'Default tabs example',
    type: 'registry:example',
    component: TabsDefault,
    code: `import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

export default function Component() {
  return (
    <Tabs defaultValue="account" className="w-full max-w-md">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account"><p className="text-sm">Account settings.</p></TabsContent>
      <TabsContent value="password"><p className="text-sm">Password settings.</p></TabsContent>
    </Tabs>
  );
}`,
    files: [{ path: 'components/examples/tabs-demo.tsx', type: 'registry:example', target: '' }],
  },
  TabsDisabled: {
    name: 'TabsDisabled',
    description: 'Tabs with disabled tab',
    type: 'registry:example',
    component: TabsDisabled,
    code: `import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

export default function Component() {
  return (
    <Tabs defaultValue="active" className="w-full max-w-md">
      <TabsList>
        <TabsTrigger value="active">Active</TabsTrigger>
        <TabsTrigger value="disabled" disabled>Disabled</TabsTrigger>
        <TabsTrigger value="another">Another</TabsTrigger>
      </TabsList>
      <TabsContent value="active"><p className="text-sm">Active tab content.</p></TabsContent>
      <TabsContent value="another"><p className="text-sm">Another tab content.</p></TabsContent>
    </Tabs>
  );
}`,
    files: [{ path: 'components/examples/tabs-demo.tsx', type: 'registry:example', target: '' }],
  },
  TabsPills: {
    name: 'TabsPills',
    description: 'Pills tabs variant — active tab fills with primary',
    type: 'registry:example',
    component: TabsPills,
    code: `import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

export default function Component() {
  return (
    <Tabs variant="pills" defaultValue="overview" className="w-full max-w-md">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
      </TabsList>
      <TabsContent value="overview"><p className="text-sm">Overview content.</p></TabsContent>
      <TabsContent value="analytics"><p className="text-sm">Analytics content.</p></TabsContent>
      <TabsContent value="reports"><p className="text-sm">Reports content.</p></TabsContent>
    </Tabs>
  );
}`,
    files: [{ path: 'components/examples/tabs-demo.tsx', type: 'registry:example', target: '' }],
  },
  TabsUnderline: {
    name: 'TabsUnderline',
    description: 'Underline tabs variant — active tab gets a primary underline',
    type: 'registry:example',
    component: TabsUnderline,
    code: `import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

export default function Component() {
  return (
    <Tabs variant="underline" defaultValue="general" className="w-full max-w-md">
      <TabsList>
        <TabsTrigger value="general">General</TabsTrigger>
        <TabsTrigger value="security">Security</TabsTrigger>
        <TabsTrigger value="billing">Billing</TabsTrigger>
      </TabsList>
      <TabsContent value="general"><p className="text-sm">General settings.</p></TabsContent>
      <TabsContent value="security"><p className="text-sm">Security settings.</p></TabsContent>
      <TabsContent value="billing"><p className="text-sm">Billing settings.</p></TabsContent>
    </Tabs>
  );
}`,
    files: [{ path: 'components/examples/tabs-demo.tsx', type: 'registry:example', target: '' }],
  },

  // ── Toast examples ────────────────────────────────────────────
  ToastDefault: {
    name: 'ToastDefault',
    description: 'Default toast example',
    type: 'registry:example',
    component: ToastDefault,
    code: `import { Toast, ToastTitle, ToastDescription } from '@/components/ui/toast';

export default function Component() {
  return (
    <Toast onDismiss={() => {}}>
      <ToastTitle>Notification</ToastTitle>
      <ToastDescription>This is a default toast message.</ToastDescription>
    </Toast>
  );
}`,
    files: [{ path: 'components/examples/toast-demo.tsx', type: 'registry:example', target: '' }],
  },
  ToastThemes: {
    name: 'ToastThemes',
    description: 'Toast themes example',
    type: 'registry:example',
    component: ToastThemes,
    code: `import { Toast, ToastTitle, ToastDescription } from '@/components/ui/toast';

export default function Component() {
  return (
    <div className="flex w-full flex-col gap-3">
      <Toast theme="success" onDismiss={() => {}}><ToastTitle>Success</ToastTitle><ToastDescription>Done!</ToastDescription></Toast>
      <Toast theme="danger" onDismiss={() => {}}><ToastTitle>Error</ToastTitle><ToastDescription>Failed.</ToastDescription></Toast>
    </div>
  );
}`,
    files: [{ path: 'components/examples/toast-demo.tsx', type: 'registry:example', target: '' }],
  },
  ToastSimple: {
    name: 'ToastSimple',
    description: 'Simple toast example',
    type: 'registry:example',
    component: ToastSimple,
    code: `import { Toast, ToastDescription } from '@/components/ui/toast';

export default function Component() {
  return <Toast><ToastDescription>Your file has been uploaded.</ToastDescription></Toast>;
}`,
    files: [{ path: 'components/examples/toast-demo.tsx', type: 'registry:example', target: '' }],
  },

  // ── Tooltip examples ──────────────────────────────────────────
  TooltipDefault: {
    name: 'TooltipDefault',
    description: 'Default tooltip example',
    type: 'registry:example',
    component: TooltipDefault,
    code: `import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export default function Component() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild><Button variant="outlined">Hover me</Button></TooltipTrigger>
        <TooltipContent><p>This is a tooltip</p></TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}`,
    files: [{ path: 'components/examples/tooltip-demo.tsx', type: 'registry:example', target: '' }],
  },
  TooltipPlacements: {
    name: 'TooltipPlacements',
    description: 'Tooltip placements example',
    type: 'registry:example',
    component: TooltipPlacements,
    code: `import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export default function Component() {
  return (
    <TooltipProvider>
      <div className="flex gap-4">
        {(['top', 'bottom', 'left', 'right'] as const).map((side) => (
          <Tooltip key={side}>
            <TooltipTrigger asChild><Button variant="outlined" size="sm">{side}</Button></TooltipTrigger>
            <TooltipContent side={side}><p>Tooltip on {side}</p></TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}`,
    files: [{ path: 'components/examples/tooltip-demo.tsx', type: 'registry:example', target: '' }],
  },
  TooltipThemes: {
    name: 'TooltipThemes',
    description: 'Tooltip with theme variants',
    type: 'registry:example',
    component: TooltipThemes,
    code: `import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const themes = ['neutral', 'primary', 'success', 'danger', 'warning', 'info', 'light'] as const;

export default function Component() {
  return (
    <TooltipProvider>
      <div className="flex flex-wrap gap-3">
        {themes.map((theme) => (
          <Tooltip key={theme}>
            <TooltipTrigger asChild><Button variant="outlined" size="sm">{theme}</Button></TooltipTrigger>
            <TooltipContent theme={theme}><p>{theme} tooltip</p></TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}`,
    files: [{ path: 'components/examples/tooltip-demo.tsx', type: 'registry:example', target: '' }],
  },

  // ── Popover examples ──────────────────────────────────────────
  PopoverDefault: {
    name: 'PopoverDefault',
    description: 'Default popover example',
    type: 'registry:example',
    component: PopoverDefault,
    code: `import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

export default function Component() {
  return (
    <Popover>
      <PopoverTrigger asChild><Button variant="outlined">Open Popover</Button></PopoverTrigger>
      <PopoverContent>
        <h4 className="font-medium">Popover Title</h4>
        <p className="text-sm text-neutral-500">Popover content here.</p>
      </PopoverContent>
    </Popover>
  );
}`,
    files: [{ path: 'components/examples/popover-demo.tsx', type: 'registry:example', target: '' }],
  },
  PopoverPlacements: {
    name: 'PopoverPlacements',
    description: 'Popover placements example',
    type: 'registry:example',
    component: PopoverPlacements,
    code: `import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

export default function Component() {
  return (
    <div className="flex gap-4">
      {(['top', 'bottom', 'left', 'right'] as const).map((side) => (
        <Popover key={side}>
          <PopoverTrigger asChild><Button variant="outlined" size="sm">{side}</Button></PopoverTrigger>
          <PopoverContent side={side} className="w-60"><p className="text-sm">Popover on {side}</p></PopoverContent>
        </Popover>
      ))}
    </div>
  );
}`,
    files: [{ path: 'components/examples/popover-demo.tsx', type: 'registry:example', target: '' }],
  },

  // ── Collapse examples ─────────────────────────────────────────
  CollapseDefault: {
    name: 'CollapseDefault',
    description: 'Default collapse example',
    type: 'registry:example',
    component: CollapseDefault,
    code: `import { Button } from '@/components/ui/button';
import { Collapse, CollapseTrigger, CollapseContent } from '@/components/ui/collapse';

export default function Component() {
  return (
    <Collapse className="flex flex-col gap-2">
      <CollapseTrigger asChild><Button variant="outlined">Toggle Content</Button></CollapseTrigger>
      <CollapseContent>
        <div className="rounded-md border p-4"><p className="text-sm">Collapsible content.</p></div>
      </CollapseContent>
    </Collapse>
  );
}`,
    files: [
      { path: 'components/examples/collapse-demo.tsx', type: 'registry:example', target: '' },
    ],
  },

  // ── Offcanvas examples ────────────────────────────────────────
  OffcanvasDefault: {
    name: 'OffcanvasDefault',
    description: 'Default offcanvas example',
    type: 'registry:example',
    component: OffcanvasDefault,
    code: `import { Button } from '@/components/ui/button';
import { Offcanvas, OffcanvasTrigger, OffcanvasContent, OffcanvasHeader, OffcanvasTitle, OffcanvasBody } from '@/components/ui/offcanvas';

export default function Component() {
  return (
    <Offcanvas>
      <OffcanvasTrigger asChild><Button variant="outlined">Open Offcanvas</Button></OffcanvasTrigger>
      <OffcanvasContent>
        <OffcanvasHeader><OffcanvasTitle>Offcanvas</OffcanvasTitle></OffcanvasHeader>
        <OffcanvasBody><p className="text-sm">Offcanvas content here.</p></OffcanvasBody>
      </OffcanvasContent>
    </Offcanvas>
  );
}`,
    files: [
      { path: 'components/examples/offcanvas-demo.tsx', type: 'registry:example', target: '' },
    ],
  },
  OffcanvasSides: {
    name: 'OffcanvasSides',
    description: 'Offcanvas sides example',
    type: 'registry:example',
    component: OffcanvasSides,
    code: `import { Button } from '@/components/ui/button';
import { Offcanvas, OffcanvasTrigger, OffcanvasContent, OffcanvasHeader, OffcanvasTitle, OffcanvasBody } from '@/components/ui/offcanvas';

export default function Component() {
  return (
    <div className="flex gap-2">
      {(['left', 'right', 'top', 'bottom'] as const).map((side) => (
        <Offcanvas key={side}>
          <OffcanvasTrigger asChild><Button variant="outlined" size="sm">{side}</Button></OffcanvasTrigger>
          <OffcanvasContent side={side}>
            <OffcanvasHeader><OffcanvasTitle>Offcanvas {side}</OffcanvasTitle></OffcanvasHeader>
            <OffcanvasBody><p className="text-sm">Slides from {side}.</p></OffcanvasBody>
          </OffcanvasContent>
        </Offcanvas>
      ))}
    </div>
  );
}`,
    files: [
      { path: 'components/examples/offcanvas-demo.tsx', type: 'registry:example', target: '' },
    ],
  },
  OffcanvasBodyScroll: {
    name: 'OffcanvasBodyScroll',
    description: 'Offcanvas with body scroll enabled',
    type: 'registry:example',
    component: OffcanvasBodyScroll,
    files: [
      { path: 'components/examples/offcanvas-demo.tsx', type: 'registry:example', target: '' },
    ],
  },

  // ── Search examples ───────────────────────────────────────────
  SearchDefault: {
    name: 'SearchDefault',
    description: 'Default search example',
    type: 'registry:example',
    component: SearchDefault,
    code: `import { useState } from 'react';
import { Search } from '@/components/ui/search';

export default function Component() {
  const [value, setValue] = useState('');
  return <Search placeholder="Search..." value={value} onChange={(e) => setValue(e.target.value)} onClear={() => setValue('')} />;
}`,
    files: [{ path: 'components/examples/search-demo.tsx', type: 'registry:example', target: '' }],
  },
  SearchSizes: {
    name: 'SearchSizes',
    description: 'Search sizes example',
    type: 'registry:example',
    component: SearchSizes,
    code: `import { Search } from '@/components/ui/search';

export default function Component() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <Search placeholder="Small..." size="sm" />
      <Search placeholder="Medium..." size="md" />
      <Search placeholder="Large..." size="lg" />
    </div>
  );
}`,
    files: [{ path: 'components/examples/search-demo.tsx', type: 'registry:example', target: '' }],
  },

  // ── Stepper examples ──────────────────────────────────────────
  StepperDefault: {
    name: 'StepperDefault',
    description: 'Default stepper example',
    type: 'registry:example',
    component: StepperDefault,
    code: `import { Stepper, Step } from '@/components/ui/stepper';

export default function Component() {
  return (
    <Stepper activeStep={1}>
      <Step step={0} title="Account" description="Create your account" />
      <Step step={1} title="Profile" description="Set up your profile" />
      <Step step={2} title="Complete" description="Review and finish" />
    </Stepper>
  );
}`,
    files: [{ path: 'components/examples/stepper-demo.tsx', type: 'registry:example', target: '' }],
  },
  StepperVertical: {
    name: 'StepperVertical',
    description: 'Vertical stepper example',
    type: 'registry:example',
    component: StepperVertical,
    code: `import { Stepper, Step } from '@/components/ui/stepper';

export default function Component() {
  return (
    <Stepper activeStep={2} orientation="vertical">
      <Step step={0} title="Order Placed" />
      <Step step={1} title="Processing" />
      <Step step={2} title="Shipped" />
      <Step step={3} title="Delivered" />
    </Stepper>
  );
}`,
    files: [{ path: 'components/examples/stepper-demo.tsx', type: 'registry:example', target: '' }],
  },
  StepperWarning: {
    name: 'StepperWarning',
    description: 'Stepper with warning state',
    type: 'registry:example',
    component: StepperWarning,
    files: [{ path: 'components/examples/stepper-demo.tsx', type: 'registry:example', target: '' }],
  },

  // ── Separator examples ────────────────────────────────────────
  SeparatorDefault: {
    name: 'SeparatorDefault',
    description: 'Default separator example with horizontal and vertical lines',
    type: 'registry:example',
    component: SeparatorDefault,
    code: `import { Separator } from '@/components/ui/separator';
import { Body2, Headline5, Label2 } from '@/components/ui/typography';

export default function Component() {
  return (
    <div className="w-full max-w-sm">
      <Headline5>IndiaCN</Headline5>
      <Body2 className="text-neutral-500">An open source design system.</Body2>
      <Separator className="my-4" />
      <div className="flex h-5 items-center gap-4 text-sm">
        <Label2>Docs</Label2>
        <Separator orientation="vertical" />
        <Label2>Source</Label2>
        <Separator orientation="vertical" />
        <Label2>License</Label2>
      </div>
    </div>
  );
}`,
    files: [
      { path: 'components/examples/separator-demo.tsx', type: 'registry:example', target: '' },
    ],
  },
  SeparatorVertical: {
    name: 'SeparatorVertical',
    description: 'Vertical separator example',
    type: 'registry:example',
    component: SeparatorVertical,
    code: `import { Separator } from '@/components/ui/separator';
import { Body2 } from '@/components/ui/typography';

export default function Component() {
  return (
    <div className="flex h-10 items-center gap-4">
      <Body2>Left</Body2>
      <Separator orientation="vertical" />
      <Body2>Middle</Body2>
      <Separator orientation="vertical" />
      <Body2>Right</Body2>
    </div>
  );
}`,
    files: [
      { path: 'components/examples/separator-demo.tsx', type: 'registry:example', target: '' },
    ],
  },
  SeparatorInList: {
    name: 'SeparatorInList',
    description: 'Separator used between list items',
    type: 'registry:example',
    component: SeparatorInList,
    code: `import { Separator } from '@/components/ui/separator';
import { Body2 } from '@/components/ui/typography';

export default function Component() {
  return (
    <div className="bg-neutral-0 w-full max-w-sm rounded-lg border border-neutral-200">
      <div className="p-3"><Body2>Account settings</Body2></div>
      <Separator />
      <div className="p-3"><Body2>Notifications</Body2></div>
      <Separator />
      <div className="p-3"><Body2>Privacy</Body2></div>
    </div>
  );
}`,
    files: [
      { path: 'components/examples/separator-demo.tsx', type: 'registry:example', target: '' },
    ],
  },

  // ── Skeleton examples ─────────────────────────────────────────
  SkeletonDefault: {
    name: 'SkeletonDefault',
    description: 'Default skeleton example',
    type: 'registry:example',
    component: SkeletonDefault,
    code: `import { Skeleton } from '@/components/ui/skeleton';

export default function Component() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}`,
    files: [
      { path: 'components/examples/skeleton-demo.tsx', type: 'registry:example', target: '' },
    ],
  },
  SkeletonCard: {
    name: 'SkeletonCard',
    description: 'Card skeleton example',
    type: 'registry:example',
    component: SkeletonCard,
    code: `import { Skeleton } from '@/components/ui/skeleton';

export default function Component() {
  return (
    <div className="flex w-[300px] flex-col space-y-3">
      <Skeleton className="h-[125px] w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    </div>
  );
}`,
    files: [
      { path: 'components/examples/skeleton-demo.tsx', type: 'registry:example', target: '' },
    ],
  },
  SkeletonList: {
    name: 'SkeletonList',
    description: 'List skeleton example',
    type: 'registry:example',
    component: SkeletonList,
    code: `import { Skeleton } from '@/components/ui/skeleton';

export default function Component() {
  return (
    <div className="w-full max-w-sm space-y-4">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex items-center space-x-4">
          <Skeleton className="size-10 rounded-full" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
          </div>
        </div>
      ))}
    </div>
  );
}`,
    files: [
      { path: 'components/examples/skeleton-demo.tsx', type: 'registry:example', target: '' },
    ],
  },
  // ── Form primitives ────────────────────────────────────────────
  label: {
    name: 'label',
    description: 'Accessible caption for a form control',
    type: 'registry:ui',
    component: Label,
    files: [{ path: 'components/ui/label.tsx', type: 'registry:ui', target: '' }],
  },
  checkbox: {
    name: 'checkbox',
    description: 'Tri-state checkbox with indeterminate support',
    type: 'registry:ui',
    component: Checkbox,
    files: [{ path: 'components/ui/checkbox.tsx', type: 'registry:ui', target: '' }],
  },
  'radio-group': {
    name: 'radio-group',
    description: 'Mutually exclusive option set',
    type: 'registry:ui',
    component: RadioGroup,
    files: [{ path: 'components/ui/radio-group.tsx', type: 'registry:ui', target: '' }],
  },
  switch: {
    name: 'switch',
    description: 'On/off toggle in two sizes',
    type: 'registry:ui',
    component: Switch,
    files: [{ path: 'components/ui/switch.tsx', type: 'registry:ui', target: '' }],
  },
  CheckboxDefault: {
    name: 'CheckboxDefault',
    description: 'Checkbox with an associated label',
    type: 'registry:example',
    component: CheckboxDefault,
    code: `import { useCallback, useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Body3 } from '@/components/ui/typography';

export default function Component() {
  return (
    <div className='flex items-center gap-3'>
      <Checkbox id='terms' defaultChecked />
      <Label htmlFor='terms'>Accept terms and conditions</Label>
    </div>
  );
}`,
    files: [
      { path: 'components/examples/checkbox-demo.tsx', type: 'registry:example', target: '' },
    ],
  },
  CheckboxStates: {
    name: 'CheckboxStates',
    description: 'Checked, indeterminate, unchecked, and disabled states',
    type: 'registry:example',
    component: CheckboxStates,
    code: `import { useCallback, useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Body3 } from '@/components/ui/typography';

export default function Component() {
  return (
    <div className='grid gap-4'>
      <div className='flex items-center gap-3'>
        <Checkbox id='state-checked' defaultChecked />
        <Label htmlFor='state-checked'>Checked</Label>
      </div>
      <div className='flex items-center gap-3'>
        <Checkbox id='state-indeterminate' checked='indeterminate' />
        <Label htmlFor='state-indeterminate'>Indeterminate</Label>
      </div>
      <div className='flex items-center gap-3'>
        <Checkbox id='state-unchecked' />
        <Label htmlFor='state-unchecked'>Unchecked</Label>
      </div>
      <div className='flex items-center gap-3'>
        <Checkbox id='state-disabled' disabled defaultChecked />
        <Label htmlFor='state-disabled'>Disabled</Label>
      </div>
    </div>
  );
}`,
    files: [
      { path: 'components/examples/checkbox-demo.tsx', type: 'registry:example', target: '' },
    ],
  },
  CheckboxGroup: {
    name: 'CheckboxGroup',
    description: 'Controlled multi-select checkbox group',
    type: 'registry:example',
    component: CheckboxGroup,
    code: `import { useCallback, useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Body3 } from '@/components/ui/typography';

const DOCUMENTS = ['Aadhaar', 'PAN card', 'Driving licence'];

interface IDocumentOptionProps {
  document: string;
  checked: boolean;
  onToggle: (document: string) => void;
}

/** Single checkbox row within the controlled group example. */
function DocumentOption({ document, checked, onToggle }: IDocumentOptionProps) {
  const handleCheckedChange = useCallback(() => onToggle(document), [document, onToggle]);

  return (
    <div className='flex items-center gap-3'>
      <Checkbox id={document} checked={checked} onCheckedChange={handleCheckedChange} />
      <Label htmlFor={document}>{document}</Label>
    </div>
  );
}

export default function Component() {
  const [selected, setSelected] = useState<string[]>(['Aadhaar']);

  const handleToggle = useCallback((document: string) => {
    setSelected((current) =>
      current.includes(document)
        ? current.filter((entry) => entry !== document)
        : [...current, document],
    );
  }, []);

  return (
    <div className='grid gap-3'>
      {DOCUMENTS.map((document) => (
        <DocumentOption
          key={document}
          document={document}
          checked={selected.includes(document)}
          onToggle={handleToggle}
        />
      ))}
      <Body3 className='text-neutral-500'>
        {selected.length} document{selected.length === 1 ? '' : 's'} selected
      </Body3>
    </div>
  );
}`,
    files: [
      { path: 'components/examples/checkbox-demo.tsx', type: 'registry:example', target: '' },
    ],
  },
  RadioGroupDefault: {
    name: 'RadioGroupDefault',
    description: 'Radio group for choosing a language',
    type: 'registry:example',
    component: RadioGroupDefault,
    code: `import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

export default function Component() {
  return (
    <RadioGroup defaultValue='hindi'>
      <div className='flex items-center gap-3'>
        <RadioGroupItem value='hindi' id='lang-hindi' />
        <Label htmlFor='lang-hindi'>हिन्दी</Label>
      </div>
      <div className='flex items-center gap-3'>
        <RadioGroupItem value='english' id='lang-english' />
        <Label htmlFor='lang-english'>English</Label>
      </div>
      <div className='flex items-center gap-3'>
        <RadioGroupItem value='tamil' id='lang-tamil' />
        <Label htmlFor='lang-tamil'>தமிழ்</Label>
      </div>
    </RadioGroup>
  );
}`,
    files: [
      { path: 'components/examples/radio-group-demo.tsx', type: 'registry:example', target: '' },
    ],
  },
  RadioGroupDisabled: {
    name: 'RadioGroupDisabled',
    description: 'Radio group with one option disabled',
    type: 'registry:example',
    component: RadioGroupDisabled,
    code: `import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

export default function Component() {
  return (
    <RadioGroup defaultValue='self'>
      <div className='flex items-center gap-3'>
        <RadioGroupItem value='self' id='applicant-self' />
        <Label htmlFor='applicant-self'>Applying for myself</Label>
      </div>
      <div className='flex items-center gap-3'>
        <RadioGroupItem value='other' id='applicant-other' />
        <Label htmlFor='applicant-other'>Applying on behalf of someone</Label>
      </div>
      <div className='flex items-center gap-3'>
        <RadioGroupItem value='agent' id='applicant-agent' disabled />
        <Label htmlFor='applicant-agent'>Applying as an agent (unavailable)</Label>
      </div>
    </RadioGroup>
  );
}`,
    files: [
      { path: 'components/examples/radio-group-demo.tsx', type: 'registry:example', target: '' },
    ],
  },
  RadioGroupHorizontal: {
    name: 'RadioGroupHorizontal',
    description: 'Radio group laid out horizontally',
    type: 'registry:example',
    component: RadioGroupHorizontal,
    code: `import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

export default function Component() {
  return (
    <RadioGroup defaultValue='yes' className='flex gap-6'>
      <div className='flex items-center gap-3'>
        <RadioGroupItem value='yes' id='consent-yes' />
        <Label htmlFor='consent-yes'>Yes</Label>
      </div>
      <div className='flex items-center gap-3'>
        <RadioGroupItem value='no' id='consent-no' />
        <Label htmlFor='consent-no'>No</Label>
      </div>
    </RadioGroup>
  );
}`,
    files: [
      { path: 'components/examples/radio-group-demo.tsx', type: 'registry:example', target: '' },
    ],
  },
  SwitchDefault: {
    name: 'SwitchDefault',
    description: 'Switch with an associated label',
    type: 'registry:example',
    component: SwitchDefault,
    code: `import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

export default function Component() {
  return (
    <div className='flex items-center gap-3'>
      <Switch id='notifications' defaultChecked />
      <Label htmlFor='notifications'>SMS notifications</Label>
    </div>
  );
}`,
    files: [{ path: 'components/examples/switch-demo.tsx', type: 'registry:example', target: '' }],
  },
  SwitchSizes: {
    name: 'SwitchSizes',
    description: 'Default and small switch sizes, on and off',
    type: 'registry:example',
    component: SwitchSizes,
    code: `import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

export default function Component() {
  return (
    <div className='grid gap-4'>
      <div className='flex items-center gap-3'>
        <Switch id='size-default' defaultChecked />
        <Label htmlFor='size-default'>Default, on</Label>
      </div>
      <div className='flex items-center gap-3'>
        <Switch id='size-default-off' />
        <Label htmlFor='size-default-off'>Default, off</Label>
      </div>
      <div className='flex items-center gap-3'>
        <Switch id='size-sm' size='sm' defaultChecked />
        <Label htmlFor='size-sm'>Small, on</Label>
      </div>
      <div className='flex items-center gap-3'>
        <Switch id='size-sm-off' size='sm' />
        <Label htmlFor='size-sm-off'>Small, off</Label>
      </div>
    </div>
  );
}`,
    files: [{ path: 'components/examples/switch-demo.tsx', type: 'registry:example', target: '' }],
  },
  SwitchDisabled: {
    name: 'SwitchDisabled',
    description: 'Disabled switch in both states',
    type: 'registry:example',
    component: SwitchDisabled,
    code: `import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

export default function Component() {
  return (
    <div className='grid gap-4'>
      <div className='flex items-center gap-3'>
        <Switch id='disabled-on' disabled defaultChecked />
        <Label htmlFor='disabled-on'>Disabled, on</Label>
      </div>
      <div className='flex items-center gap-3'>
        <Switch id='disabled-off' disabled />
        <Label htmlFor='disabled-off'>Disabled, off</Label>
      </div>
    </div>
  );
}`,
    files: [{ path: 'components/examples/switch-demo.tsx', type: 'registry:example', target: '' }],
  },
  // ── Indicator ──────────────────────────────
  indicator: {
    name: 'indicator',
    description: 'Notification dot, count, or status label',
    type: 'registry:ui',
    component: Indicator,
    files: [{ path: 'components/ui/indicator.tsx', type: 'registry:ui', target: '' }],
  },
  IndicatorDefault: {
    name: 'IndicatorDefault',
    description: 'All three indicator variants',
    type: 'registry:example',
    component: IndicatorDefault,
    code: `import { Bell, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Indicator } from '@/components/ui/indicator';
import { Body3, Label2 } from '@/components/ui/typography';

export default function Component() {
  return (
    <div className='flex items-center gap-6'>
      <Indicator variant='dot' />
      <Indicator variant='count'>3</Indicator>
      <Indicator variant='count'>32</Indicator>
      <Indicator variant='text'>Primary</Indicator>
    </div>
  );
}`,
    files: [
      { path: 'components/examples/indicator-demo.tsx', type: 'registry:example', target: '' },
    ],
  },
  IndicatorThemes: {
    name: 'IndicatorThemes',
    description: 'Indicator in primary, success and danger',
    type: 'registry:example',
    component: IndicatorThemes,
    code: `import { Bell, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Indicator } from '@/components/ui/indicator';
import { Body3, Label2 } from '@/components/ui/typography';

export default function Component() {
  return (
    <div className='grid gap-4'>
      <div className='flex items-center gap-4'>
        <Indicator theme='primary' variant='dot' />
        <Indicator theme='primary' variant='count'>
          3
        </Indicator>
        <Indicator theme='primary' variant='text'>
          Primary
        </Indicator>
      </div>
      <div className='flex items-center gap-4'>
        <Indicator theme='success' variant='dot' />
        <Indicator theme='success' variant='count'>
          3
        </Indicator>
        <Indicator theme='success' variant='text'>
          Success
        </Indicator>
      </div>
      <div className='flex items-center gap-4'>
        <Indicator theme='danger' variant='dot' />
        <Indicator theme='danger' variant='count'>
          3
        </Indicator>
        <Indicator theme='danger' variant='text'>
          Danger
        </Indicator>
      </div>
    </div>
  );
}`,
    files: [
      { path: 'components/examples/indicator-demo.tsx', type: 'registry:example', target: '' },
    ],
  },
  IndicatorAttached: {
    name: 'IndicatorAttached',
    description: 'Indicators attached to buttons and labels',
    type: 'registry:example',
    component: IndicatorAttached,
    code: `import { Bell, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Indicator } from '@/components/ui/indicator';
import { Body3, Label2 } from '@/components/ui/typography';

export default function Component() {
  return (
    <div className='flex items-center gap-8'>
      <div className='relative inline-flex'>
        <Button theme='primary' variant='outlined' size='md' iconButton aria-label='Notifications'>
          <Bell />
        </Button>
        <Indicator theme='danger' variant='count' className='absolute -top-1 -right-1'>
          5
        </Indicator>
      </div>

      <div className='relative inline-flex'>
        <Button theme='primary' variant='outlined' size='md' iconButton aria-label='Inbox'>
          <Mail />
        </Button>
        <Indicator theme='danger' variant='dot' className='absolute top-0 right-0' />
      </div>

      <div className='flex items-center gap-2'>
        <Label2>Grievance status</Label2>
        <Indicator theme='success' variant='text'>
          Resolved
        </Indicator>
      </div>
    </div>
  );
}`,
    files: [
      { path: 'components/examples/indicator-demo.tsx', type: 'registry:example', target: '' },
    ],
  },
  IndicatorCounts: {
    name: 'IndicatorCounts',
    description: 'How count width grows with the value',
    type: 'registry:example',
    component: IndicatorCounts,
    code: `import { Bell, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Indicator } from '@/components/ui/indicator';
import { Body3, Label2 } from '@/components/ui/typography';

export default function Component() {
  return (
    <div className='grid gap-3'>
      <div className='flex items-center gap-4'>
        <Indicator variant='count'>1</Indicator>
        <Indicator variant='count'>12</Indicator>
        <Indicator variant='count'>99+</Indicator>
      </div>
      <Body3 className='text-neutral-500'>
        A single digit renders a 16px circle; longer values grow into a pill.
      </Body3>
    </div>
  );
}`,
    files: [
      { path: 'components/examples/indicator-demo.tsx', type: 'registry:example', target: '' },
    ],
  },
  // ── Card variants ──────────────────────────────
  CardElevated: {
    name: 'CardElevated',
    description: 'Outlined and elevated card variants',
    type: 'registry:example',
    component: CardElevated,
    code: `import { Button } from '@/components/ui/button';
import {
import { Body2 } from '@/components/ui/typography';

export default function Component() {
  return (
    <div className='grid w-full max-w-2xl gap-6 sm:grid-cols-2'>
      <Card variant='outlined'>
        <CardHeader>
          <CardTitle>Outlined</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>The default. A 1px neutral-100 border, no shadow.</CardDescription>
        </CardContent>
      </Card>
      <Card variant='elevated'>
        <CardHeader>
          <CardTitle>Elevated</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>Same border, plus the UX4G card shadow.</CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}`,
    files: [{ path: 'components/examples/card-demo.tsx', type: 'registry:example', target: '' }],
  },
  // ── Avatar ──────────────────────────────
  avatar: {
    name: 'avatar',
    description: 'Avatar with picture, initials or icon fallback',
    type: 'registry:ui',
    component: Avatar,
    files: [{ path: 'components/ui/avatar.tsx', type: 'registry:ui', target: '' }],
  },
  AvatarDefault: {
    name: 'AvatarDefault',
    description: 'Picture, initials and icon fallbacks',
    type: 'registry:example',
    component: AvatarDefault,
    code: `import { User } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Indicator } from '@/components/ui/indicator';
import { Body3 } from '@/components/ui/typography';

export default function Component() {
  return (
    <div className='flex items-center gap-4'>
      <Avatar>
        <AvatarFallback>SM</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>
          <User aria-hidden />
        </AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src='/icon.svg' alt='Aarav Sharma' />
        <AvatarFallback>AS</AvatarFallback>
      </Avatar>
    </div>
  );
}`,
    files: [{ path: 'components/examples/avatar-demo.tsx', type: 'registry:example', target: '' }],
  },
  AvatarSizes: {
    name: 'AvatarSizes',
    description: 'All four avatar sizes',
    type: 'registry:example',
    component: AvatarSizes,
    code: `import { User } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Indicator } from '@/components/ui/indicator';
import { Body3 } from '@/components/ui/typography';

export default function Component() {
  return (
    <div className='flex items-end gap-4'>
      <Avatar size='sm'>
        <AvatarFallback>SM</AvatarFallback>
      </Avatar>
      <Avatar size='md'>
        <AvatarFallback>MD</AvatarFallback>
      </Avatar>
      <Avatar size='lg'>
        <AvatarFallback>LG</AvatarFallback>
      </Avatar>
      <Avatar size='xl'>
        <AvatarFallback>XL</AvatarFallback>
      </Avatar>
    </div>
  );
}`,
    files: [{ path: 'components/examples/avatar-demo.tsx', type: 'registry:example', target: '' }],
  },
  AvatarShapes: {
    name: 'AvatarShapes',
    description: 'Circular and rectangular avatars',
    type: 'registry:example',
    component: AvatarShapes,
    code: `import { User } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Indicator } from '@/components/ui/indicator';
import { Body3 } from '@/components/ui/typography';

export default function Component() {
  return (
    <div className='flex items-center gap-4'>
      <Avatar shape='circular' size='lg'>
        <AvatarFallback>CI</AvatarFallback>
      </Avatar>
      <Avatar shape='rectangular' size='lg'>
        <AvatarFallback>RE</AvatarFallback>
      </Avatar>
    </div>
  );
}`,
    files: [{ path: 'components/examples/avatar-demo.tsx', type: 'registry:example', target: '' }],
  },
  AvatarWithBadge: {
    name: 'AvatarWithBadge',
    description: 'Avatar composed with a status dot and a count Indicator',
    type: 'registry:example',
    component: AvatarWithBadge,
    code: `import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Indicator } from '@/components/ui/indicator';
import { Body3 } from '@/components/ui/typography';

export default function Component() {
  return (
    <div className='flex items-center gap-8'>
      <div className='relative inline-flex'>
        <Avatar size='lg'>
          <AvatarFallback>AS</AvatarFallback>
        </Avatar>
        <Indicator
          theme='success'
          variant='dot'
          className='ring-neutral-0 absolute right-[3px] bottom-[3px] ring-2'
        />
      </div>
      <div className='relative inline-flex'>
        <Avatar size='lg'>
          <AvatarFallback>RK</AvatarFallback>
        </Avatar>
        <Indicator theme='danger' className='ring-neutral-0 absolute -top-1 -right-1 ring-2'>
          3
        </Indicator>
      </div>
      <Body3 className='max-w-[26rem] text-neutral-600'>
        Indicators are positioned by the consumer. A status dot sits on the circle&apos;s
        bottom-right edge; a count overhangs the top-right corner.
      </Body3>
    </div>
  );
}`,
    files: [{ path: 'components/examples/avatar-demo.tsx', type: 'registry:example', target: '' }],
  },
  AvatarGroupDemo: {
    name: 'AvatarGroupDemo',
    description: 'Stacked avatar group with overflow badge',
    type: 'registry:example',
    component: AvatarGroupDemo,
    code: `import { Avatar, AvatarFallback, AvatarImage, AvatarGroup } from '@/components/ui/avatar';

export default function Component() {
  return (
    <div className='flex flex-col gap-6'>
      <AvatarGroup>
        <Avatar>
          <AvatarFallback>AS</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>RK</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>PM</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src='/icon.svg' alt='Dev User' />
          <AvatarFallback>DU</AvatarFallback>
        </Avatar>
      </AvatarGroup>
      <AvatarGroup max={3}>
        <Avatar>
          <AvatarFallback>AS</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>RK</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>PM</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>DU</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>VN</AvatarFallback>
        </Avatar>
      </AvatarGroup>
    </div>
  );
}`,
    files: [{ path: 'components/examples/avatar-demo.tsx', type: 'registry:example', target: '' }],
  },
  // ── Toast statuses ──────────────────────────────
  ToastStatuses: {
    name: 'ToastStatuses',
    description: 'Toast status glyphs per UX4G',
    type: 'registry:example',
    component: ToastStatuses,
    code: `import { Toast, ToastDescription, ToastTitle } from '@/components/ui/toast';

export default function Component() {
  return (
    <div className='flex flex-col gap-3'>
      <Toast status='success'>
        <ToastTitle>Application submitted</ToastTitle>
        <ToastDescription>Reference number MH-2026-44815.</ToastDescription>
      </Toast>
      <Toast status='warning'>
        <ToastTitle>Session expiring</ToastTitle>
        <ToastDescription>You will be signed out in two minutes.</ToastDescription>
      </Toast>
      <Toast status='error'>
        <ToastTitle>Upload failed</ToastTitle>
        <ToastDescription>The file exceeds the 5 MB limit.</ToastDescription>
      </Toast>
      <Toast status='info'>
        <ToastTitle>Aadhaar verification pending</ToastTitle>
        <ToastDescription>This usually takes under a minute.</ToastDescription>
      </Toast>
      <Toast status='loading'>
        <ToastTitle>Uploading documents</ToastTitle>
        <ToastDescription>Please keep this tab open.</ToastDescription>
      </Toast>
    </div>
  );
}`,
    files: [{ path: 'components/examples/toast-demo.tsx', type: 'registry:example', target: '' }],
  },
  // ── Accordion borderless ──────────────────────────────
  AccordionBorderless: {
    name: 'AccordionBorderless',
    description: 'Accordion without dividers',
    type: 'registry:example',
    component: AccordionBorderless,
    code: `import {

export default function Component() {
  return (
    <Accordion type='single' collapsible className='w-full max-w-lg'>
      <AccordionItem borderless value='eligibility'>
        <AccordionTrigger>Who is eligible to apply?</AccordionTrigger>
        <AccordionContent>
          Any resident of India aged 18 or over holding a valid Aadhaar number.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem borderless value='documents'>
        <AccordionTrigger>What documents are required?</AccordionTrigger>
        <AccordionContent>
          Proof of identity, proof of address, and a recent passport-size photograph.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}`,
    files: [
      { path: 'components/examples/accordion-demo.tsx', type: 'registry:example', target: '' },
    ],
  },
  // ── Search trailing actions ──────────────────────────────
  SearchWithTrailingActions: {
    name: 'SearchWithTrailingActions',
    description: 'Search with voice and assistant actions',
    type: 'registry:example',
    component: SearchWithTrailingActions,
    code: `import { Mic, Sparkles } from 'lucide-react';
import { useCallback, useState } from 'react';
import { Search } from '@/components/ui/search';
import { Body3 } from '@/components/ui/typography';

/** Icon button used in the search trailing slot. */
function TrailingAction({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <button
      type='button'
      className='text-neutral-600 hover:text-primary shrink-0 rounded-md p-2 transition-colors focus-visible:outline-none'
      aria-label={label}
    >
      {children}
    </button>
  );
}

export default function Component() {
  return (
    <div className='grid w-full max-w-md gap-2'>
      <Search
        size='xl'
        placeholder='Search for services'
        trailing={
          <>
            <TrailingAction label='Search by voice'>
              <Mic className='size-6' aria-hidden />
            </TrailingAction>
            <TrailingAction label='Ask the assistant'>
              <Sparkles className='size-6' aria-hidden />
            </TrailingAction>
          </>
        }
      />
      <Body3 className='text-neutral-600'>
        UX4G puts voice search and an assistant here. The slot takes any node.
      </Body3>
    </div>
  );
}`,
    files: [{ path: 'components/examples/search-demo.tsx', type: 'registry:example', target: '' }],
  },
  // ── Empty state ──────────────────────────────
  'empty-state': {
    name: 'empty-state',
    description: 'Placeholder for empty lists and panels',
    type: 'registry:ui',
    component: EmptyState,
    files: [{ path: 'components/ui/empty-state.tsx', type: 'registry:ui', target: '' }],
  },
  EmptyStateDefault: {
    name: 'EmptyStateDefault',
    description: 'Illustration with a label',
    type: 'registry:example',
    component: EmptyStateDefault,
    code: `import { FileSearch } from 'lucide-react';
import {
  EmptyState,
  EmptyStateDescription,
  EmptyStateMedia,
  EmptyStateTitle,
} from '@/components/ui/empty-state';

export default function Component() {
  return (
    <EmptyState>
      <EmptyStateMedia />
      <EmptyStateTitle>No data</EmptyStateTitle>
    </EmptyState>
  );
}`,
    files: [
      { path: 'components/examples/empty-state-demo.tsx', type: 'registry:example', target: '' },
    ],
  },
  EmptyStateWithDescription: {
    name: 'EmptyStateWithDescription',
    description: 'Empty state with supporting copy',
    type: 'registry:example',
    component: EmptyStateWithDescription,
    code: `import { FileSearch } from 'lucide-react';
import {
  EmptyState,
  EmptyStateDescription,
  EmptyStateMedia,
  EmptyStateTitle,
} from '@/components/ui/empty-state';

export default function Component() {
  return (
    <EmptyState>
      <EmptyStateMedia />
      <EmptyStateTitle>No applications yet</EmptyStateTitle>
      <EmptyStateDescription>
        Applications you submit will appear here for tracking.
      </EmptyStateDescription>
    </EmptyState>
  );
}`,
    files: [
      { path: 'components/examples/empty-state-demo.tsx', type: 'registry:example', target: '' },
    ],
  },
  EmptyStateWithAction: {
    name: 'EmptyStateWithAction',
    description: 'Empty state with a primary action',
    type: 'registry:example',
    component: EmptyStateWithAction,
    code: `import { FileSearch } from 'lucide-react';
import {
  EmptyState,
  EmptyStateDescription,
  EmptyStateMedia,
  EmptyStateTitle,
} from '@/components/ui/empty-state';

export default function Component() {
  return (
    <EmptyState>
      <EmptyStateMedia />
      <EmptyStateTitle>No grievances filed</EmptyStateTitle>
      <EmptyStateDescription>
        File a grievance and track its progress from this page.
      </EmptyStateDescription>
      <EmptyStateActions>
        <Button theme='primary' variant='filled' prefixIcon={<Plus />}>
          File a grievance
        </Button>
      </EmptyStateActions>
    </EmptyState>
  );
}`,
    files: [
      { path: 'components/examples/empty-state-demo.tsx', type: 'registry:example', target: '' },
    ],
  },
  EmptyStateCustomMedia: {
    name: 'EmptyStateCustomMedia',
    description: 'Empty state with a custom illustration',
    type: 'registry:example',
    component: EmptyStateCustomMedia,
    code: `import { FileSearch } from 'lucide-react';
import {
  EmptyState,
  EmptyStateDescription,
  EmptyStateMedia,
  EmptyStateTitle,
} from '@/components/ui/empty-state';

export default function Component() {
  return (
    <EmptyState>
      <EmptyStateMedia>
        <FileSearch className='size-16 text-neutral-300' aria-hidden />
      </EmptyStateMedia>
      <EmptyStateTitle>No results for “Aadhaar update”</EmptyStateTitle>
      <EmptyStateDescription>Check the spelling or try a broader term.</EmptyStateDescription>
    </EmptyState>
  );
}`,
    files: [
      { path: 'components/examples/empty-state-demo.tsx', type: 'registry:example', target: '' },
    ],
  },
  input: {
    name: 'input',
    description: 'Text field with sizes, validation states and icons',
    type: 'registry:ui',
    component: Input,
    files: [{ path: 'components/ui/input.tsx', type: 'registry:ui', target: '' }],
  },
  textarea: {
    name: 'textarea',
    description: 'Multi-line text field with a character counter',
    type: 'registry:ui',
    component: Textarea,
    files: [{ path: 'components/ui/textarea.tsx', type: 'registry:ui', target: '' }],
  },
  InputDefault: {
    name: 'InputDefault',
    description: 'Input with a label and description',
    type: 'registry:example',
    component: InputDefault,
    code: `import { Input, InputMessage } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function Component() {
  return (
    <div className='w-full max-w-[360px]'>
      <Label htmlFor='aadhaar' className='mb-2'>
        Aadhaar number
      </Label>
      <Input id='aadhaar' placeholder='XXXX XXXX XXXX' />
      <InputMessage>Twelve digits, as printed on your card.</InputMessage>
    </div>
  );
}`,
    files: [{ path: 'components/examples/input-demo.tsx', type: 'registry:example', target: '' }],
  },
  InputSizes: {
    name: 'InputSizes',
    description: 'The two sizes UX4G defines',
    type: 'registry:example',
    component: InputSizes,
    code: `import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function Component() {
  return (
    <div className='flex w-full max-w-[360px] flex-col gap-5'>
      <div>
        <Label htmlFor='size-md' className='mb-2'>
          Default — 44px
        </Label>
        <Input id='size-md' placeholder='Placeholder' />
      </div>
      <div>
        <Label htmlFor='size-lg' className='mb-2'>
          Large — 48px
        </Label>
        <Input id='size-lg' size='lg' placeholder='Placeholder' />
      </div>
    </div>
  );
}`,
    files: [{ path: 'components/examples/input-demo.tsx', type: 'registry:example', target: '' }],
  },
  InputStates: {
    name: 'InputStates',
    description: 'Error, success, warning and disabled states',
    type: 'registry:example',
    component: InputStates,
    code: `import { Input, InputMessage } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function Component() {
  return (
    <div className='flex w-full max-w-[360px] flex-col gap-5'>
      <div>
        <Label htmlFor='st-error' className='mb-2'>
          Error
        </Label>
        <Input id='st-error' state='error' defaultValue='1234' />
        <InputMessage state='error'>Enter all twelve digits.</InputMessage>
      </div>
      <div>
        <Label htmlFor='st-success' className='mb-2'>
          Success
        </Label>
        <Input id='st-success' state='success' defaultValue='2345 6789 0123' />
        <InputMessage state='success'>Verified with UIDAI.</InputMessage>
      </div>
      <div>
        <Label htmlFor='st-warning' className='mb-2'>
          Warning
        </Label>
        <Input id='st-warning' state='warning' defaultValue='2345 6789 0123' />
        <InputMessage state='warning'>This number is already linked to a claim.</InputMessage>
      </div>
      <div>
        <Label htmlFor='st-disabled' className='mb-2'>
          Disabled
        </Label>
        <Input id='st-disabled' disabled defaultValue='Locked after submission' />
      </div>
    </div>
  );
}`,
    files: [{ path: 'components/examples/input-demo.tsx', type: 'registry:example', target: '' }],
  },
  InputWithIcons: {
    name: 'InputWithIcons',
    description: 'Leading icon and clear button',
    type: 'registry:example',
    component: InputWithIcons,
    code: `import { Mail, Search as SearchIcon } from 'lucide-react';
import { ChangeEvent, useCallback, useState } from 'react';
import { Input } from '@/components/ui/input';

export default function Component() {
  const [value, setValue] = useState('priya@example.in');
  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value), []);
  const handleClear = useCallback(() => setValue(''), []);

  return (
    <div className='flex w-full max-w-[360px] flex-col gap-5'>
      <Input prefixIcon={<Mail />} placeholder='Email address' />
      <Input
        prefixIcon={<SearchIcon />}
        value={value}
        onChange={handleChange}
        onClear={handleClear}
        placeholder='Clearable'
      />
    </div>
  );
}`,
    files: [{ path: 'components/examples/input-demo.tsx', type: 'registry:example', target: '' }],
  },
  TextareaDefault: {
    name: 'TextareaDefault',
    description: 'Multi-line field with a label',
    type: 'registry:example',
    component: TextareaDefault,
    code: `import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function Component() {
  return (
    <div className='w-full max-w-[420px]'>
      <Label htmlFor='grievance' className='mb-2'>
        Describe your grievance
      </Label>
      <Textarea id='grievance' placeholder='What happened, and when?' />
    </div>
  );
}`,
    files: [{ path: 'components/examples/textarea-demo.tsx', type: 'registry:example', target: '' }],
  },
  TextareaWithCount: {
    name: 'TextareaWithCount',
    description: 'Character counter beneath the field',
    type: 'registry:example',
    component: TextareaWithCount,
    code: `import { ChangeEvent, useCallback, useState } from 'react';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function Component() {
  const [value, setValue] = useState('');
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value),
    [],
  );

  return (
    <div className='w-full max-w-[420px]'>
      <Label htmlFor='counted' className='mb-2'>
        Summary
      </Label>
      <Textarea
        id='counted'
        showCount
        maxLength={200}
        value={value}
        onChange={handleChange}
        placeholder='Up to 200 characters'
      />
    </div>
  );
}`,
    files: [{ path: 'components/examples/textarea-demo.tsx', type: 'registry:example', target: '' }],
  },
  TextareaStates: {
    name: 'TextareaStates',
    description: 'Error and success states',
    type: 'registry:example',
    component: TextareaStates,
    code: `import { InputMessage } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function Component() {
  return (
    <div className='flex w-full max-w-[420px] flex-col gap-5'>
      <div>
        <Label htmlFor='ta-error' className='mb-2'>
          Error
        </Label>
        <Textarea id='ta-error' state='error' defaultValue='Too short' />
        <InputMessage state='error'>Give at least 50 characters of detail.</InputMessage>
      </div>
      <div>
        <Label htmlFor='ta-success' className='mb-2'>
          Success
        </Label>
        <Textarea id='ta-success' state='success' defaultValue='Saved as draft.' />
        <InputMessage state='success'>Draft saved.</InputMessage>
      </div>
    </div>
  );
}`,
    files: [{ path: 'components/examples/textarea-demo.tsx', type: 'registry:example', target: '' }],
  },
  carousel: {
    name: 'carousel',
    description: 'Slideshow with indicators and accessible controls',
    type: 'registry:ui',
    component: Carousel,
    files: [{ path: 'components/ui/carousel.tsx', type: 'registry:ui', target: '' }],
  },
  CarouselDefault: {
    name: 'CarouselDefault',
    description: 'Carousel over light slides',
    type: 'registry:example',
    component: CarouselDefault,
    code: `import {
  Carousel,
  CarouselCaption,
  CarouselContent,
  CarouselIndicators,
  CarouselItem,
  CarouselNext,
  CarouselPlayPause,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Headline4 } from '@/components/ui/typography';

const SLIDES = [
  { title: 'Apply online', body: 'Start a new application from any device.' },
  { title: 'Track progress', body: 'Follow every stage with a reference number.' },
  { title: 'Collect your document', body: 'Download it or pick it up at a centre.' },
];

export default function Component() {
  return (
    <Carousel className='w-full max-w-[640px]' label='How it works'>
      <CarouselContent>
        {SLIDES.map(slide => (
          <CarouselItem key={slide.title}>
            <div className='flex h-[280px] items-center justify-center bg-neutral-50'>
              <Headline4 className='text-neutral-400'>{slide.title}</Headline4>
            </div>
            <CarouselCaption title={slide.title}>{slide.body}</CarouselCaption>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
      <CarouselIndicators />
    </Carousel>
  );
}`,
    files: [
      { path: 'components/examples/carousel-demo.tsx', type: 'registry:example', target: '' },
    ],
  },
  CarouselDark: {
    name: 'CarouselDark',
    description: 'Carousel over dark slides',
    type: 'registry:example',
    component: CarouselDark,
    code: `import {
  Carousel,
  CarouselCaption,
  CarouselContent,
  CarouselIndicators,
  CarouselItem,
  CarouselNext,
  CarouselPlayPause,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Headline4 } from '@/components/ui/typography';

const SLIDES = [
  { title: 'Apply online', body: 'Start a new application from any device.' },
  { title: 'Track progress', body: 'Follow every stage with a reference number.' },
  { title: 'Collect your document', body: 'Download it or pick it up at a centre.' },
];

export default function Component() {
  return (
    <Carousel variant='dark' className='w-full max-w-[640px]' label='How it works, dark slides'>
      <CarouselContent>
        {SLIDES.map(slide => (
          <CarouselItem key={slide.title}>
            <div className='bg-neutral flex h-[280px] items-center justify-center'>
              <Headline4 className='text-neutral-0/40'>{slide.title}</Headline4>
            </div>
            <CarouselCaption title={slide.title}>{slide.body}</CarouselCaption>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
      <CarouselIndicators />
    </Carousel>
  );
}`,
    files: [
      { path: 'components/examples/carousel-demo.tsx', type: 'registry:example', target: '' },
    ],
  },
  CarouselAutoPlay: {
    name: 'CarouselAutoPlay',
    description: 'Auto-advancing carousel with a pause control',
    type: 'registry:example',
    component: CarouselAutoPlay,
    code: `import {
  Carousel,
  CarouselCaption,
  CarouselContent,
  CarouselIndicators,
  CarouselItem,
  CarouselNext,
  CarouselPlayPause,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Headline4 } from '@/components/ui/typography';

const SLIDES = [
  { title: 'Apply online', body: 'Start a new application from any device.' },
  { title: 'Track progress', body: 'Follow every stage with a reference number.' },
  { title: 'Collect your document', body: 'Download it or pick it up at a centre.' },
];

export default function Component() {
  return (
    <Carousel
      autoPlayInterval={4000}
      className='w-full max-w-[640px]'
      label='How it works, advancing automatically'
    >
      <CarouselContent>
        {SLIDES.map(slide => (
          <CarouselItem key={slide.title}>
            <div className='flex h-[280px] items-center justify-center bg-neutral-50'>
              <Headline4 className='text-neutral-400'>{slide.title}</Headline4>
            </div>
            <CarouselCaption title={slide.title}>{slide.body}</CarouselCaption>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPlayPause />
      <CarouselPrevious />
      <CarouselNext />
      <CarouselIndicators />
    </Carousel>
  );
}`,
    files: [
      { path: 'components/examples/carousel-demo.tsx', type: 'registry:example', target: '' },
    ],
  },
};
