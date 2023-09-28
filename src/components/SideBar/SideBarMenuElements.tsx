import {
  ArrowDownIcon,
  ArrowRightIcon,
  CalendarIcon,
  ChatIcon,
  ContactIcon,
  CoursesIcon,
  DashboardIcon,
  EmailIcon,
  InvoicesIcon,
  KanbanIcon,
  SettingsIcon,
  ShopIcon,
} from '@/icons';

export type TElementArr = {
  Icon: () => JSX.Element;
  text: string;
  textClasses: string;
  RightChildren: (() => JSX.Element) | null;
};

export const ElementArr: TElementArr[] = [
  {
    Icon: DashboardIcon,
    text: 'Dashboard',
    textClasses: 'text-slate-600 text-lg font-semibold',
    RightChildren: null,
  },
  {
    Icon: EmailIcon,
    text: 'Email',
    textClasses: 'text-slate-600 text-lg font-semibold',
    RightChildren: function () {
      return (
        <div className=" w-fit flex gap-x-[1.38rem] mr-[3rem]">
          <p className="w-[1.8125rem] h-[1.8125rem] bg-cyan-300 rounded-[30px] text-white text-sm font-bold font-cairo flex justify-center items-center">
            17
          </p>
          <ArrowDownIcon />
        </div>
      );
    },
  },
  {
    Icon: ChatIcon,
    text: 'Chat',
    textClasses: 'text-indigo-400 text-lg font-semibold',
    RightChildren: null,
  },
  {
    Icon: KanbanIcon,
    text: 'Kanban',
    textClasses: 'text-violet-800 text-lg font-bold',
    RightChildren: function () {
      return (
        <div className=" w-fit flex gap-x-[1.38rem] mr-[3rem]">
          <ArrowRightIcon />
        </div>
      );
    },
  },
  {
    Icon: ContactIcon,
    text: 'Contact',
    textClasses: 'text-indigo-400 text-lg font-semibold',
    RightChildren: function () {
      return (
        <div className=" w-fit flex gap-x-[1.38rem] mr-[3rem]">
          <p className="w-[3.9375rem] h-[2.1875rem] bg-pink-500 rounded-[30px] text-white text-sm font-bold font-cairo flex justify-center items-center">
            NEW
          </p>
        </div>
      );
    },
  },
  {
    Icon: CalendarIcon,
    text: 'Calendar',
    textClasses: 'text-indigo-400 text-lg font-semibold',
    RightChildren: null,
  },
  {
    Icon: CoursesIcon,
    text: 'Courses',
    textClasses: 'text-indigo-400 text-lg font-semibold',
    RightChildren: function () {
      return (
        <div className=" w-fit flex gap-x-[1.38rem] mr-[3rem]">
          <ArrowRightIcon />
        </div>
      );
    },
  },
  {
    Icon: ShopIcon,
    text: 'Shop',
    textClasses: 'text-indigo-400 text-lg font-semibold',
    RightChildren: null,
  },
  {
    Icon: InvoicesIcon,
    text: 'Invoices',
    textClasses: 'text-indigo-400 text-lg font-semibold',
    RightChildren: function () {
      return (
        <div className=" w-fit flex gap-x-[1.38rem] mr-[3rem]">
          <ArrowRightIcon />
        </div>
      );
    },
  },
  {
    Icon: SettingsIcon,
    text: 'Settings',
    textClasses: 'text-indigo-400 text-lg font-semibold',
    RightChildren: null,
  },
  {
    Icon: DashboardIcon,
    text: 'Dashboard',
    textClasses: 'text-slate-600 text-lg font-semibold',
    RightChildren: null,
  },
  {
    Icon: EmailIcon,
    text: 'Email',
    textClasses: 'text-slate-600 text-lg font-semibold',
    RightChildren: function () {
      return (
        <div className=" w-fit flex gap-x-[1.38rem] mr-[3rem]">
          <p className="w-[1.8125rem] h-[1.8125rem] bg-cyan-300 rounded-[30px] text-white text-sm font-bold font-cairo flex justify-center items-center">
            17
          </p>
          <ArrowDownIcon />
        </div>
      );
    },
  },
  {
    Icon: ChatIcon,
    text: 'Chat',
    textClasses: 'text-indigo-400 text-lg font-semibold',
    RightChildren: null,
  },
  {
    Icon: KanbanIcon,
    text: 'Kanban',
    textClasses: 'text-violet-800 text-lg font-bold',
    RightChildren: function () {
      return (
        <div className=" w-fit flex gap-x-[1.38rem] mr-[3rem]">
          <ArrowRightIcon />
        </div>
      );
    },
  },
  {
    Icon: ContactIcon,
    text: 'Contact',
    textClasses: 'text-indigo-400 text-lg font-semibold',
    RightChildren: function () {
      return (
        <div className=" w-fit flex gap-x-[1.38rem] mr-[3rem]">
          <p className="w-[3.9375rem] h-[2.1875rem] bg-pink-500 rounded-[30px] text-white text-sm font-bold font-cairo flex justify-center items-center">
            NEW
          </p>
        </div>
      );
    },
  },
  {
    Icon: CalendarIcon,
    text: 'Calendar',
    textClasses: 'text-indigo-400 text-lg font-semibold',
    RightChildren: null,
  },
  {
    Icon: CoursesIcon,
    text: 'Courses',
    textClasses: 'text-indigo-400 text-lg font-semibold',
    RightChildren: function () {
      return (
        <div className=" w-fit flex gap-x-[1.38rem] mr-[3rem]">
          <ArrowRightIcon />
        </div>
      );
    },
  },
  {
    Icon: ShopIcon,
    text: 'Shop',
    textClasses: 'text-indigo-400 text-lg font-semibold',
    RightChildren: null,
  },
  {
    Icon: InvoicesIcon,
    text: 'Invoices',
    textClasses: 'text-indigo-400 text-lg font-semibold',
    RightChildren: function () {
      return (
        <div className=" w-fit flex gap-x-[1.38rem] mr-[3rem]">
          <ArrowRightIcon />
        </div>
      );
    },
  },
  {
    Icon: SettingsIcon,
    text: 'Settings',
    textClasses: 'text-indigo-400 text-lg font-semibold',
    RightChildren: null,
  },
  {
    Icon: DashboardIcon,
    text: 'Dashboard',
    textClasses: 'text-slate-600 text-lg font-semibold',
    RightChildren: null,
  },
  {
    Icon: EmailIcon,
    text: 'Email',
    textClasses: 'text-slate-600 text-lg font-semibold',
    RightChildren: function () {
      return (
        <div className=" w-fit flex gap-x-[1.38rem] mr-[3rem]">
          <p className="w-[1.8125rem] h-[1.8125rem] bg-cyan-300 rounded-[30px] text-white text-sm font-bold font-cairo flex justify-center items-center">
            17
          </p>
          <ArrowDownIcon />
        </div>
      );
    },
  },
  {
    Icon: ChatIcon,
    text: 'Chat',
    textClasses: 'text-indigo-400 text-lg font-semibold',
    RightChildren: null,
  },
  {
    Icon: KanbanIcon,
    text: 'Kanban',
    textClasses: 'text-violet-800 text-lg font-bold',
    RightChildren: function () {
      return (
        <div className=" w-fit flex gap-x-[1.38rem] mr-[3rem]">
          <ArrowRightIcon />
        </div>
      );
    },
  },
  {
    Icon: ContactIcon,
    text: 'Contact',
    textClasses: 'text-indigo-400 text-lg font-semibold',
    RightChildren: function () {
      return (
        <div className=" w-fit flex gap-x-[1.38rem] mr-[3rem]">
          <p className="w-[3.9375rem] h-[2.1875rem] bg-pink-500 rounded-[30px] text-white text-sm font-bold font-cairo flex justify-center items-center">
            NEW
          </p>
        </div>
      );
    },
  },
  {
    Icon: CalendarIcon,
    text: 'Calendar',
    textClasses: 'text-indigo-400 text-lg font-semibold',
    RightChildren: null,
  },
  {
    Icon: CoursesIcon,
    text: 'Courses',
    textClasses: 'text-indigo-400 text-lg font-semibold',
    RightChildren: function () {
      return (
        <div className=" w-fit flex gap-x-[1.38rem] mr-[3rem]">
          <ArrowRightIcon />
        </div>
      );
    },
  },
  {
    Icon: ShopIcon,
    text: 'Shop',
    textClasses: 'text-indigo-400 text-lg font-semibold',
    RightChildren: null,
  },
  {
    Icon: InvoicesIcon,
    text: 'Invoices',
    textClasses: 'text-indigo-400 text-lg font-semibold',
    RightChildren: function () {
      return (
        <div className=" w-fit flex gap-x-[1.38rem] mr-[3rem]">
          <ArrowRightIcon />
        </div>
      );
    },
  },
  {
    Icon: SettingsIcon,
    text: 'Settings',
    textClasses: 'text-indigo-400 text-lg font-semibold',
    RightChildren: null,
  },
  {
    Icon: DashboardIcon,
    text: 'Dashboard',
    textClasses: 'text-slate-600 text-lg font-semibold',
    RightChildren: null,
  },
  {
    Icon: EmailIcon,
    text: 'Email',
    textClasses: 'text-slate-600 text-lg font-semibold',
    RightChildren: function () {
      return (
        <div className=" w-fit flex gap-x-[1.38rem] mr-[3rem]">
          <p className="w-[1.8125rem] h-[1.8125rem] bg-cyan-300 rounded-[30px] text-white text-sm font-bold font-cairo flex justify-center items-center">
            17
          </p>
          <ArrowDownIcon />
        </div>
      );
    },
  },
  {
    Icon: ChatIcon,
    text: 'Chat',
    textClasses: 'text-indigo-400 text-lg font-semibold',
    RightChildren: null,
  },
  {
    Icon: KanbanIcon,
    text: 'Kanban',
    textClasses: 'text-violet-800 text-lg font-bold',
    RightChildren: function () {
      return (
        <div className=" w-fit flex gap-x-[1.38rem] mr-[3rem]">
          <ArrowRightIcon />
        </div>
      );
    },
  },
  {
    Icon: ContactIcon,
    text: 'Contact',
    textClasses: 'text-indigo-400 text-lg font-semibold',
    RightChildren: function () {
      return (
        <div className=" w-fit flex gap-x-[1.38rem] mr-[3rem]">
          <p className="w-[3.9375rem] h-[2.1875rem] bg-pink-500 rounded-[30px] text-white text-sm font-bold font-cairo flex justify-center items-center">
            NEW
          </p>
        </div>
      );
    },
  },
  {
    Icon: CalendarIcon,
    text: 'Calendar',
    textClasses: 'text-indigo-400 text-lg font-semibold',
    RightChildren: null,
  },
  {
    Icon: CoursesIcon,
    text: 'Courses',
    textClasses: 'text-indigo-400 text-lg font-semibold',
    RightChildren: function () {
      return (
        <div className=" w-fit flex gap-x-[1.38rem] mr-[3rem]">
          <ArrowRightIcon />
        </div>
      );
    },
  },
  {
    Icon: ShopIcon,
    text: 'Shop',
    textClasses: 'text-indigo-400 text-lg font-semibold',
    RightChildren: null,
  },
  {
    Icon: InvoicesIcon,
    text: 'Invoices',
    textClasses: 'text-indigo-400 text-lg font-semibold',
    RightChildren: function () {
      return (
        <div className=" w-fit flex gap-x-[1.38rem] mr-[3rem]">
          <ArrowRightIcon />
        </div>
      );
    },
  },
  {
    Icon: SettingsIcon,
    text: 'Settings',
    textClasses: 'text-indigo-400 text-lg font-semibold',
    RightChildren: null,
  },
];
